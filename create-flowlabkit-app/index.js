#!/usr/bin/env node

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import minimist from 'minimist'
import prompts from 'prompts'
import { red, green, cyan, yellow, magenta, bold, dim } from 'kolorist'

// Get current directory
const __dirname = path.dirname(fileURLToPath(import.meta.url))

const frameworks = [
  {
    name: 'react',
    display: 'React',
    color: cyan,
    variants: [
      { name: 'react-ts-full', display: 'TypeScript + Components', color: cyan },
      { name: 'react-ts-themes', display: 'TypeScript + Themes Only', color: cyan },
      { name: 'react-js-full', display: 'JavaScript + Components', color: yellow },
      { name: 'react-js-themes', display: 'JavaScript + Themes Only', color: yellow }
    ]
  },
  {
    name: 'vanilla',
    display: 'Vanilla',
    color: yellow,
    variants: [
      { name: 'vanilla-ts', display: 'TypeScript', color: cyan },
      { name: 'vanilla-js', display: 'JavaScript', color: yellow }
    ]
  }
]

const themes = [
  { name: 'core', display: 'Light & Dark only', color: dim },
  { name: 'ocean', display: '+ Ocean theme', color: cyan },
  { name: 'forest', display: '+ Forest theme', color: green },
  { name: 'cyberpunk', display: '+ Cyberpunk theme', color: magenta },
  { name: 'all', display: 'All 8 themes', color: yellow }
]

const TEMPLATES = frameworks.map(f => f.variants.map(v => v.name)).flat()

