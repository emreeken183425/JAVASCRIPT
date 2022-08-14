let toplamalan=1000;
let grafik1alan=document.getElementById("grafik1");
 let yüzde1=85;
 let hesapla1=100/yüzde1;
 let piksel1=toplamalan/hesapla1
 let başlangıç1=0;
 let zaman1=setInterval(function(){
    document.getElementById("grafik1").style.width=başlangıç1 +"px";
    başlangıç1=başlangıç1+1;
    if (başlangıç1>piksel1){
        document.getElementById("değer1").innerHTML="%"+yüzde1+ " ";
        clearInterval(zaman1);
    }
 })
 
 let grafik2alan=document.getElementById("grafik2");
 let yüzde2=75;
 let hesapla2=100/yüzde2
 let piksel2=toplamalan/hesapla2
let başlangıç2=0;
let zaman2=setInterval(function(){
    document.getElementById("grafik2").style.width=başlangıç2+"px";
    başlangıç2=başlangıç2+1;
    if(başlangıç2>piksel2){
        document.getElementById("değer2").innerHTML="%"+yüzde2+" ";
    clearInterval(zaman2);
    }

})
