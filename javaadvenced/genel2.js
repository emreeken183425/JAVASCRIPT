let işlem=document.images[0].width=200 ;
document.getElementById('sonuc').innerHTML="resim dosyası:0"+işlem;

let işlem1=document.images[1].width=100 ;
document.getElementById('sonuc').innerHTML="resim dosyası:0"+işlem1;

var işlem3=document.images[2].width=300 ;
var işlem3=document.images[2].height=300 ;
document.getElementById('sonuc').innerHTML="resim dosyası:0"+işlem3;

function örnek(){
    let değer=document.getElementsByTagName("h1")[0];
    let özellik=document.createAttribute("class");
    özellik.value="demo";
    değer.setAttributeNode(özellik);
}