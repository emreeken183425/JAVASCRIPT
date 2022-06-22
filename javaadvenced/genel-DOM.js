//.getElementById('id');kendisine parametre olarak verilen değer doğrultusunda id olarak verilen değeri dödürür.

let örnek=document.getElementById('demo').innerHTML="emre eken javascript eğitimi";// içerik değitirdik.

let örnek1=document.getElementById('demo').innerHTML;
// alert(örnek1);// sadece innerHTML dersek demo id sahip olan yerin tüm özelllikleri döner.

let örnek3=document.getElementById('demo').style.color='red';// renk değiştirdik bu şekilde istediğimiz css i verebilriz.

function deneme(){
document.getElementById("eken").innerHTML="emre eken ";
document.getElementById("eken").style.color='blue';
document.getElementById("eken").style.backgroundColor='red';
document.getElementById('demo').style.backgroundColor='black'
} 
//* *************************************** */
// getElementsByName()kendisine verilen değeri elde etmek için kullanır.elemen sayısı birden fazla ise döngü ile elde edilir

let deneme1=document.getElementsByName('hayvan').length;
document.getElementById('hayvansayısı').innerHTML=deneme1;

let bilgi=document.getElementsByName('hayvan');// name leri otomotoik sıralar indeks değerine göre 
let sonuc=bilgi[1].innerHTML;
document.getElementById('özel').innerHTML=sonuc;

// döngü ile yapalım 

let döngü1=document.getElementsByName('hayvan');
let hayvanlar=[];
for(let i=0;i<döngü1.length;i++ ){
    let son=döngü1[i].innerHTML;
    hayvanlar[i]=son;
} 
document.getElementById('döngü').innerHTML=hayvanlar;

let bilgi1=document.getElementsByName('eken')[0].tagName;
document.getElementById('etiket').innerHTML=bilgi1;

function işlem(){
   // alert('butona tıklayın');
   let değer2=document.getElementsByName('ilgialanları');
   for(let a=0; a<değer2.length;a++ ){
    değer2[a].checked= true;

   }
}
function işlem1(){
    // alert('butona tıklayın');
    let değer2=document.getElementsByName('ilgialanları');
    for(let a=0; a<değer2.length;a++ ){
     değer2[a].checked= false;
    }
 }

let divim=document.getElementsByTagName('div')[0].innerHTML;
document.getElementById('iki').innerHTML=divim;
 
let paragraf=document.getElementById('üç').innerHTML="emre eken erzurum";

// let işlem2=document.documentElement.nodeName;
// document.write(işlem2);
function işlem3(){
    let xyz=document.body.innerHTML;
    document.write(xyz);
}


let işlem4=document.anchors['clarusway'].innerHTML;
document.getElementById('emre').innerHTML=işlem4;

var işlem5=document.links.namedItem('clarusway').href ;
document.getElementById('emre1').innerHTML=işlem5;
