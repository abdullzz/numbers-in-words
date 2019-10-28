var set = {
    1 : 'satu',
    2 : 'dua',
    3 : 'tiga',
    4 : 'empat',
    5 : 'lima',
    6 : 'enam',
    7 : 'tujuh',
    8 : 'delapan',
    9 : 'sembilan',
    10 : 'sepuluh',
    11 : 'sebelas',
    12 : 'dua belas',
    13 : 'tiga belas',
    14 : 'empat belas',
    15 : 'lima belas',
    16 : 'enam belas',
    17 : 'tujuh belas',
    18 : 'delapan belas',
    19 : 'sembilan belas'
}

function ratusan(num) {
    var number = num*1
    if(number < 20){
        // console.log(number);
        for(i in set){
            if(i == number){
                return set[i]
            }
        }
    }else{
        var str = number.toString()
        var nume = Number(str.slice(1))
        
        for(i in set){
            if(str[0] == i && number >99){
                if(str[0] == 1){
                    return 'seratus ' + ratusan(nume)
                }else{
                return set[i] +' ratus '+ ratusan(nume)
                }
            }else if(str[0] == i){
                if(str[0] == 1){
                    return 'sepuluh ' + ratusan(nume)
                }
                return set[i] +' puluh '+ ratusan(nume)
            }
        }
    }
}

function ngisi(arr) {
    var cek = arr.slice(1)
    var satuanAngka = [' ribu ', ' juta ', ' miliar ', ' triliun ']

    if(arr.length == 5){
        return ratusan(arr[0]) + satuanAngka[3] + ngisi(cek)
    }
    if(arr.length == 4){
        return ratusan(arr[0]) + satuanAngka[2] + ngisi(cek)
    }
    if(arr.length == 3){
        return ratusan(arr[0]) + satuanAngka[1] + ngisi(cek)
    }
    if(arr.length == 2){
        return ratusan(arr[0]) + satuanAngka[0] + ngisi(cek)
    }else if(arr.length == 1){
        return ratusan(arr[0])
    }
}

function satuan(num) {
    if(num<=999){
        return ratusan(num)
    }else{
        let str = num.toString().split('')
        let angka = str.length%3
        let str2 = []
        if(angka>0){
            str2.push((str.slice(0, angka)).join(''))
        }
        var tamp = ''
        for(i=angka;i<str.length;i++){
            tamp+=str[i]
            if(tamp.length == 3){
                str2.push(tamp)
                tamp = ''
            }
        }
        // console.log(str2);
        return ngisi(str2)
    }
}

function satu(num) {
    var string = satuan(num)
    var regex = /satu /g
    return string.replace(regex, 'se')
}

console.log('\n');
console.log(satu(4));
console.log('\n');
console.log(satu(27));
console.log('\n');
console.log(satu(102));
console.log('\n');
console.log(satu(38079));
console.log('\n');
console.log(satu(82101713));