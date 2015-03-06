var item = "^";

for (var myVar = 0; myVar < 10; myVar++) {
  item = item + "^^^";
  console.log(item);
  var item2 = "|||";
  
    for (var myVar2=10; myVar2 < 15; myVar2+= 2) {
                item2 = item2 + "v";
    }
    
    for (var myVar2=10; myVar2 < 20; myVar2+= 2) {
                item2 = item2 + "V";
    }
    
    for (var myVar2=10; myVar2 < 25; myVar2+= 2) {
                item2 = item2 + "v";
    }
    
    for (var myVar2=10; myVar2 < 30; myVar2+= 2) {
                item2 = item2 + "V";
    }
  
    for (var myVar2=0; myVar2 < 40; myVar2++) {
                item2 = item2 + "v";
    if (myVar2 == 30) {
      item2 = "v";
    
    }


    console.log(item2);
  }
}