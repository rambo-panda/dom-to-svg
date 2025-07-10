import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: './build.js',

  output: {
    file: 'index.js',
    format: 'esm',
  },
  treeshake: true,
  treeshake: {
    moduleSideEffects: false,
    propertyReadSideEffects: false,
    tryCatchDeoptimization: false,
    preset: 'recommended'
  },


  plugins: [
    nodeResolve({
      moduleDirectories: ['node_modules'],
      preferBuiltins: false
    }),
    commonjs(),
  ],
};