function isValidPackageName(projectName) {
  return /^(?:@[a-z0-9-*~][a-z0-9-*._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/.test(projectName)
}

function toValidPackageName(projectName) {
  return projectName
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/^[._]/, '')
    .replace(/[^a-z0-9-~]+/g, '-')
}

function copy(src, dest) {
  const stat = fs.statSync(src)
  if (stat.isDirectory()) {
    copyDir(src, dest)
  } else {
    fs.copyFileSync(src, dest)
  }
}

function copyDir(srcDir, destDir) {
  fs.mkdirSync(destDir, { recursive: true })
  for (const file of fs.readdirSync(srcDir)) {
    const srcFile = path.resolve(srcDir, file)
    const destFile = path.resolve(destDir, file)
    copy(srcFile, destFile)
  }
}

function isEmpty(path) {
  const files = fs.readdirSync(path)
  return files.length === 0 || (files.length === 1 && files[0] === '.git')
}

function emptyDir(dir) {
  if (!fs.existsSync(dir)) {
    return
  }
  for (const file of fs.readdirSync(dir)) {
    if (file === '.git') {
      continue
    }
    fs.rmSync(path.resolve(dir, file), { recursive: true, force: true })
  }
}

function pkgFromUserAgent(userAgent) {
  if (!userAgent) return undefined
  const pkgSpec = userAgent.split(' ')[0]
  const pkgSpecArr = pkgSpec.split('/')
  return {
    name: pkgSpecArr[0],
    version: pkgSpecArr[1]
  }
}

async function init() {
  const argTargetDir = process.argv[2]
  const argTemplate = process.argv[3]

  let targetDir = argTargetDir || 'flowlabkit-project'

  const getProjectName = () =>
    targetDir === '.' ? path.basename(path.resolve()) : targetDir

  let result = {}

  try {
    result = await prompts(
      [
        {
          type: argTargetDir ? null : 'text',
          name: 'projectName',
          message: 'Project name:',
          initial: 'flowlabkit-project',
          onState: (state) => {
            targetDir = state.value.trim() || 'flowlabkit-project'
          }
        },
        {
          type: () => !fs.existsSync(targetDir) || isEmpty(targetDir) ? null : 'confirm',
          name: 'overwrite',
          message: () =>
            (targetDir === '.' ? 'Current directory' : `Target directory "${targetDir}"`) +
            ` is not empty. Remove existing files and continue?`
        },
        {
          type: (_, { overwrite }) => {
            if (overwrite === false) {
              throw new Error(red('✖') + ' Operation cancelled')
            }
            return null
          },
          name: 'overwriteChecker'
        },
        {
          type: () => (isValidPackageName(getProjectName()) ? null : 'text'),
          name: 'packageName',
          message: 'Package name:',
          initial: () => toValidPackageName(getProjectName()),
          validate: (dir) => isValidPackageName(dir) || 'Invalid package.json name'
        },
        {
          type: argTemplate && TEMPLATES.includes(argTemplate) ? null : 'select',
          name: 'framework',
          message: 'Select a framework:',
          initial: 0,
          choices: frameworks.map((framework) => {
            const frameworkColor = framework.color
            return {
              title: frameworkColor(framework.display || framework.name),
              value: framework
            }
          })
        },
        {
          type: (framework) => framework && framework.variants ? 'select' : null,
          name: 'variant',
          message: 'Select setup type:',
          choices: (framework) => framework.variants.map((variant) => {
            const variantColor = variant.color
            return {
              title: variantColor(variant.display || variant.name),
              value: variant.name
            }
          })
        },
        {
          type: 'select',
          name: 'themes',
          message: 'Select themes to include:',
          choices: themes.map((theme) => ({
            title: theme.color(theme.display),
            value: theme.name
          }))
        }
      ],
      {
        onCancel: () => {
          throw new Error(red('✖') + ' Operation cancelled')
        }
      }
    )
  } catch (cancelled) {
    console.log(cancelled.message)
    return
  }

  // user choice associated with prompts
  const { framework, overwrite, packageName, variant, themes: selectedThemes } = result

  const root = path.join(process.cwd(), targetDir)

  if (overwrite) {
    emptyDir(root)
  } else if (!fs.existsSync(root)) {
    fs.mkdirSync(root, { recursive: true })
  }

  // determine template
  const template = variant || framework?.name || argTemplate

  console.log(`\\nScaffolding project in ${root}...`)

  const templateDir = path.resolve(__dirname, 'templates', template)

  const write = (file, content) => {
    const targetPath = path.join(root, file)
    if (content) {
      fs.writeFileSync(targetPath, content)
    } else {
      copy(path.join(templateDir, file), targetPath)
    }
  }

  const files = fs.readdirSync(templateDir)
  for (const file of files.filter((f) => f !== 'package.json')) {
    write(file)
  }

  const pkg = JSON.parse(
    fs.readFileSync(path.join(templateDir, `package.json`), 'utf-8')
  )

  pkg.name = packageName || getProjectName()

  // Update dependencies based on theme selection
  if (selectedThemes === 'core') {
    // Keep only core themes
    if (pkg.dependencies && pkg.dependencies['@flowlabkit/ui']) {
      // Template will use core imports
    }
  } else if (selectedThemes !== 'all') {
    // Add specific theme note to package.json
    pkg.flowlabkit = {
      themes: [selectedThemes],
      note: `This project includes ${selectedThemes} theme. You can import additional themes from @flowlabkit/ui/themes`
    }
  }

  write('package.json', JSON.stringify(pkg, null, 2) + '\\n')

  const pkgInfo = pkgFromUserAgent(process.env.npm_config_user_agent)
  const pkgManager = pkgInfo ? pkgInfo.name : 'npm'

  console.log(`\\n${green('✓')} Done. Now run:\\n`)
  if (root !== process.cwd()) {
    console.log(`  cd ${path.relative(process.cwd(), root)}`)
  }
  switch (pkgManager) {
    case 'yarn':
      console.log('  yarn')
      console.log('  yarn dev')
      break
    default:
      console.log(`  ${pkgManager} install`)
      console.log(`  ${pkgManager} run dev`)
      break
  }
  console.log()
  console.log(cyan('🎨 Happy theming with FlowLabKit!'))
}

init().catch((e) => {
  console.error(e)
})