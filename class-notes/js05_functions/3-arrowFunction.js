// ? ==========================================================
// ?                    FONKSİYONLAR
// ? ==========================================================

// !-----------------------------------------------------------
// !3.YÖNTEM  : ARROW FUNCTIONS
// !-----------------------------------------------------------

console.log('****** 3- ARROW FUNCTIONS ******');

//* Örnek1:
//*************************************************************/

const topla = (x, y) => x + y;

//! Arrow fonksiynlarda eğer tek bir ifade kullanılrsa süslü paranteze
//! ihtiyaç olmaz ve dolayısla return gerekmek. aksi takdirde gerekir.
const usAl = (t, u) => {
  return t ** u;
};

const usAl2 = (t, u) => t ** u;

console.log('SONUC =', topla(5, 3));
console.log('US:', usAl(2, 3));
console.log('US:', usAl2(2, 3));

// ! Ok fonksiyonunda birden fazla ifade var ise fonksiyonda suslu parantez kullanmalıyız. Ve lazımsa return yapmalıyız.
const menu = (times) => {
  console.log('============================');
  console.log(' JAVASCRIPT ÇOK KOLAYMIŞ');
  console.log('============================');
  return times * 2;
};

console.log(menu(2));

//* Örnek2:
//*************************************************************/

// const tekMi = (n) => (n % 2 === 1 ? 'TEKTIR' : 'CIFTIR');
const tekMi = (n) => (n % 2 ? 'TEKTIR' : 'CIFTIR');

console.log(tekMi(3));

/*//* Örnek2:
//*************************************************************

const r = prompt('yarıçapı griniz');
const h = prompt('yukseklik giriniz');

const hacimHesapla = (r, h) => Math.PI * r * r * h;

console.log('Silindirin hacmi :', Math.trunc(hacimHesapla(r, h)));
console.log('Silindirin hacmi :', hacimHesapla(r, h).toFixed(1));
 */

/* let metin="emre eken javascript dersleri";
for(sonuç in  metin ){
  console.log(metin[sonuç]);// tek tek alta yazdırır
}*/

let renkler=["siyah","mavi","yeşil","kırmızı","purple" ,"sarı"];

for(i in renkler){
  if(i==2 ){
    console.log("benim sevdiğim renk"+renkler[i] );
  }else if(i==5){
    console.log("yasemin en sevdiği renk "+renkler[i]);
  }else{
    console.log("diğer renkler normal");
  }
}

let renklerim=["siyah","mavi","yeşil","kırmızı","purple" ,"sarı"];

let işlem=renklerim.unshift("mor");// dizinin başına eleman ekler
console.log(renklerim);
let işlem1=renklerim.pop();// dizinin sonundan eleman siler
console.log(renklerim);
let işlem2 =renklerim.push("lale");// diziye sonuna eleman ekler
console.log(renklerim);
let işlem3=renklerim.shift();// dizinin başından elaman siler
console.log(renklerim);
let işlem4=renklerim.splice(1,2);// birden başlayarak 2 atlayarak siler
console.log(renklerim);
let işlem5=renklerim.slice(1,5);// 1 ile 5 index aralığındakileri döndürür.
console.log(işlem5);
let işlem6=renklerim.copyWithin(1,5);// 1 ile 5(dahil değil) index  aralığındakileri döndürür.
console.log(işlem6);
let işlem7=renklerim.fill("nar",1,5);// 1 ile 5(dahil değil)  index aralığındakileri değiştirir.
console.log(işlem7);





