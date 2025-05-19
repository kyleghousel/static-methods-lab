class Formatter {

  constructor (string) {
    this.string = string
  }

  static capitalize(word) {
    return word[0].toUpperCase() + word.slice(1)
  }

  static sanitize(word) {
    return word.replace(/[^A-Za-z0-9\-'\s]/g, "")
  }

  static titleize(sentence) {
    const noCap = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']

    return sentence
      .toLowerCase()
      .split(" ")
      .map((word, index) => {
        if (index === 0 || !noCap.includes(word)) {
          return word[0].toUpperCase() + word.slice(1)
        } else {
          return word
        }
      })
      .join(" ")
  }
}
