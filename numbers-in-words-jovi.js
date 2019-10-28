function numToWords(num){
    var objAlphabet = {
        1 :'satu',
        2: 'dua',
        3: 'tiga',
        4: 'empat',
        5: 'lima',
        6: 'enam',
        7: 'tujuh',
        8: 'delapan',
        9: 'sembilan',
        11: 'sebelas'
    }

    if (num == 0) return 0
    else {
        
        if(num <= 1){
            return ''
        }
        if(num < 9) return ''

        if(num < 11){
            return "sebelas " + numToWords(num-10)
        }
        if(num >= 12 && num <= 19){
            var depan = Math.floor(num*0.1)
            var belakang = num%(depan*10)
            return objAlphabet[belakang]+" belas"
        }
        if(num >=20 && num <=99){
            var depan = Math.floor(num*0.1)
            var belakang = num%(depan*10)
            return objAlphabet[depan] + " puluh " + objAlphabet[belakang]
        }

        //ratusan
        if(num == 111){
            return "seratus " + numToWords(num-100)
        }
        if(num > 111 && num <199){
            var depan = Math.floor(num*0.01)
            var belakang = num%(depan*100)
            return "seratus " + numToWords(belakang) 
        }
        if(num >200 && num <999){ //230
            var depan = Math.floor(num*0.01)
            var belakang = num%(depan*100)
            return objAlphabet[depan] + " ratus " + numToWords(belakang)
        }

        //ribuan
        if(num < 1111){
            return "seribu " + numToWords(num-1000)
        }
        if(num > 1111 && num < 1999){
            var depan = Math.floor(num*0.001)
            var belakang = num%(depan*1000)
            return "seribu " + numToWords(belakang) 
        }
        if(num >2000 && num <9999){ //230
            var depan = Math.floor(num*0.001)
            var belakang = num%(depan*1000)
            return objAlphabet[depan] + " ribu " + numToWords(belakang)
        }

        //belasan - puluhan ribu
        if(num == 11111){
            var depan = Math.floor(num/1000) 
            return objAlphabet[depan]+" ribu " + numToWords(num%11000)
        }
        if(num > 12000 && num < 99999){
            var depan = Math.floor(num*0.001)
            var belakang = num % (depan*1000)
            return numToWords(depan) + " ribu "+numToWords(belakang)
        }
        
        // ratusan ribu
        if(num >=100000 && num <= 999999){
            var depan = Math.floor(num*0.001)
            var belakang = num % (depan*1000)
            
            return numToWords(depan) + " ribu "+numToWords(belakang)
        }
        
        // satuan juta 
        if(num >= 1000000 && num < 9999999){
            var depan = Math.floor(num*0.000001)
            var belakang = num % (depan*1000000)

            return objAlphabet[depan] + " juta "+ numToWords(num%1000000)
        }
        
        //belasan-ratusan juta
        if(num >= 10000000 && num < 999999999){
            var depan = Math.floor(num*0.000001)
            var belakang = num % (depan*1000000)

            return numToWords(depan) + " juta "+ numToWords(num%1000000)
        }


        //satuan milyar
        if(num >= 1000000000 && num < 9999999999){
            var depan = Math.floor(num*0.000000001)            
            var belakang = num % (depan*1000000000)            
            return objAlphabet[depan] + " milyar "+ numToWords(num%1000000000)
        }    
        
        // belasan-ratusan milyar
        if(num >= 10000000000 && num < 999999999999){
            var depan = Math.floor(num*0.000000001)            
            var belakang = num % (depan*1000000000)            
            return numToWords(depan) + " milyar "+ numToWords(num%1000000000)
        }  
        
    }

}

console.log(numToWords(212234567745));




