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
    color: cyan
  },
  {
    name: 'vanilla',
    display: 'Vanilla',
    color: yellow
  }
]

const languages = [
  { name: 'typescript', display: 'TypeScript', color: cyan },
  { name: 'javascript', display: 'JavaScript', color: yellow }
]

const lightThemes = [
  { name: 'light', display: 'Light (default)', color: dim },
  { name: 'ocean', display: 'Ocean', color: cyan },
  { name: 'forest', display: 'Forest', color: green },
  { name: 'lavender', display: 'Lavender', color: magenta },
  { name: 'autumn', display: 'Autumn', color: yellow },
  { name: 'sunset', display: 'Sunset', color: red }
]

const darkThemes = [
  { name: 'dark', display: 'Dark (default)', color: dim },
  { name: 'cyberpunk', display: 'Cyberpunk', color: magenta },
  { name: 'forest-dark', display: 'Forest Dark', color: green },
  { name: 'ocean-dark', display: 'Ocean Dark', color: cyan }
]

const additionalThemes = [
  { name: 'ocean', display: 'Ocean', color: cyan },
  { name: 'forest', display: 'Forest', color: green },
  { name: 'cyberpunk', display: 'Cyberpunk', color: magenta },
  { name: 'lavender', display: 'Lavender', color: magenta },
  { name: 'autumn', display: 'Autumn', color: yellow },
  { name: 'sunset', display: 'Sunset', color: red }
]

const TEMPLATES = ['react-ts-full', 'react-ts-themes', 'react-js-full', 'react-js-themes', 'vanilla-ts', 'vanilla-js']

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
  const argv = minimist(process.argv.slice(2), { string: ['_'] })
  const argTargetDir = argv._[0]
  const argTemplate = argv.template

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
              throw new Error(red('✗') + ' Operation cancelled')
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
              value: framework.name
            }
          })
        },
        {
          type: 'select',
          name: 'language',
          message: 'Select a language:',
          initial: 0,
          choices: languages.map((lang) => ({
            title: lang.color(lang.display),
            value: lang.name
          }))
        },
        {
          type: 'confirm',
          name: 'includeComponents',
          message: 'Install FlowLabKit components?',
          initial: true
        },
        {
          type: 'select',
          name: 'defaultLightTheme',
          message: 'Select default light theme:',
          initial: 0,
          choices: lightThemes.map((theme) => ({
            title: theme.color(theme.display),
            value: theme.name
          }))
        },
        {
          type: 'select',
          name: 'defaultDarkTheme',
          message: 'Select default dark theme:',
          initial: 0,
          choices: darkThemes.map((theme) => ({
            title: theme.color(theme.display),
            value: theme.name
          }))
        },
        {
          type: 'multiselect',
          name: 'additionalThemes',
          message: 'Select additional themes (optional):',
          choices: (prev, values) => {
            // Filter out already selected themes
            const selected = [values.defaultLightTheme, values.defaultDarkTheme]
            const allAdditionalThemes = [
              { name: 'ocean', display: 'Ocean', color: cyan },
              { name: 'forest', display: 'Forest', color: green },
              { name: 'cyberpunk', display: 'Cyberpunk', color: magenta },
              { name: 'lavender', display: 'Lavender', color: magenta },
              { name: 'autumn', display: 'Autumn', color: yellow },
              { name: 'sunset', display: 'Sunset', color: red }
            ]
            return allAdditionalThemes
              .filter(theme => !selected.includes(theme.name))
              .map((theme) => ({
                title: theme.color(theme.display),
                value: theme.name,
                selected: false
              }))
          }
        }
      ],
      {
        onCancel: () => {
          throw new Error(red('✗') + ' Operation cancelled')
        }
      }
    )
  } catch (cancelled) {
    console.log(cancelled.message)
    return
  }

  // user choice associated with prompts
  let { 
    framework, 
    language, 
    includeComponents, 
    overwrite, 
    packageName, 
    defaultLightTheme,
    defaultDarkTheme,
    additionalThemes
  } = result

  const root = path.join(process.cwd(), targetDir)

  if (overwrite) {
    emptyDir(root)
  } else if (!fs.existsSync(root)) {
    fs.mkdirSync(root, { recursive: true })
  }

  // determine template based on framework, language, and components choice
  let template = argTemplate
  if (!template) {
    if (framework === 'react') {
      if (language === 'typescript') {
        template = includeComponents ? 'react-ts-full' : 'react-ts-themes'
      } else {
        template = includeComponents ? 'react-js-full' : 'react-js-themes'
      }
    } else if (framework === 'vanilla') {
      template = language === 'typescript' ? 'vanilla-ts' : 'vanilla-js'
      // Vanilla doesn't have component distinction, always themes-only
    }
  } else {
    // Derive framework and language from template when using --template
    if (template.startsWith('react-')) {
      framework = 'react'
      language = template.includes('-ts-') ? 'typescript' : 'javascript'
      includeComponents = template.includes('-full')
    } else if (template.startsWith('vanilla-')) {
      framework = 'vanilla'
      language = template.endsWith('-ts') ? 'typescript' : 'javascript'
      includeComponents = false // vanilla doesn't have full components
    }
  }

  console.log(`\nScaffolding project in ${root}...`)
  console.log(`\n${cyan('Configuration:')}`)
  console.log(`  Framework: ${framework}`)
  console.log(`  Language: ${language}`)
  console.log(`  Components: ${includeComponents ? 'Yes' : 'No (themes only)'}`)
  console.log(`  Default Light Theme: ${defaultLightTheme}`)
  console.log(`  Default Dark Theme: ${defaultDarkTheme}`)
  if (additionalThemes && additionalThemes.length > 0) {
    console.log(`  Additional Themes: ${additionalThemes.join(', ')}`)
  }
  console.log(`  Template: ${template}\n`)

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

  // Store theme configuration for project setup
  const allSelectedThemes = [defaultLightTheme, defaultDarkTheme, ...(additionalThemes || [])]
  const uniqueThemes = [...new Set(allSelectedThemes)].filter(Boolean)
  
  pkg.flowlabkit = {
    framework,
    language,
    includeComponents,
    themes: {
      defaultLight: defaultLightTheme,
      defaultDark: defaultDarkTheme,
      additional: additionalThemes || [],
      all: uniqueThemes
    },
    template,
    note: `FlowLabKit project with ${framework} + ${language}${includeComponents ? ' + components' : ' (themes only)'}`
  }

  write('package.json', JSON.stringify(pkg, null, 2) + '\n')

  const pkgInfo = pkgFromUserAgent(process.env.npm_config_user_agent)
  const pkgManager = pkgInfo ? pkgInfo.name : 'npm'

  console.log(`\n${green('Done!')} Now run:\n`)
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
  console.log(cyan('Happy theming with FlowLabKit!'))
}

init().catch((e) => {
  console.error(e)
})