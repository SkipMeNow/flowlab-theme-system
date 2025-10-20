import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import dts from 'rollup-plugin-dts';
import { readFileSync } from 'fs';

const packageJson = JSON.parse(readFileSync('./package.json', 'utf8'));

export default [
  // Main bundle
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
        exports: 'named',
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      resolve({
        browser: true,
      }),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        exclude: ['**/*.test.*', '**/*.spec.*'],
      }),
      postcss({
        extract: true,
        minimize: true,
      }),
    ],
    external: [
      'react',
      'react-dom',
      'react/jsx-runtime',
      'react/jsx-dev-runtime'
    ],
  },
  // Core bundle (minimal theme system)
  {
    input: 'src/core/index.ts',
    output: [
      {
        file: 'dist/core/index.js',
        format: 'cjs',
        sourcemap: true,
        exports: 'named',
      },
      {
        file: 'dist/core/index.esm.js',
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      resolve({
        browser: true,
      }),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        exclude: ['**/*.test.*', '**/*.spec.*'],
      }),
    ],
    external: [
      'react',
      'react-dom',
      'react/jsx-runtime',
      'react/jsx-dev-runtime'
    ],
  },
  // Components bundle (UI components only)
  {
    input: 'src/components-module/index.ts',
    output: [
      {
        file: 'dist/components/index.js',
        format: 'cjs',
        sourcemap: true,
        exports: 'named',
      },
      {
        file: 'dist/components/index.esm.js',
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      resolve({
        browser: true,
      }),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        exclude: ['**/*.test.*', '**/*.spec.*'],
      }),
    ],
    external: [
      'react',
      'react-dom',
      'react/jsx-runtime',
      'react/jsx-dev-runtime'
    ],
  },
  // Themes bundle (additional themes only)
  {
    input: 'src/themes-module/index.ts',
    output: [
      {
        file: 'dist/themes/index.js',
        format: 'cjs',
        sourcemap: true,
        exports: 'named',
      },
      {
        file: 'dist/themes/index.esm.js',
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      resolve({
        browser: true,
      }),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        exclude: ['**/*.test.*', '**/*.spec.*'],
      }),
    ],
    external: [
      'react',
      'react-dom',
      'react/jsx-runtime',
      'react/jsx-dev-runtime'
    ],
  },
  // Main types
  {
    input: 'src/index.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: [
      'react',
      'react-dom',
      'react/jsx-runtime',
      'react/jsx-dev-runtime'
    ],
  },
  // Core types
  {
    input: 'src/core/index.ts',
    output: [{ file: 'dist/core/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: [
      'react',
      'react-dom',
      'react/jsx-runtime',
      'react/jsx-dev-runtime'
    ],
  },
  // Components types
  {
    input: 'src/components-module/index.ts',
    output: [{ file: 'dist/components/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: [
      'react',
      'react-dom',
      'react/jsx-runtime',
      'react/jsx-dev-runtime'
    ],
  },
  // Themes types
  {
    input: 'src/themes-module/index.ts',
    output: [{ file: 'dist/themes/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: [
      'react',
      'react-dom',
      'react/jsx-runtime',
      'react/jsx-dev-runtime'
    ],
  },
];