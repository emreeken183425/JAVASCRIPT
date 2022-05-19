console.log(" merhaba");
//! eval() kendisine  parametre olarak verilen değerleri javascript kodlamasına çevirererk komut gibi çalıştırarak oluşan değeri geriye döndüdür.

let değer1 = 25;
let değer2 = 30;

let sonuç = "değer1 + değer2";
console.log(sonuç);

let değer3 = 5;
let değer4 = 6;
let sonuç2 = eval("değer3 + değer4"); //! normalde string ama eval ile number oldu
console.log(sonuç2);

let çarp = eval("10*40");
console.log(çarp);