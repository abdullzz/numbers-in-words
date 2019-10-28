function in_word(num) {
  var kata = [
      "",
      "satu",
      "dua",
      "tiga",
      "empat",
      "lima",
      "enam",
      "tujuh",
      "delapan",
      "sembilan",
      "sepuluh",
      "sebelas"
    ],
    tenTo = ["", " puluh ", " ratus "];
  if (num <= 11) {
    return kata[num];
  }
  if (num < 20) {
    return in_word(num - 10) + " belas";
  }
  if (num < 200 && num >= 100) {
    return "seratus " + in_word(num - 100);
  }
  if (num < 2000 && num >= 1000) {
    return "seribu " + in_word(num - 1000);
  }
  if (num < 1000) {
    var conj = "";
    var toString = num.toString();
    conj = tenTo[toString.length - 1];
    return (
      in_word(Number(toString[0])) + conj + in_word(Number(toString.substr(1)))
    );
  } else {
    return modular(num);
  }
}

function modular(num) {
  var string = num.toString(),
    Trillion = ["", " ribu ", " juta ", " milyar ", " triliun "],
    toTrilion = [],
    tempToTrilion = "",
    result = "";
  for (let i = 1; i <= string.length; i++) {
    if (i % 3 === 0 || i === string.length) {
      tempToTrilion = string[string.length - i] + tempToTrilion;
      toTrilion.unshift(Number(tempToTrilion));
      tempToTrilion = "";
    } else {
      tempToTrilion = string[string.length - i] + tempToTrilion;
    }
  }
  for (let i = 0; i < toTrilion.length; i++) {
    result += in_word(toTrilion[i]) + Trillion[toTrilion.length - 1 - i];
  }
  return result;
}

//test case
console.log(in_word(4));
console.log(in_word(9));
console.log(in_word(10));
console.log(in_word(11));
console.log(in_word(12));
console.log(in_word(19));
console.log(in_word(27));
console.log(in_word(111));
console.log(in_word(102));
console.log(in_word(999));
// console.log("\n");
// console.log(modular(1234567));
console.log(in_word(2222));
console.log(in_word(9999));
console.log(in_word(38079));
console.log(in_word(999999999999999)); // sembilan bla bla triliun sembilan bla bla milyar sembilan bla bla juta sembilan bla bla ribu sembilan bla bla
console.log(in_word(1111));
