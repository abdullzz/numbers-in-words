let number = {
  1: "satu",
  2: "dua",
  3: "tiga",
  4: "empat",
  5: "lima",
  6: "enam",
  7: "tujuh",
  8: "delapan",
  9: "sembilan",
  10: ["puluh", "belas"]
};

function in_words(num) {
  if (num.length === 0) return "";

  if (typeof num == "number") {
    let str = String(num)
      .split("")
      .reverse()
      .join("")
      .match(/.{1,3}/g)
      .reverse();
    for (let i = 0; i < str.length; i++) {
      str[i] = str[i]
        .split("")
        .reverse()
        .join("");
    }
    return in_words(str);
  }

  let res = [];

  if (num.length === 5) {
    let angka = Number(num[0]);
    if (angka >= 100) {
      let sisa = Math.trunc(angka / 100);
      angka -= sisa * 100;
      if (sisa === 1) {
        res.push("seratus");
      } else {
        res.push(number[sisa]);
        res.push("ratus");
      }
    }
    if (angka >= 10) {
      let sisa = Math.trunc(angka / 10);
      angka -= sisa * 10;
      if (sisa === 1) {
        res.push(number[angka])
        res.push("belas");
        angka-=angka
      } else {
        res.push(number[sisa]);
        res.push("puluh");
      }
    }
    if (angka < 10) {
      res.push(number[angka]);
    }
    res.push('trilyun')
    res = res.join(' ')
    return res+' '+in_words(num.slice(1))
  }

  if (num.length === 4) {
    let angka = Number(num[0]);
    if (angka >= 100) {
      let sisa = Math.trunc(angka / 100);
      angka -= sisa * 100;
      if (sisa === 1) {
        res.push("seratus");
      } else {
        res.push(number[sisa]);
        res.push("ratus");
      }
    }
    if (angka >= 10) {
      let sisa = Math.trunc(angka / 10);
      angka -= sisa * 10;
      if (sisa === 1) {
        res.push(number[angka])
        res.push("belas");
        angka-=angka
      } else {
        res.push(number[sisa]);
        res.push("puluh");
      }
    }
    if (angka < 10) {
      res.push(number[angka]);
    }
    res.push('milyar')
    res = res.join(' ')
    return res+' '+in_words(num.slice(1))
  }

  if (num.length === 3) {
    let angka = Number(num[0]);
    if (angka >= 100) {
      let sisa = Math.trunc(angka / 100);
      angka -= sisa * 100;
      if (sisa === 1) {
        res.push("seratus");
      } else {
        res.push(number[sisa]);
        res.push("ratus");
      }
    }
    if (angka >= 10) {
      let sisa = Math.trunc(angka / 10);
      angka -= sisa * 10;
      if (sisa === 1) {
        res.push(number[angka])
        res.push("belas");
        angka-=angka
      } else {
        res.push(number[sisa]);
        res.push("puluh");
      }
    }
    if (angka < 10) {
      res.push(number[angka]);
    }
    res.push('juta')
    res = res.join(' ')
    return res+' '+in_words(num.slice(1))
  }

  if (num.length === 2) {
    let angka = Number(num[0]);
    if (angka >= 100) {
      let sisa = Math.trunc(angka / 100);
      angka -= sisa * 100;
      if (sisa === 1) {
        res.push("seratus");
      } else {
        res.push(number[sisa]);
        res.push("ratus");
      }
    }
    if (angka >= 10) {
      let sisa = Math.trunc(angka / 10);
      angka -= sisa * 10;
      if (sisa === 1) {
        res.push(number[angka])
        res.push("belas");
        angka-=angka
      } else {
        res.push(number[sisa]);
        res.push("puluh");
      }
    }
    if (angka < 10) {
      res.push(number[angka]);
    }
    res.push('ribu')
    res = res.join(' ')
    return res+' '+in_words(num.slice(1))
  }

  if(num.length===1){
      let angka = Number(num[0])
    if (angka >= 100) {
        let sisa = Math.trunc(angka / 100);
        angka -= sisa * 100;
        if (sisa === 1) {
          res.push("seratus");
        } else {
          res.push(number[sisa]);
          res.push("ratus");
        }
      }
      if (angka >= 10) {
        let sisa = Math.trunc(angka / 10);
        angka -= sisa * 10;
        if (sisa === 1) {
          res.push(number[angka])
          res.push("belas");
          angka-=angka
        } else {
          res.push(number[sisa]);
          res.push("puluh");
        }
      }
      if (angka < 10) {
        res.push(number[angka]);
      }
      res = res.join(' ')
      return res +' ' +in_words(num.slice(1))
  }
}

console.log(in_words(4));
console.log(in_words(27));
console.log(in_words(102));
console.log(in_words(38079));
console.log(in_words(82102713));
console.log(in_words(999999999999999))