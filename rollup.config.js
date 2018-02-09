import babel from 'rollup-plugin-babel'
import commonJs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'
import uglify from 'rollup-plugin-uglify'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.min.js',
    format: 'umd',
    name: '__PROJECT_NAME__'
  },
  plugins: [
    babel(),
    commonJs(),
    nodeResolve(),
    uglify()
  ]
}
