function in_words(num){
    var strNum = num.toString()
    var word = ['se','satu','dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan']
    if(strNum.length == 1){
        if(strNum[0] == 0){
            return ''
        }else{
        return word[Number(strNum[0])]}
    }else if(strNum.length == 2){
        if(strNum[0] == 1 && strNum[1] == 1){
            return 'sebelas'
        }
        if(strNum[0] == 1 && strNum[1] == 0){
            return 'sepuluh'
        }
        if(strNum[0] == 1){
            return in_words(parseInt(strNum.slice(1))) +' belas' 
        }else{
            return word[strNum[0]] + ' puluh ' + in_words(parseInt(strNum.slice(1)))
        }
    }else if(strNum.length == 3){
        if(strNum[0] == 1){
            return word[0] + 'ratus ' + in_words(parseInt(strNum.slice(1)))
        }else{
            return word[strNum[0]] + ' ratus ' + in_words(parseInt(strNum.slice(1)))
        }
    }else if(Math.ceil(strNum.length / 3) == 2){
            if(strNum[0] == 1){
                return 'seribu ' + in_words(parseInt(strNum.slice((strNum.length - 3), strNum.length)))
            }else{
                return in_words(parseInt(strNum.slice(0, (strNum.length - 3)))) + ' ribu ' + in_words(parseInt(strNum.slice((strNum.length - 3), strNum.length)))
            }    
    }
    else if(Math.ceil(strNum.length / 3) == 3){
        if(strNum[0] == 1){
            return 'sejuta ' + in_words(parseInt(strNum.slice((strNum.length - 6), strNum.length)))
        }else{
            return in_words(parseInt(strNum.slice(0, (strNum.length - 6)))) + ' juta ' + in_words(parseInt(strNum.slice((strNum.length - 6), strNum.length)))
        }   
    }
    else if(Math.ceil(strNum.length / 3) == 4){
        if(strNum[0] == 1){
            return 'semilyar ' + in_words(parseInt(strNum.slice((strNum.length - 9), strNum.length)))
        }else{
            return in_words(parseInt(strNum.slice(0, (strNum.length - 9)))) + ' milyar ' + in_words(parseInt(strNum.slice((strNum.length - 9), strNum.length)))
        }
    }
    else if(Math.ceil(strNum.length / 3) == 5){
        if(strNum[0] == 1){
            return 'setrilyun '  + in_words(parseInt(strNum.slice((strNum.length - 12), strNum.length)))
        }else{
            return in_words(parseInt(strNum.slice(0, (strNum.length - 12)))) + ' trilyun ' + in_words(parseInt(strNum.slice((strNum.length - 12), strNum.length)))
        }
    }

}

console.log(in_words(111111111))