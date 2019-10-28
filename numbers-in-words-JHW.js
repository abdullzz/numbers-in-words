

function in_words(angka)
{
    console.log('\n', angka, '\n', '-------------------------------------');

    var lib1 = 
    {
        1: 'Satu',
        2: 'Dua',
        3: 'Tiga',
        4: 'Empat',
        5: 'Lima',
        6: 'Enam',
        7: 'Tujuh',
        8: 'Delapan',
        9: 'Sembilan',
        10: 'Sepuluh',
        11: 'Sebelas',
        12: 'Dua Belas',
        13: 'Tiga Belas',
        14: 'Empat Belas',
        15: 'Lima Belas',
        16: 'Enam Belas',
        17: 'Tujuh Belas',
        18: 'Delapan Belas',
        19: 'Sembilan Belas',

    }

    var lib2 =
    {
        4: 'Ribu',
        5: 'Ribu',
        6: 'Ribu',
        7: 'Juta',
        8: 'Juta',
        9: 'Juta',
        10: 'Milyar',
        11: 'Milyar',
        12: 'Milyar',
        13: 'Trilyun',
        14: 'Trilyun',
        15: 'Trilyun'
    }



    
        
        
        var tempWording = ''
        function basicWording(angka1)
        {
            var convertAngka1 = String(angka1)
            
            if (convertAngka1.length === 0)
              {
                return tempWording
              }
            else
              {
                if (convertAngka1[0] == 0)
                  {
                    convertAngka1 = convertAngka1.slice(1)
                    return basicWording(convertAngka1)
                  }
                

                if (angka1 < 20)
                  {
                    tempWording += lib1[angka1]
                    return tempWording
                  }
                else if (angka1 >=20 && convertAngka1[0] == 1)
                  {
                    tempWording += 'Se'
                  }
                else
                  {
                    tempWording += lib1[convertAngka1[0]]
                  }

                

                if (convertAngka1.length === 3)
                 {
                     tempWording += ' Ratus '
                 }
                else if (convertAngka1.length === 2)
                 {
                     tempWording += ' Puluh '
                 }
                
                
                convertAngka1 = convertAngka1.slice(1)
                return basicWording(convertAngka1)
              }
          }



          
        var varFullWording = ''
        function fullWording (angka2)
          {
            tempWording = ''
            var convertAngka2 = String(angka2)

            
            if (convertAngka2.length <= 3)
              {
                varFullWording += basicWording(angka2)
                return varFullWording
              }
            else
              {
                var sisa3 = convertAngka2.length % 3
                if (sisa3 === 0)
                  {
                      sisa3 = 3
                  }

                var trimmedAngka = ''
                for (var x = 0; x < sisa3; x++)
                  {
                    trimmedAngka += convertAngka2[x]
                  }

                varFullWording += basicWording(trimmedAngka) + ' ' + lib2[convertAngka2.length] + ' '

                convertAngka2 = convertAngka2.slice(sisa3)
                return fullWording(Number(convertAngka2))
                

              }

          }
        
        console.log(fullWording(angka).replace('Se Ratus', 'Seratus') )


}

in_words(999)
in_words(4)
in_words(27)
in_words(102)
in_words(38079)
in_words(82102713)

console.log('\n \n', 'SELF-TEST')
in_words(999999999999999)
in_words(102034056078089)
in_words(101202303404505)
in_words(1378985657854)