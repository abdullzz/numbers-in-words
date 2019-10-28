function cariNumber(num) {
    let obj = {
        satu: 1, dua: 2, tiga: 3, empat: 4, lima: 5, enam: 6, tujuh: 7, delapan: 8, sembilan: 9
    }
    for (i in obj) {
        if (num === obj[i]) {
            return i
        }
    }
}

function cariRatusan(num) {
    if (num === 0) {
        return ''
    } else {
        result = ''
        let str = String(num)
        let numPertama = Number(str[0])
        let hapus = Number(str.slice(1))

        if (str.length === 1) {
            result += cariNumber(numPertama)
        }
        else if (str.length === 2) {
            if (numPertama === 1) {
                if (Number(str[1]) === 1) {
                    return ' sebelas '
                }
                else if (Number(str[1]) === 0) {
                    return ' sepuluh '
                }
                return cariNumber(Number(str[1])) + ' belas '
            }
            result += cariNumber(numPertama) + ' puluh '
        }
        else if (str.length === 3) {
            if (numPertama === 1) {
                result += 'seratus '
            } else {
                result += cariNumber(numPertama) + ' ratus '
            }
        }
        return result + cariRatusan(hapus)
    }
}

function cariDiatasratusan(arr) {
    if (arr.length === 1) {
        return cariRatusan(Number(arr[0]))
    } else {
        let temp = cariRatusan(Number(arr[0]))
        let batas = ''
        if (arr.length === 5) {
            batas = ' triliun '
        }
        else if (arr.length === 4) {
            batas = ' milyar '
        }
        else if (arr.length === 3) {
            batas = ' juta '
        }
        else if (arr.length === 2) {
            batas = ' ribu '
        }
        return temp + batas + cariDiatasratusan(arr.slice(1))
    }
}

function in_words(num) {
    let str = String(num)
    if (str.length <= 3) {
        return cariRatusan(num)
    }
    else {
        let uang = []
        let count = 0
        for (let i = str.length - 1; i >= 0; i--) {
            if (count % 3 === 0 && count !== 0) {
                uang.unshift('.')
            }
            uang.unshift(str[i])
            count++
        }
        let result = uang.join('').split('.')

        return cariDiatasratusan(result)
    }
}



console.log(in_words(111222333444555))


console.log(in_words(999))
// empat
console.log(in_words(27))
// dua puluh tujuh
console.log(in_words(102))
// seratus dua
console.log(in_words(38079))
// tiga puluh delapan ribu tujuh puluh sembilan
console.log(in_words(82102713))
// delapan puluh dua juta seratus dua ribu tujuh ratus tiga belas