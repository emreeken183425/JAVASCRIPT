console.log("*****merhaba*****");
let deger="https://lms.clarusway.com/course/view.php?id=5"
document.write(deger+" <br/>" );

/* escape()değişken içerisindeki metnin özel karakterlerini unicode (evrensel kod) kodlamasona dönüştürür 
unescape( ) escape tersi yapar  */
let deger1="emre eken javascript dersi"
document.write(deger1+" <br/> ");
let sonuç=escape(deger1);
document.write(sonuç+" <br/> ");
let sonuç1=deger1.big();// harfi büyük fontta yazar
document.write(sonuç1+" <br/> ");
let sonuç2=deger1.small();//harfi küçük fontta yazar
document.write(sonuç2+" <br/> ");
let sonuç3=deger1.strike();// üstünü çizer
document.write(sonuç3+" <br/> ");
 let sonuç4=deger1.fontcolor();// varsayılan renk yeşil yazar,hangi renk verirseni onu yazar
 document.write(sonuç4+" <br/> ");
 let sonuç5=deger1.fontcolor("blue");//hangi renk verirseni onu yazar
 document.write(sonuç5+" <br/> ");

 let sonuç6=deger1.fontsize(5);// istediğimiz fontta yazar
document.write(sonuç6+" <br/> ");

let sonuç7=deger1.link("https://lms.clarusway.com/course/view.php?id=5");// link atar
document.write(sonuç7+" <br/> ");



let geridöndür=unescape(deger1);
document.write(geridöndür+" <br/> ");

let metin="ERZURUM ankara AşkALe"
document.write(metin+" <br/> ");

let yenimetin=metin.toLocaleLowerCase();// tarayıcı diline çevirir
document.write(yenimetin+" <br/> ");

let yenimetin1=metin.toLocaleUpperCase();// büyük harf yapar
document.write(yenimetin1+" <br/> ");

let yenimetin2=metin.toLowerCase();// küçük harf yapar
document.write(yenimetin2+" <br/> ");

let formul="H2O";
document.write(formul+"<br/>");
let birinicideger="H"
let birinicidegerislemi=birinicideger.sup();
let ikincideger="2";
let ikincidegerişlemi=ikincideger.sub();// sub() alt karakter yapar
let ücüncüdeger="O";

document.write(ikincideger);
document.write(ikincidegerişlemi+" <br/> " )
document.write(birinicideger);
document.write(birinicidegerislemi);
