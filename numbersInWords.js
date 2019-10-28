function inWords(num) {
    var number = ["nol", "satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan", "sepuluh", "sebelas"]
    if (num === 0) {
        return ""
    } else if (num <= 11) {
        return number[num]
    } else if (num > 11 && num < 20) {
        return number[num % 10] + " belas"
    } else {
        if (num < 100) {
            return number[Math.floor(num / 10)] + " puluh " + inWords(num % 10)
        } else if (num < 1000) {
            if (num >= 100 && num < 200) {
                return "seratus " + inWords(num % 100)
            } else {
                return number[Math.floor(num / 100)] + " ratus " + inWords(num % 100)
            }
        } else if (num < 10000) {
            if (num >= 1000 && num < 2000) {
                return "seribu " + inWords(num % 1000)
            } else {
                return number[Math.floor(num / 1000)] + " ribu " + inWords(num % 1000)
            }
        } else if (num < 100000) {
            if (num >= 1000 && num < 2000) {
                return "sepuluh " + inWords(num % 10000)
            } else {
                return number[Math.floor(num / 10000)] + " puluh " + inWords(num % 10000)
            }
        } else if (num < 1000000) {
            if (num >= 100000 && num < 200000) {
                return "seratus " + inWords(num % 100000)
            } else {
                return number[Math.floor(num / 100000)] + " ratus " + inWords(num % 100000)
            }
        } else if (num < 10000000) {
            return number[Math.floor(num / 1000000)] + " juta " + inWords(num % 1000000)
        } else if (num < 100000000) {
            return number[Math.floor(num / 10000000)] + " puluh " + inWords(num % 10000000)
        } else if (num < 1000000000) {
            return number[Math.floor(num / 100000000)] + " ratus " + inWords(num % 100000000)
        } else if (num < 10000000000) {
            return number[Math.floor(num / 1000000000)] + " puluh " + inWords(num % 1000000000)
        } else if (num < 100000000000) {
            return number[Math.floor(num / 10000000000)] + " miliar " + inWords(num % 10000000000)
        } else if (num < 1000000000000) {
            return number[Math.floor(num / 100000000000)] + " puluh " + inWords(num % 100000000000)
        } else if (num < 10000000000000) {
            return number[Math.floor(num / 1000000000000)] + " ratus " + inWords(num % 1000000000000)
        } else if (num < 100000000000000) {
            return number[Math.floor(num / 10000000000000)] + " juta " + inWords(num % 10000000000000)
        } else if (num < 1000000000000000) {
            return number[Math.floor(num / 100000000000000)] + " triliun " + inWords(num % 100000000000000)
        }
    }
}

console.log(inWords(4)) //empat
console.log(inWords(27)) //dua puluh tujuh
console.log(inWords(102)) //seratus dua
console.log(inWords(38079)) // tiga puluh delapan ribu tujuh puluh sembilan
console.log(inWords(82102713)) //delapan puluh dua juta seratus dua ribu tujuh ratus tiga belas
console.log(inWords(999999999999999))