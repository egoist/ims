import babel from 'rollup-plugin-babel'

export default {
  entry: './src/index.js',
  plugins: [
    babel({
      presets: ['es2015-rollup', 'stage-1'],
      exclude: 'node_modules/**',
      babelrc: false
    })
  ],
  dest: './index.js',
  format: 'cjs'
}
