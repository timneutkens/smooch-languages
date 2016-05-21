function smoochLanguages ( language ) {
  return require('./languages/' + language)
}

module.exports = smoochLanguages