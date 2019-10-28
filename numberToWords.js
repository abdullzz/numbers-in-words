function numberToWords(bilangan) {

    bilangan    = String(bilangan);
    var angka   = new Array('0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0');
    var kata    = new Array('','Satu','Dua','Tiga','Empat','Lima','Enam','Tujuh','Delapan','Sembilan');
    var level = new Array('','Ribu','Juta','Milyar','Triliun');
   

    for (i = 1; i <= bilangan.length; i++) {
      angka[i] = bilangan.substr(-(i),1);
    }
   
    i = 1;
    j = 0;
    kaLimat = "";
   
   
  
    while (i <= bilangan.length) {
   
      subkaLimat = "";
      kata1 = "";
      kata2 = "";
      kata3 = "";
   
      if (angka[i+2] != "0") {
        if (angka[i+2] == "1") {
          kata1 = "Seratus";
        } else {
          kata1 = kata[angka[i+2]] + " Ratus";
        }
      }
   
  
      if (angka[i+1] != "0") {
        if (angka[i+1] == "1") {
          if (angka[i] == "0") {
            kata2 = "Sepuluh";
          } else if (angka[i] == "1") {
            kata2 = "Sebelas";
          } else {
            kata2 = kata[angka[i]] + " Belas";
          }
        } else {
          kata2 = kata[angka[i+1]] + " Puluh";
        }
      }
   

      if (angka[i] != "0") {
        if (angka[i+1] != "1") {
          kata3 = kata[angka[i]];
        }
      }
   
    
      if ((angka[i] != "0") || (angka[i+1] != "0") || (angka[i+2] != "0")) {
        subkaLimat = kata1+" "+kata2+" "+kata3+" "+level[j]+" ";
      }
   
      
      kaLimat = subkaLimat + kaLimat;
      i = i + 3;
      j = j + 1;
   
    }
   
  
    if ((angka[5] == "0") && (angka[6] == "0")) {
      kaLimat = kaLimat.replace("Satu Ribu","Seribu");
    }
   
    return kaLimat;
   }

   console.log(numberToWords(21))
   console.log(numberToWords(2000))
   console.log(numberToWords(123456789))
