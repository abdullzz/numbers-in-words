function devider (number) {
  let devider = [1000000000000, 1000000000, 1000000, 1000, 100, 10, 1]
  let result = []

  for (let num of devider) {
    if (number <= 19 && number >= 11) {
      result.push({
        number: number,
        devidedBy: 10,
        multiplier: 1,
      })
      number -= number
    } else if (number / num >= 1) {
      result.push({
        number: Math.floor(number / num) * num,
        devidedBy: num,
        multiplier: Math.floor(number / num),
      })
      number -= Math.floor(number / num) * num
    }
  }

  return result
}

function convertToString (number) {
  let references = {
    '1': 'satu',
    '2': 'dua',
    '3': 'tiga',
    '4': 'empat',
    '5': 'lima',
    '6': 'enam',
    '7': 'tujuh',
    '8': 'delapan',
    '9': 'sembilan',
    '10': 'puluh',
    '11': 'sebelas',
    '12': 'dua belas',
    '13': 'tiga belas',
    '14': 'empat belas',
    '15': 'lima belas',
    '16': 'enam belas',
    '17': 'tujuh belas',
    '18': 'delapan belas',
    '19': 'sembilan belas',
    '100': 'ratus',
    '1000': 'ribu',
    '1000000': 'juta',
    '1000000000': 'milyar',
    '1000000000000': 'triliun',
  }

  let result = ''

  if (number.multiplier === 11) {
    return references[number.multiplier] + references[number.devidedBy]
  } else if (number.multiplier >= 10) {
    return in_words(number.multiplier) + references[number.devidedBy]
  } else {
    if (number.multiplier === 1) {
      if (number.number >= 11 && number.number <= 19) {
        return references[number.number]
      }
      return 'se' + references[number.devidedBy]
    } else {
      if (number.devidedBy === 1) {
        return references[number.multiplier]
      }
      return references[number.multiplier] + ' ' + references[number.devidedBy]
    }
  }

}

function in_words (number) {
  return devider(number).reduce((a, num) => a += convertToString(num) + ' ', '')
}

console.log(in_words(111))
console.log(in_words(102))
console.log(in_words(999))
console.log(in_words(123))
console.log(in_words(1234))
console.log(in_words(12345))
console.log(in_words(12))
console.log(in_words(123456))
console.log(in_words(38079))
console.log(in_words(82102713))
console.log(in_words(12345678900000))
