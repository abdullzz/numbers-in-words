function in_words(num) {
  let objBilangan = {
    1: "satu",
    2: "dua",
    3: "tiga",
    4: "empat",
    5: "lima",
    6: "enam",
    7: "tujuh",
    8: "delapan",
    9: "sembilan",
    10: "sepuluh",
    11: "sebelas",
    20: "dua puluh",
    30: "tiga puluh",
    40: "empat puluh",
    50: "lima puluh",
    60: "enam puluh",
    70: "tujuh puluh",
    80: "delapan puluh",
    90: "sembilan puluh",
    100: "seratus",
    1000: "seribu"
  }

  let bilangan = ""

  if (num === 0){
    return "" // base case if num equal to zero return empty string
  } else {
    console.log(num)
    if (num < 12) {
      bilangan += objBilangan[num % 10]
      num = 0;
    }

    
      return bilangan + in_words(num)
    }
}

console.log(in_words(4))
// console.log(in_words(17))
// console.log(in_words(19))
// console.log(in_words(27))
// console.log(in_words(99))
// console.log(in_words(101))
// console.log(in_words(102))
// console.log(in_words(200))
// console.log(in_words(38079))
// console.log(in_words(82102713))