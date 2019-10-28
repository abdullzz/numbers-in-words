function in_words(num) {
    var dict = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas'];
    var result = '';
    if (num <= 11) {
        result += dict[num];
    } else if (num < 20) {
        result += dict[Math.floor(num - 10)] + ' belas';
    } else if (num < 100) {
        result += dict[Math.floor(num / 10)] + ' puluh ' + in_words(num % 10);
    } else if (num < 200) {
        result += 'seratus ' + in_words(num - 100);
    } else if (num < 1000) {
        result += dict[Math.floor(num / 100)] + ' ratus ' + in_words(num % 100);
    } else if (num >= 1000) {
        var dict2 = [
            [2000, 'seribu '],
            [1000000, ' ribu '],
            [2000000, ' satu juta '],
            [1000000000, ' juta '],
            [2000000000, ' satu milyar '], 
            [1000000000000, ' milyar '],  
            [2000000000000, ' satu triliun '],
            [1000000000000000, ' triliun ']
        ];
        for (var i = 0; i < dict2.length; i++) {
            if (num < dict2[i][0]) {
                if (String(dict2[i][0])[0] === '1') {
                    result += in_words(Math.floor(num / (dict2[i][0] / 1000))) + dict2[i][1] + in_words(num % (dict2[i][0] / 1000));
                    break;
                } else if (String(dict2[i][0])[0] === '2') {
                    result += dict2[i][1] + in_words(num - (dict2[i][0] / 2));
                    break;
                }
            }
        }
    }
    return result;
}

// Test case
console.log(in_words(4));
console.log(in_words(1227));
console.log(in_words(102));
console.log(in_words(38079));
console.log(in_words(82102713));
console.log(in_words(999999999999999));