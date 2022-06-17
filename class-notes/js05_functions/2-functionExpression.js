// ? =========================================================
// ?                    FONKSİYONLAR
// ?==========================================================

//!----------------------------------------------------------
//! 2.YÖNTEM  : FUNCTION EXPRESSION
//!-----------------------------------------------------------
//* Örnek1:
//**********************************************************/
console.log('******** 2- EXPRESSION*******');

//* Örnek1: Parametreli, Dönüş değerli
//**********************************************************/
// console.log(tekCift(5));
//! function expression yöntemiyle bir fnk tanımlandığında önce tanımlamanın yapılması gerekir yoksa Uncaught ReferenceError: Cannot access 'tekCift' before initialization hatası alınır
const tekCift = function (number) {
  return number % 2 === 0 ? `${number} çifttir` : `${number} tekdir`;
};

console.log(tekCift(2));

//* Örnek2: 3 sayinin en büyüğünü bulan fonks.
//**********************************************************/
const buyukBul = function (x, y, z = -Number.MAX_VALUE) {
  let enBuyuk;
  if (x >= y && x >= z) {
    enBuyuk = x;
  } else if (y >= x && y >= z) {
    enBuyuk = y;
  } else if (z >= x && z >= y) {
    enBuyuk = z;
  } else {
    enBuyuk = x;
  }
  return enBuyuk;
};
console.log('En Büyük Sayi:', buyukBul(1, 3, 2));
console.log('En Büyük Sayi:', buyukBul(5, 2, 1));
console.log('En Büyük Sayi:', buyukBul(4, 6, 7));
console.log('En Büyük Sayi:', buyukBul(6, 6, 7));
console.log('En Büyük Sayi:', buyukBul(9, 8, 9));
console.log('En Büyük Sayi:', buyukBul(8, 9, 9));
console.log('En Büyük Sayi:', buyukBul(8, 9));
console.log('En Büyük Sayi:', buyukBul(-8, -9));

//* ORNEK3: Bir fonksiyon içerisinde başka fonksiyonlar çağrılabilir
//*****************************************************/

const hesapla = function (islem, s1, s2) {
  let sonuc;

  if (islem == '+') {
    sonuc = topla(s1, s2);
  } else if (islem == '-') {
    sonuc = cikar(s1, s2);
  } else if (islem == '*') {
    sonuc = carp(s1, s2);
  } else if (islem == '/') {
    sonuc = bol(s1, s2);
  }
  return sonuc;
};

const topla = function (s1, s2) {
  return s1 + s2;
};
const cikar = function (s1, s2) {
  return s1 - s2;
};
const carp = function (s1, s2) {
  return s1 * s2;
};
const bol = function (s1, s2) {
  return s1 / s2;
};

console.log(hesapla('+', 3, 5));
console.log(hesapla('-', 3, 5));

//* kur hesaplama fonsiyon içinde fonsiyon çağırma

function kursehabı(birim,tutar){
  if(birim=="tl" ){
    var kur= 1;
  }else if(birim=="dolar"){
 var kur= 15;
  }else if(birim=="euro"){
    var kur=20;
  }else{
    console.log("kur giriniz:");
  }
  return tutarhesapla(kur,tutar);
}

function tutarhesapla(gelenkur,gelentutar){
  let hesapyap=gelenkur*gelentutar;
  console.log(hesapyap );
}
kursehabı("dolar",600);

//***çok boyutlu fonsiyonlar */

function deneme(parametre1,parametre2){
  function testim (a1,a2){
    console.log(a1+" "+a2 );
  }
  return testim(parametre1,parametre2);
}
deneme("yasemin","emre" );

//***değişkene tanımlayarak */

 var deneme= function (parametre1,parametre2){
  var testim=function  (a1,a2){
    console.log(a1+" "+a2 );
  }
  return testim(parametre1,parametre2);
}
deneme("yasemin","emre" );


//**fonsiyon içindeki parametrelre değer gönderme */

function bir(a){
  function iki(b){
    function üc(c){

      return a+b+c;
    }
    return üc;
  }
  return iki;
}

let sonuç= bir(5)(8)(10);// bir ile a ya 8 ile b 10 ile c ye değer atadık
console.log(sonuç );

// örnek
function emre(em){
  function yasemin(ya){
    function emir(er){
      return em+ya+er ;
    }
    return emir;
  }
  return yasemin;
}

let eken = emre("emre ")("yaseminin eşi")(" emirin babasıdır");
console.log(eken);


// örnek
function birrr(a){
  function ikii(b){
    function ücc(c){

     let değer=a+b+c;
     console.log(değer);
    }
    ücc(10);
  }
  ikii(9);
}
birrr(8);

// recorsive function lar

function yeniden(başla){
  if( başla<=10){
    console.log("emre eken");
    başla +=1;
  yeniden(başla);
  }
}
  yeniden(1);

////////////////////////////////////////////
function tekrarla(başlangıc){
  if( başlangıc<5){
    console.log("emre eken");
  }else if(başlangıc>=10){
    console.log("yasemin eken");
  }else{
    console.log("emir eken");
  }

}
tekrarla(8);

////////////////////////****** fonction çağırma */

function esas(){
  for(let başlama=0; başlama< esas.caller.arguments.length ;başlama++){
    console.log(diğer.arguments[başlama] );
  }
}

function diğer(anne,ogul){
  esas();
}

diğer("yasemin","emir");