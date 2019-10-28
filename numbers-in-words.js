
var obj = {
    0: '',
    1: ' satu ',
    2: ' dua ',
    3: ' tiga ',
    4: ' empat ',
    5: ' lima ',
    6: ' enam ',
    7: ' tujuh ',
    8: ' delapan ',
    9: ' sembilan ',
    10: ' sepuluh ',
    11: ' sebelas '
}
function in_words(num){
    if (String(num).length === 0 || num === undefined){
        return ''
    }else{
        for (var i in obj){
            if (num <= 11 && num == i){
                return obj[i]
            }
            if (num > 11 && num <= 19 ){
                num = num.toString()
                return obj[num[1]] + 'belas'
            }
            if (num > 19 && num < 100){
                num = num.toString()
                return obj[num[0]] + 'puluh' + in_words(num.slice(1))
            
            }
            if (num > 99 && num < 200){
                num = num.toString()
                // console.log('ok')
                return 'seratus' + in_words(num-100)
            }
            if (num >= 200 && num < 1000){
                num = num.toString()
                return obj[num[0]] + 'ratus' + in_words(num%100)
            }
            if (num >= 1000 && num < 2000){
                num = num.toString()
                return 'seribu' + in_words(num%1000)
            }
            if (num >= 2000 & num < 10000){
                num = num.toString()
                return obj[num[0]] + 'ribu' + in_words(num%1000)
            }
        }
    }
}
console.log(in_words(1899))

var panjang = {
    1: '',
    2: 'puluh',
    3: 'ratus',
    4: 'ribu',
    5: 'puluh ribu',
    6: 'ratus ribu',
    7: 'juta',
    8: 'puluh juta',
    9: 'ratus juta',
    10: 'milyard'
}

// function cekLength(angka){
//     angka = angka.toString()
//     for (var j in panjang ){
//         if ( Number(angka.length) === Number(j)){
//             return panjang[j]
//         }
//     }
// }
// // console.log(cekLength(1453))


// function in_words(num){
//     // let str = num.toString()
//     if (String(num).length === 0 || num === undefined){
//         return ' '
//     }
//     else{
//         num = num.toString()
//         var first = num[0]
//         for (var i in obj){
//             if (first == 0){
//                 var lama = num.slice(1)
//                 return '' + in_words(lama)
//             }
//             if (num.length == 2 && num[0] == 1 ){
//                 var dua = num[1]
//             }
//             if (num == 11){
//                 return ' sebelas'
//             }
//             if (num > 11 && num <= 19){
//                 return obj[num[1]] + 'belas'
//             }
//             if (Number(num) == Number(i)){
//                 return obj[i]
//             }
//             if (num.length <= 4){
//                 if ( first == i){
//                     var baru = num.slice(1)
//                     if (first == 1){
//                         return ' se' + cekLength(num) + in_words(baru)
//                     }
//                     return obj[i] + cekLength(num) + in_words(baru)
//                 }
//             }
//             if (num.length > 4){
//                 for (var j = num.len)
//             }
 
//         }
//     }
// }

// console.log(in_words(200000))

