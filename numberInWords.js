function numberInWords(number) {
    const fix = {
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
        return fix[number]
    }
    if(number < 20) {
        return fix[number%10] + ' belas'
    }
    if(number < 100) {
        return fix[Math.floor(number/10)] + ' puluh ' + fix[number%10]
    }
    if(number < 200) {
        return 'Seratus ' + numberInWords(number%100)
    }
    if (number < 1000) {
        return fix[Math.floor(number/100)] + ' ratus ' + numberInWords(number%100)
    }
    if (number < 2000) {
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
    if(number < 1000000000000000) {
        return numberInWords(Math.floor(number/1000000000000)) + ' trilion ' + numberInWords(number%1000000000000)
    }
}

console.log(numberInWords(122039320))