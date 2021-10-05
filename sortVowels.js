function sortVowels(s) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

  const string = []
  if (typeof(s) == 'string') {
    const sToArr = [...s]
    sToArr.forEach((i) => {
      if (vowels.includes(i)) {
        string.push(`|${i}\n`)
      } else {
        string.push(`${i}|\n`)
      }
    })

   return string.join('').replace(/\n$/, '')
  } else {
    return ''
  }
}
