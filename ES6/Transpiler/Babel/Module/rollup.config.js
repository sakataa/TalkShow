/*
export default {
  entry: './Scripts/Import/userManager.js',
  format: 'cjs',
  dest: './Rollup/userManager.rollup.js' // equivalent to --output
};
*/

import { rollup } from 'rollup';
import babel from 'rollup-plugin-babel';

export default {
  entry: './Scripts/Import/userManager.js',
  format: 'cjs',
  plugins: [
      babel({
        exclude: 'node_modules/**'
        })
  ],
  dest: './Rollup/userManager.rollup.babel.js'
};