/*
Konversi integer menjadi kata-kata dlm bhs Indonesia
*/

function in_words(num) {
  arrAngka = ['','satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan',
    'sepuluh', 'sebelas'];

  if(num<=11) {
    return arrAngka[num];
  }
  else {
    if(num<20) {
      return arrAngka[num-10] + ' belas';
    }
    else if(num<100) {
      return arrAngka[Math.floor(num/10)] + ' puluh ' + arrAngka[num%10];
    }
    else if(num<200) {
      return 'seratus ' + in_words(num%100);
    }
    else if(num<1000) {
      return arrAngka[Math.floor(num/100)] + ' ratus ' + in_words(num%100);
    }
    else if(num<2000) {
      return 'seribu ' + in_words(num%1000);
    }
    else if(num<1000000) {
      return in_words(Math.floor(num/1000)) + ' ribu ' + in_words(num%1000);
    }
    else if(num<2000000) {
      return 'sejuta ' +  in_words(num%1000000);
    }
    else if(num<1000000000) {
      return in_words(Math.floor(num/1000000)) + ' juta ' + in_words(num%1000000);
    }
    else if(num<2000000000) {
      return 'semilyar ' +  in_words(num%1000000000);
    }
    else if(num<1000000000000) {
      return in_words(Math.floor(num/1000000000)) + ' milyar ' + in_words(num%1000000000);
    }
    else if(num<2000000000000) {
      return 'setrilyun ' +  in_words(num%1000000000000);
    }
    else if(num<1000000000000000) {
      return in_words(Math.floor(num/1000000000000)) + ' trilyun ' + in_words(num%1000000000000);
    }
  }
}

console.log(in_words(11));
console.log(in_words(75));
console.log(in_words(101));
console.log(in_words(202));
console.log(in_words(1001));
console.log(in_words(10001));
console.log(in_words(100001));
console.log(in_words(1000001));
console.log(in_words(9999));
console.log(in_words(19999));
console.log(in_words(99999));
console.log(in_words(119999));
console.log(in_words(919999));
console.log(in_words(1919999));
console.log(in_words(111919999));
console.log(in_words(1111919999));
console.log(in_words(19111919999));
console.log(in_words(1919111919999));
console.log(in_words(919919111919999));
