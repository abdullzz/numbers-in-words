function inWords (angka) {

    angka = angka.toString();
    
    let index = {
        1: 'satu',
        2: 'dua',
        3: 'tiga',
        4: 'empat',
        5: 'lima',
        6: 'enam',
        7: 'tujuh',
        8: 'delapan',
        9: 'sembilan'
    }

    if (angka.length === 2) {
        return index[angka[0]] + ' puluh ' + index[angka[1]];
    } else if (angka.length === 3) {
        if (angka[0] === '1') {
            index[angka[0]] = 'seratus ';
            if (angka[1] === '0') {
                return index[angka[0]] + index[angka[2]];
            }
            return index[angka[0]] + index[angka[1]] + ' puluh ' + index[angka[2]];
        } else {
            return index[angka[0]] + ' ratus ' + index[angka[1]] + ' puluh ' + index[angka[2]];
        }
    } 
    else {
        return index[angka];
    }
}

console.log(inWords(3));
console.log(inWords(27));
console.log(inWords(102));