function numberInWords(number) {
    const fixed =  {
        0: '',
        1: 'satu',
        2: 'dua',
        3: 'tiga',
        4: 'empat',
        5: 'lima',
        6: 'enam',
        7: 'tujuh',
        8: 'delapan',
        9: 'sembilan',
        10: 'sepuluh',
        11: 'sebelas'
    }
    if(number < 12) {
        return fixed[number]
    }
    if(number < 20) {
        return fixed[number%10] + ' belas '
    }
    if(number < 100) {
        return fixed[Math.floor(number/10)] + ' puluh ' + fixed[number%10]
    }
    if(number < 200) {
        return 'seratus ' + numberInWords(number%100)
    }
    if(number < 1000) {
        return fixed[Math.floor(number/100)] + ' ratus ' + numberInWords(number%100)
    }
    if(number < 2000) {
        return 'seribu ' + numberInWords(number%1000)
    }
    if (number < 1000000) {
        return numberInWords(Math.floor(number/1000)) + ' ribu ' + numberInWords(number%1000)
    }
    if(number < 1000000000) {
        return numberInWords(Math.floor(number/1000000)) + ' juta ' + numberInWords(number%1000000)
    }
    if(number < 1000000000000) {
        return numberInWords(Math.floor(number/1000000000)) + ' miliar ' + numberInWords(number%1000000000)
    }
}

// console.log(numberInWords(process.argv[2]))
console.log(numberInWords(4))
console.log(numberInWords(27))
console.log(numberInWords(102))
console.log(numberInWords(38079))
console.log(numberInWords(82102713))
console.log(numberInWords(999999999999999))