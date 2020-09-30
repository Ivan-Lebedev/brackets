module.exports = function check(str, bracketsConfig) {
  while (str.length > 2) {
    const constLength = str.length
    let previousLength
    for (let i = 0; i < bracketsConfig.length; i++) {
      str = str.replace(bracketsConfig[i].join(''), '')
      previousLength = str.length
    }
    if (previousLength === constLength) return false
  }

  for (let i = 0; i < bracketsConfig.length; i++) {
    if (str === bracketsConfig[i].join('') || !str) return true
  }
  return false
}