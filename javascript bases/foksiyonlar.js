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
    document.write("erzurum bağlaları")
 } )();
