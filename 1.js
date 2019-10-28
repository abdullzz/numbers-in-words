function inWords(num) {
    if(num === 0) {
        return '';
    } else {
        let obj = {
        '1': 'satu',
        '2': 'dua', 
        '3': 'tiga', 
        '4': 'empat',
        '5': 'lima', 
        '6': 'enam',
        '7': 'tujuh',
        '8': 'delapan', 
        '9': 'sembilan', 
        '10':'sepuluh',
        '11': 'sebelas',
        '100': 'seratus',
        '1000': 'seribu'
    };
        
        let result = '';
        let numStr = num.toString();
        let checkAngka = false;
        if(obj[num]) {
            return obj[num];
        } else if(num > 11 && num < 20 && numStr.length > 1) {
            return obj[numStr[1]] + ' belas ' + inWords(parseInt(numStr.slice(1)));
        } else if(num >= 20 && num < 100) {
            return obj[numStr[0]] + ' puluh ' + inWords(parseInt(numStr.slice(1)));
        }
        // else if(num >= 100 && num < 1000) {
        //     for(let key in obj) {
        //         if(key === numStr[0]) {
        //             checkAngka = true;
        //         }
        //     }   
        // }
        // console.log(result);
        // if(checkAngka === true && numStr.length === 3) {
        //     return inWords(parseInt(result)) + ' ratus ' + inWords(parseInt(numStr.slice(1)))
        // } else if(checkAngka === true && numStr.length === 2) {
        //     return inWords(parseInt(result)) + ' puluh ribu' + inWords(parseInt(numStr.slice(1)))
        // } else if(checkAngka === true && numStr.length === 1) {
        //     return inWords(parseInt(result)) + inWords(parseInt(numStr.slice(1)))
        // }
    }
}

console.log(inWords(18));
console.log(inWords(22));
console.log(inWords(999));