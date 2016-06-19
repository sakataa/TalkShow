
/*
export default {
  entry: './Scripts/Import/defaultManager.js',
  format: 'cjs',
  dest: './Rollup/defaultManager.rollup.js' // equivalent to --output
};
*/



import { rollup } from 'rollup';
import babel from 'rollup-plugin-babel';

export default {
  entry: './Scripts/Import/defaultManager.js',
  format: 'cjs',
  plugins: [
      babel({
        exclude: 'node_modules/**'
        })
  ],
  dest: './Rollup/defaultManager.rollup.babel.js'
};
