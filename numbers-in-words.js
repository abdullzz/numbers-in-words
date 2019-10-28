function in_words(num){
    let satuan = [
        [1000000000000, 'triliun'],
        [1000000000, 'milyar'],
        [1000000, 'juta'],
        [1000, 'ribu'],
        [100, 'ratus'],
        [10, 'puluh']
    ]
        
    let words = {
        1 : 'satu',
        2 : 'dua',
        3 : 'tiga',
        4 : 'empat',
        5 : 'lima',
        6 : 'enam',
        7 : 'tujuh',
        8 : 'delapan',
        9 : 'sembilan',
        10 : ['puluh', 'belas']
    }

    if(num < 10){
        return words[num]
    } else if(num > 10 && num < 20){
        if(num ===11) {
            return 'se' + words[10][1]
        } else {
            return words[num - 10] + ' ' + words [10][1]
        }
    } else {
        for(let i = 0; i < satuan.length; i++){
            if(num >= satuan[i][0]){
                let tampung = Math.trunc(num / satuan[i][0])
                // console.log(tampung)
                if(tampung === 1){
                    return 'se' + satuan[i][1] + ' ' + in_words(num - (tampung*satuan[i][0]))
                } else {
                    
                    return in_words(tampung)+ ' ' + satuan[i][1] + ' ' + in_words(num - (tampung*satuan[i][0]))
                }
            }
        }
    }
   
    
}

console.log(in_words(4))
console.log(in_words(27))
console.log(in_words(102))
console.log(in_words(82102713))