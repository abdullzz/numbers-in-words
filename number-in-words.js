function inWords(num) {
  let result = toWords(num);
  function toWords(num) {
    let lib = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas'];
    let ref = [[10, ' puluh '], [100, ' ratus '], [1000, ' ribu '], [1000000, ' juta '], [1000000000, ' milyar '], [1000000000000, ' triliun '], [1000000000000000, ' ribu triliun ']];
    if (num === 0) {
      return '';
    }
    if (num < 12) {
      return lib[num];
    } else if (num < 20) {
      return lib[num % 10] + ' belas';
    } else {
      for (let i = 0; i < ref.length; i++) {
        if (num < ref[i][0]) {
          return inWords(Math.floor(num / ref[i-1][0])) + ref[i-1][1] + inWords(num % ref[i-1][0]);
        }
      }
    }
  }
  return result.replace(/\s\s+/g, ' ').replace(/satu /g, 'se');
}

/*
function inWords(num) {
  var lib = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas'];
  if (num === 0) {
    return '';
  }
  if (num < 12) {
    return lib[num];
  } else if (num < 20) {
    return lib[num % 10] + ' belas';
  } else if (num < 100) {
    return lib[Math.floor(num / 10)] + ' puluh ' + inWords(num % 10);
  } else if (num < 200) {
    return 'seratus ' + inWords(Math.floor(num - 100));
  } else if (num < 1000) {
    return lib[Math.floor(num / 100)] + ' ratus ' + inWords(num % 100);
  } else if (num < 2000) {
    return 'seribu ' + inWords(num - 1000);
  } else if (num < 1000000) {
    return inWords(Math.floor(num / 1000)) + ' ribu ' + inWords(num % 1000);  
  } else if (num < 2000000) {
    return 'sejuta ' + inWords(num - 1000000);
  } else if (num < 1000000000) {
    return inWords(Math.floor(num / 1000000)) + ' juta ' + inWords(num % 1000000);  
  } else if (num < 2000000000) {
    return 'semilyar ' + inWords(num - 1000000000);
  } else if (num < 1000000000000) {
    return inWords(Math.floor(num / 1000000000)) + ' milyar ' + inWords(num % 1000000000);  
  } else if (num < 2000000000000) {
    return 'setriliun ' + inWords(num - 1000000000000);
  } else if (num < 1000000000000000) {
    return inWords(Math.floor(num / 1000000000000)) + ' triliun ' + inWords(num % 1000000000000);  
  }
}
*/

console.log(inWords(2000));
console.log(inWords(111111111111111));