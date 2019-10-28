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
    return 'seribu ' + inWords(Math.floor(num - 1000));
  } else if (num < 1000000) {
    return inWords(Math.floor(num / 1000)) + ' ribu ' + inWords(num % 1000);  
  } else if (num < 2000000) {
    return 'sejuta ' + inWords(Math.floor(num - 1000000));
  } else if (num < 1000000000) {
    return inWords(Math.floor(num / 1000000)) + ' juta ' + inWords(num % 1000000);  
  } else if (num < 2000000000) {
    return 'semilyar ' + inWords(Math.floor(num - 1000000000));
  } else if (num < 1000000000000) {
    return inWords(Math.floor(num / 1000000000)) + ' milyar ' + inWords(num % 1000000000);  
  } else if (num < 2000000000000) {
    return 'setriliun ' + inWords(Math.floor(num - 1000000000000));
  } else if (num < 1000000000000000) {
    return inWords(Math.floor(num / 1000000000000)) + ' triliun ' + inWords(num % 1000000000000);  
  }
}

console.log(inWords(2000));
console.log(inWords(111111111111111));