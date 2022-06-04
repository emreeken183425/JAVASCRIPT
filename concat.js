console.log("merhaba");
//! concat() üzerinde çalışılan değişkene parametrik olarak verilen değişken veye değişkenleri dahil ederek yeni bir içerik oluştur ve döndürür.

let bir = "ankara";
let iki = "Erzurum";
let üç = "aşkale";
let dört = "merdiven";
let beş = "gülü";
let altı = "fasulye";
let yedi = "yerim";
let sekiz="seksen"
let sonuç = bir.concat(iki);
console.log(sonuç);

let önemli = iki.concat(üç, dört, beş, altı, yedi);
console.log(önemli);

let çıkar = dört.concat(bir, üç, beş);
console.log(çıkar);