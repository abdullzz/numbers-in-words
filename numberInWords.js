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
    100: "seratus",
    1000: "seribu"
  }

  let handler = ""

  if (num === 0){
    return "" // base case if num equal to zero return empty string
  } else {
    if (num < 12) {
      return objBilangan[num] + in_words(0)
    } else if (num < 20) {
      return objBilangan[num % 10] + " belas" + in_words(0)
    } else if (num < 100) {
      return objBilangan[Math.floor(num / 10)] + " puluh " + in_words(Math.floor(num % 10))
    } else if (num === 100) {
      return objBilangan[num] + in_words(0)
    } else if (num < 200) {
      return "seratus " + in_words(num % 100)
    } else if (num < 1000 ) {
      return objBilangan[Math.floor(num / 100)] + " ratus " + in_words(num % 100)
    } else if (num === 1000) {
      return objBilangan[num] + in_words(0) 
    } else if (num < 2000) {
      return objBilangan[1000] + " " + in_words(num % 1000)
    } else if (num < 1000000){
      handler += in_words(Math.floor(num / 1000)) + " ribu "
      num = num % 1000 
    } else if (num < 1000000000){
      handler += in_words(Math.floor(num / 1000000)) + " juta "
      num = num % 1000000
    } else if (num < 1000000000000){
      handler += in_words(Math.floor(num / 1000000000)) + " miliar "
      num = num % 1000000000
    } else if (num < 1000000000000000){
      handler += in_words(Math.floor(num / 1000000000000)) + " triliun "
      num = num % 1000000000000
    }

    return handler += in_words(num);
  }
}

console.log(in_words(4))
console.log(in_words(17))
console.log(in_words(19))
console.log(in_words(27))
console.log(in_words(99))
console.log(in_words(100))
console.log(in_words(102))
console.log(in_words(192))
console.log(in_words(999))
console.log(in_words(1000))
console.log(in_words(1001))
console.log(in_words(38079))
console.log(in_words(82102713))
console.log(in_words(182102713))
console.log(in_words(999102713))
console.log(in_words(10982102713))
console.log(in_words(999999999999))


