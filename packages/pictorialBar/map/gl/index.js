import gl from './src/main'

gl.install = function(Vue) {
  Vue.component(gl.name, gl)
}

export default gl