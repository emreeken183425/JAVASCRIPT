//**** FONSİYONLAR**** */
// ana function
function demo(){
    document.write("merhaba"+"<br/>")
}
demo();


// bir değere atayarak function oluşturma
let ornek = function(){
    document.write("değişkene atayarak fonsiyon çağırmak"+"<br/>")
}

ornek();

// dışardaki değer, function içinde çağırma

let bir="yasemin"
let iki="emre"
function emre(){
    document.write(bir+" "+iki);
}
emre();

// return ile aktarmak
function emir(){
    let bir="yasemin"
    let iki="emre"
   return bir
}
 let sonuç=emir();
 document.write(sonuç+"<br/>");

 // aynı adla birden fazla fonsiyon kullanmak nasıl olur 
let i="renkler"
 if(i=="renkler"){
    function text(){
        document.write("siyah","beyaz","mavi","yeşil");
     }
 }else if(i=="isimler"){
    function text(){
        document.write("emre","beşiktaş","erzurum","merdiven");
     }
 }else{
    function text(){
        document.write("değer aralığında değil");
     }
 }
 text();

 // fonsiyonu otomotik çalıştırma örneği (funcion)();

 (function test(){
    document.write("erzurum bağları")
 } )();


 // forEach () methodu dizideki her eleman üzerine tek tek çalışır
// a her işlemde elde edilen dizi elemanı
//b her işlemde elde edilen dizi index değeri
//c tekrarlama işlemi için dizinin atandığı değişken referansı
function işlem(a,b,c){
    son +=a ;
}
let son=3;
let liste=[1,5,9,8,78,52]
liste.forEach(işlem);
console.log(son);
 
// filter() her eleman üzerine çaşışır yeni bir parametre oluşturur

function bul(eleman,indexi,değişkeni){
    return eleman %2!==0;

}
function bulçift(eleman,indexi,değişkeni){
    return eleman %2==0;

}

let rakamlar=[1,23,4,5,6,7,8,9,15,45,20,44]
console.log(rakamlar);

let teksayılar=rakamlar.filter(bul);
console.log(teksayılar );
let çiftsayılar=rakamlar.filter(bulçift);
console.log(çiftsayılar);


//?! map() methodu kendisine parametere olarak verilen her eleman üzerinde çalışır ve teni değerler döndürür.

function yeni(x,y,z){
    let karar=x+100;
    return karar;

}

let rakam=[1,23,4,5,6,7,8,9,15,45,20,44]
console.log(rakam);

let tekrar=rakam.map(yeni);
console.log(tekrar);