var number = {
    1 : "satu ",
    2 : "dua ",
    3 : "tiga ",
    4 : "empat ",
    5 : "lima ",
    6 : "enam ",
    7 : "tujuh ",
    8 : "delapan ",
    9 : "sembilan ",
    10 : "sepuluh ",
    11 : "sebelas "
}

function in_words(num){
    if (num <= 0){
        return ""
    }

    let result = ""

    if(num < 12){
        result += number[num]
        num -= num
    } else if(num < 20){
        result += number[num % 10] + "belas "
        num -= num
    } else if (num < 100){
        result += number[Math.floor(num / 10)] + "puluh "
        num -= Math.floor(num / 10) * 10
    } else if (num < 200){
        result += "seratus " 
        num -= 100
    } else if (num < 1000){
        result += number[Math.floor(num / 100)] + "ratus "
        num -= Math.floor(num / 100) * 100
    } else if (num < 2000){
        result += "seribu "
        num -= Math.floor(num / 1000) * 1000
    } else if (num < 1000000){
        result += in_words(Math.floor(num / 1000)) + "ribu "
        num -= Math.floor(num / 1000) * 1000
    } else if (num < 1000000000){
        result += in_words(Math.floor(num / 1000000)) + " juta "
        num -= Math.floor(num / 1000000) * 1000000
    } else if (num < 1000000000000){
        result += in_words(Math.floor(num / 1000000000)) + " milyar "
        num -= Math.floor(num / 1000000000) * 1000000000
    } else if (num < 1000000000000000){
        result += in_words(Math.floor(num / 1000000000000)) + " triliyun "
        num -= Math.floor(num / 1000000000000) * 1000000000000
    }
    
    return result + in_words(num)
}


console.log(in_words(4))
console.log(in_words(19))
console.log(in_words(27))
console.log(in_words(102))
console.log(in_words(38079))
console.log(in_words(82102713))
