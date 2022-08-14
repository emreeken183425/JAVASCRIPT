let toplamalan=1000;
let grafik1alan=document.getElementById("grafik1");
 let yüzde1=40;
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
 let yüzde2=50;
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
let grafik3alanı=document.getElementById("grafik3");
let yüzde3=60;
let hesapla3=100/yüzde3;
let piksel3=toplamalan/hesapla3;
let başlangıç3=0;
let zaman3=setInterval(function(){
    document.getElementById("grafik3").style.width=başlangıç3+"px";
    başlangıç3=başlangıç3+1;
    if(başlangıç3>piksel3){
        document.getElementById("değer3").innerHTML="%"+yüzde3+" ";
        clearInterval(zaman3);
    }
})
let grafik4alanı=document.getElementById("grafik4");
let yüzde4=70;
let hesapla4=100/yüzde4;
let piksel4=toplamalan/hesapla4;
let başlangıç4=0;
let zaman4=setInterval(function(){
    document.getElementById("grafik4").style.width=başlangıç4+"px";
    başlangıç4=başlangıç4+1;
    if(başlangıç4>piksel4){
        document.getElementById("değer4").innerHTML="%"+yüzde4+" ";
        clearInterval(zaman4)
    }
})

let grafik5alanı=document.getElementById("grafik5");
let yüzde5=80;
let hesapla5=100/yüzde5;
let piksel5=toplamalan/hesapla5;
let başlangıç5=0;
let zaman5=setInterval(function(){
    document.getElementById("grafik5").style.width=başlangıç5+"px";
    başlangıç5=başlangıç5+1;
    if(başlangıç5>piksel5){
        document.getElementById("değer5").innerHTML="%"+yüzde5+" ";
        clearInterval(zaman5);
    }
})

let grafik6alanı=document.getElementById('grafik6');
let yüzde6=90;
let hesapla6=100/yüzde6;
let piksel6=toplamalan/hesapla6;
let başlangıç6=0;
let zaman6=setInterval(function(){
 document.getElementById('değer6').style.width=başlangıç6+"px"
    başlangıç6=başlangıç6+1;
    if(başlangıç6>piksel6){
        document.getElementById('değer6').innerHTML="%"+yüzde6+" ";
        clearInterval(zaman6);
    }
})

let grafik7alanı=document.getElementById('grafik7');
let yüzde7=80;
let hesapla7=100/yüzde7;
let piksel7=toplamalan/hesapla7;
let başlangıç7=0;
let zaman7=setInterval(function(){
    document.getElementById('değer7').style.width=başlangıç7+"px";
    başlangıç7=başlangıç7+1;
    if(başlangıç7>piksel7){
        document.getElementById('değer7').innerHTML="%"+yüzde7+" ";
        clearInterval(zaman7);
    }
})
let grafik8alanı=document.getElementById('grafik8');
let yüzde8=70;
let hesapla8=100/yüzde8;
let piksel8=toplamalan/hesapla8;
let başlangıç8=0;
let zaman8=setInterval(function(){
    document.getElementById('değer8').style.width=başlangıç8+"px";
    başlangıç8=başlangıç8+1;
    if(başlangıç8>piksel8){
        document.getElementById('değer8').innerHTML="%"+yüzde8+" ";
        clearInterval(zaman8);
    }
})
let grafik9alanı=document.getElementById('grafik9');
let yüzde9=60;
let hesapla9=100/yüzde9;
let piksel9=toplamalan/hesapla9;
let başlangıç9=0;
let zaman9=setInterval(function(){
    document.getElementById('değer9').style.width=başlangıç9+"px";
    başlangıç9=başlangıç9+1;
    if(başlangıç9>piksel9){
        document.getElementById('değer9').innerHTML="%"+yüzde9+" ";
        clearInterval(zaman9);
    }
})

