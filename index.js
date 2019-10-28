function numberInWords(number) {
    // Your code here
    if (number == 0) {
        return ''
    }
    let resInWord = "";
    let words = {
        0: "",
        1: "satu",
        2: "dua",
        3: "tiga",
        4: "empat",
        5: "lima",
        6: "enam",
        7: "tujuh",
        8: "delapan",
        9: "sembilan",
        10: "sepuluh",
        11: "sebelas"
    };
    if (number < 12) {
        resInWord += words[number];
        number -= number
    } else if (number < 20) {
        if (words[number % 10]) {
            resInWord += words[String(number % 10)] + " belas";
            number -= number
        }
    } else if (number < 100) {
        resInWord += words[Math.floor(number / 10)] + " puluh ";
        resInWord += words[number % 10];
        number -= number
    } else if (number < 200) {
        resInWord += "seratus ";
        number %= 100;
    } else if (number < 1000) {
        resInWord += words[Math.floor(number / 100)] + " ratus ";
        number %= 100;
    } else if (number < 2000) {
        resInWord += "seribu ";
        number %= 1000;
    } else if (number < 1000000) {
        resInWord += numberInWords(Math.floor(number / 1000)) + " ribu ";
        number %= 1000;
    } else if (number < 1000000000) {
        resInWord += numberInWords(Math.floor(number / 1000000)) + " juta ";
        number %= 1000000;
    } else if (number < 1000000000000) {
        resInWord += numberInWords(Math.floor(number / 1000000000)) + " milyar ";
        number %= 1000000000;
    } else {
        resInWord += numberInWords(Math.floor(number / 1000000000000)) + " trilyun ";
        number %= 1000000000000;
    }
    return resInWord + numberInWords(number)
}
console.log(numberInWords(4))
console.log(numberInWords(27))
console.log(numberInWords(102))
console.log(numberInWords(38079))
console.log(numberInWords(82102713))

