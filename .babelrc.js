const noModuleTransform = {
  presets: [[ '@babel/preset-env', { modules: false } ]]
}

module.exports = {
  presets: [[ '@babel/preset-env' ]],
  env: {
    modules: noModuleTransform,
    umd: noModuleTransform
  }
}
