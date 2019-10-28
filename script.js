function in_words(num){
  var angkaStr = String(num)
  var angkaArr = []
  for (var i = angkaStr.length - 3; i >= -2; i -= 3){
    var temp = ''
    for (var j = i; j < i+3; j += 1){
      if (angkaStr[j] != undefined){
        temp += (angkaStr[j])
      }
    }
    angkaArr.unshift(temp)  
  }
  console.log(angkaArr)
  return multiRatusan(angkaArr)
}

function ratusan(num){
  var kata = {'1':'satu',
              '2':'dua',
              '3':'tiga',
              '4':'empat',
              '5':'lima',
              '6':'enam',
              '7':'tujuh',
              '8':'delapan',
              '9':'sembilan'}
  var angkaStr = String(num)
  if (angkaStr.length == 3){
    if (angkaStr[0] == 0){
      return ratusan(angkaStr.slice(1))
    }
    if (angkaStr[0] == 1){
      return 'seratus ' + ratusan(angkaStr.slice(1))
    }
    return kata[angkaStr[0]] + ' ratus ' + ratusan(angkaStr.slice(1))
  } else if (angkaStr.length == 2){
    if (angkaStr[0] == 1){
      if (angkaStr[1] == 0){
        return 'sepuluh'
      }
      if (angkaStr[1] == 1){
        return 'sebelas' 
      }
      return kata[angkaStr[1]] + ' belas'
    }
    if (angkaStr[0] == 0){
      return ratusan(angkaStr.slice(1))
    }
    return kata[angkaStr[0]] + ' puluh ' + ratusan(angkaStr.slice(1))
  } else if (angkaStr.length == 1){
    if (angkaStr[0] == 0){
      return ''
    }
    return kata[angkaStr[0]]
  }
}

function multiRatusan(arr){
  if (arr.length == 0){
    return ''
  } else {
    if (arr.length == 5){
      return ratusan(arr[0]) + ' triliun ' + multiRatusan(arr.slice(1))
    }
    if (arr.length == 4){
      return ratusan(arr[0]) + ' milyar ' + multiRatusan(arr.slice(1))
    }
    if (arr.length == 3){
      return ratusan(arr[0]) + ' juta ' + multiRatusan(arr.slice(1))
    }
    if (arr.length == 2){
      if (arr[0][0] == 1){
        return 'seribu ' + multiRatusan(arr.slice(1))
      }
      return ratusan(arr[0]) + ' ribu ' + multiRatusan(arr.slice(1))
    }
    if (arr.length == 1){
      return ratusan(arr[0])
    }
  }
}

// for (var i = 1; i < 999; i += 1){
//   console.log(i+' '+in_words(i))
// }

// console.log(in_words(4))
// console.log(in_words(27))
// console.log(in_words(102))
// console.log(in_words(38079))
// console.log(in_words(82102713))
console.log(in_words(203050540))