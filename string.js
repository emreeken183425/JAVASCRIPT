console.log("merhaba");
//! toString() değişken içeriğini string metin türünde düz bir metne çevirir ve döndürür

let değer = "emre";
console.log(değer, typeof değer);

//* valueOf( ): üzerine yazılam değişken değerini tam anlamıyla ( veri tütünü bozmadan)aktarım sağlayarak yeni bir içerik oluşturur ve döndürürt

let değer1 = "5";
console.log(typeof değer1);
let değer2 = 5;
console.log(typeof değer2);
let sonuç = değer1.valueOf();

console.log(typeof sonuç);

//! indexof değişken içerisinde parametrik olarak verilen değeri arar ve ilk eşleşmeyi sağlayan değişken içeriğinin index değerini döndürür
let metin = "javascript eğitimine devam";
console.log(metin);
let sonuc = metin.indexOf("s");
console.log(sonuc);

//? Lastindexof() değişken içerisinde parametrik olarak verilen değeri arar ve son  eşleşmeyi sağlayan değişken içeriğinin index değerini döndürür

let emre = "javascript eğitimine devam ediyorum";
let sonuç1 = emre.lastIndexOf("de");

console.log(sonuç1);

//* search() kendisine parametre olarak verilen değer doğrultusunda değişken içeriğini arayarak ilk eşleşmeyi sağlayan değişken içeriğinin index değerini döndürür. büyük küçük harf duyarlıdır

let emre1 = "emrenin sabah saatlerinde ders çalışması";
let işlem = emre1.search("re");
console.log(işlem);

//* inculudes() kendisine parametre olarak verilen değer doğrultusunda değişken içeriğini kontrol ederek boolean veri türünde değerini döndürür.

let emre2 = "neredesin sen ey güzel dedim Yasemin geldi";
let işlem1 = emre2.includes("Yasemin");
let işlem2 = emre2.includes("erzurum");
console.log(işlem1);
console.log(işlem2);

//! startsWith() kendisine parametre olarak verilen değer doğrultusunda değişken içeriğinin başlangıç değerini içeriğini kontrol ederek boolean veri türünde değerini döndürür

let emre3 = "erzurum erzurum olalı böyle zulum görmedi:)";
let işlem3 = emre3.startsWith("erzurum");
console.log(işlem3);


//? endsWith() kendisine parametre olarak verilen değer doğrultusunda değişken içeriğinin bitiş değerini içeriğini kontrol ederek boolean veri türünde değerini döndürür

let emre4 = "erzurum erzurum olalı böyle zulum görmedi:)";
let işlem4 = emre4.endsWith("erzurum");
console.log(işlem4);

//* match() kendisine parametre olarak verilen değer doğrultusunda değişken içeriğini kontrol eder eşleşen deer varsa içeriğin eşleen kısmından yeni bir içerik oluşturur ve içeriği döndürür.
//* g: harfi içeriğin tamamı üzerinde çalışmsını sağlar.
//* i: içeriğin büyük küçük harf olmasına bakmaz

let emre5 = "erzurum erzurum olalı böyle zulum görmedi:)";
let işlem5 = emre5.match("olalı")
console.log(işlem5);
let emre6 = "erzurum erzurum olalı böyle zulum görmedi:)";
let işlem6 = emre6.match(/olalı/g);
console.log(işlem6);
let emre7 = "erzurum erzurum olalı böyle zulum görmedi:)";
let işlem7 = emre7.match(/Olalı/i);
console.log(işlem7);

//! replace() kendisine parametre olarak verilen değer doğrultusunda değişken içeriğini kontrol eder ve eşleşen değerlerin değişimini sağlar ve döndürür

let emrem1 = " javascript eğitimine devam ediyorum";
console.log(emrem1);
let sonuc1 = emrem1.replace("devam", "hızla ");
console.log(sonuc1);
//? split(): kendisine parametre olarak verilen değer doğrultusunda değişken içeriğini bölümleyerek yeni bir dizi oluşturur ve döndürür
//? split("") parantez içine "" koyarsak harf harf ayırır
//? split(" ") parantez içine " " koyarsak boşluklardan ayırır.
//? split(" ",n(sayı)) parantez içine " " koyarsak n kadar bölüm yapar

let emrem2 = " javascript eğitimine devam ediyorum";
console.log(emrem2);
let sonuc2 = emrem2.split();
console.log(sonuc2);
let emrem3 = " javascript eğitimine devam ediyorum";
let sonuc3 = emrem3.split("");
console.log(sonuc3);
let emrem4 = "javascript eğitimine devam ediyorum";
let sonuc4 = emrem4.split(" ");
console.log(sonuc4);
let emrem5 = "javascript eğitimine devam ediyorum";
let sonuc5 = emrem5.split(" ", 3);
console.log(sonuc5);

//! localeCompare() üzerinde çalışılan değişkene parametrik olarak verilen diğer bir değişken içeriğini tarayıcı diline göre karşılaştırarak sonucu geri döndnürür.
//! -1: birinci değişken içeriği,ikinci değişken içeriğinde önce
//! 0:birinci değişken içeriği,ikinci değişken içeriğinde eşitse
//! 1:birinci değişken içeriği,ikinci değişken içeriğinden sonra

// let icerik = "abc"
// let içerik1 = "abd"
// karşılaştır = icerik.localeCompare(içerik1);
// console.log(karşılaştır);

// let icerik = "abc"
// let içerik1 = "abc"
// karşılaştır = icerik.localeCompare(içerik1);
// console.log(karşılaştır);
let icerik = "nbc"
let içerik1 = "abd"
karşılaştır = icerik.localeCompare(içerik1);
console.log(karşılaştır);

//* charAt() kendisine parametre olarak verilen değer doğrultusunda değişken içeriğindeki karşılığı olan karakteri bularak geri döndürür.

let xyz = "merhaba";
let yyz = xyz.charAt(3);
console.log(yyz);

//? charCodeAt() kendisine parametre olarak verilen değer doğrultusunda değişken içeriğindeki karşılığı olan karakteri bularak karakterin unicode (evrensel) değerini döndürür. büyük

let xyzk = "merhaba";
let yyzm = xyzk.charCodeAt(0);
console.log(yyzm);

//* fromCharCode() kendisine parametre olarak verilen değer doğrultusunda değişken içeriğindeki evrensel kodu bizim okuyacağımız şekilde karakter olarak  döndürür

var içer = String.fromCharCode(57, 120, 45);
console.log(içer);

//! encodeURI(): değişken içerisindeki metnin özel karakterlerini UTF-8 (unicode dönüşüm formatına) kodlamasına dönüştürür.
/*global kodlamaya dahil edilmeyen karakterler;
 0-9 arası rakamlar 
 alfabedeki harfler (türkçe karakterler hariç)
 özel işaretler ;,?+= gibi
 */
let yas = " emre ağanın köyü";
let hımm = encodeURI(yas);
console.log(hımm);

//? decodeURI(): değişken içerisindeki metnin özel karakterlerini UTF-8 (unicode dönüşüm formatına) kodlamasına dönüştürülmüş karakterlri çözer.
/*global kodlamaya dahil edilmeyen karakterler;
 0-9 arası rakamlar 
 alfabedeki harfler (türkçe karakterler hariç)
 özel işaretler ;,?+= gibi
 */

let yak = " emre ağanın köyü";
let hıhı = decodeURI(yak);
console.log(hıhı);