var dict = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas'];

var dict2 = [' puluh ', ' ratus '];

var dictThousand = [' ribu ', ' juta ', ' milyar ', ' triliun '];

function in_words(num) {
  if(num < 12) {
    return dict[num];
  }

  if(num < 20) {
    return dict[num%10] + ' belas';
  }

  if(num < 100) {
    return dict[Math.floor(num/10)] + ' puluh ' + in_words(num%10); 
  }

  if(num < 1000) {
    if(Math.floor(num/100) == 1) return 'seratus ' + in_words(num%100);
    else return dict[Math.floor(num/100)] + ' ratus ' + in_words(num%100);
  }

  if(num < 10000) {
    if(Math.floor(num/1000) == 1) return 'seribu ' + in_words(num%1000);
    else return dict[Math.floor(num/1000)] + ' ribu ' + in_words(num%1000);
  }

  if(num < 20000) {
    var mult = Math.floor(num/1000);
    if(mult == 10) return 'sepuluh ribu ' + in_words(num%10000);
    else if(mult < 12) return dict[Math.floor(num/1000)] + ' ribu ' + in_words(num%1000);
    else return dict[mult%10] + ' belas ribu ' + in_words(num%1000);
  }

  if(num < 100000) { // below 100k
    return dict[Math.floor(num/10000)] + ' puluh ' + in_words(num%10000);
  }

  if(num > 100000) { // above 100k
    var thousand = 0;
    // var hundred = 0;
    // var tenth = 0;

    var num2 = num;

    while(num2 > 0) {
      num2 /= 1000;

      if(num2 >= 1) {
        thousand++;
      } else {
        num2 *= 1000;
        break;
      }
    }

    if(num2 < 10) { // single digit left, exact multiplication of 1k, ribu, juta, milyar, triliun
      return dict[num2] + dictThousand[thousand-1] + in_words(num%Math.pow(10, thousand*3)/10);
      // if(thousand == 1) { // juta
      //   return dict[num2] + dictThousand[thousand] + in_words(num%Math.pow(10, thousand*3)/10);
      // } else if(thousand == 2) { // milyar

      // } else if(thousand == 3) { // triliun
      // }
    } else if(num2 < 100) { // 2 digits left, multiplication of tenths and possibily a remainder
      return dict[num2] + dict2[num2.toString().length-1] + in_words(num%(Math.pow(10, thousand*3)/10));
    }
    // else if(num2 < 1000) { // 3 digits left, multiplication of hundreds and possibility of remainders }
  }

  // if(num < 1000000) { // below 1m
  //   return dict[Math.floor(num/100000)]
  // }
  // if(num>20000) {
  //   // determine the remainder
  //   // if 1 digit = seribu/semilyar/setriliun
  //   // if 2 digit call belas/
  //   // if 100 call ratus
  //   var temp = num;
  //   var remainder = num;
  //   while(temp>=1) {
  //     temp /= 1000;
  //     if(temp >= 1) remainder = temp;
  //   }

  //   if(remainder)

  // }

  // if(num<100000) {
  //   if(Math.floor(num/10000) == 1) return 'sepuluh ' + in_words(num%10000);
  //   else return dict[Math.floor(num/10000)] + ' puluh ribu ' + in_words(num%10000);
  // }
}

console.log(in_words(4));
console.log(in_words(11));
console.log(in_words(27));
console.log(in_words(101));
console.log(in_words(11512));
console.log(in_words(13512));
console.log(in_words(19899));
console.log(in_words(87899));
console.log(in_words(5000000));
console.log(in_words(50000000));
// console.log(in_words(1111));
// console.log(in_words(10232));
// console.log(in_words(11232));
// in_words(102);
// in_words(38079);
// in_words(82102713); // delapan puluh dua juta