function örnek(){
    document.getElementById("sonuçalanı").innerHTML="butona tıklandı";
}
function örnek1(){
   
    document.getElementById("sonuc").innerHTML="paragrafa tıklandı"
    document.getElementById("sonuc").style.backgroundColor="red"
}
function örnek2(){
    document.getElementById("sonuc2").innerHTML="sağ tıklandı";
    document.getElementById("sonuc2").style.color="blue";
    document.getElementById("sonuc2").style.backgroundColor="pink";
    document.getElementById("sonuc2").style.fontSize="35px";
    document.getElementById("sonuc2").style.padding="25px";
}
function örnek3(){
    document.getElementById("sonuc3").style.backgroundColor="purple";
    document.getElementById("sonuc3").style.color="white";
    document.getElementById("sonuc3").innerHTML="onmouseover işlemi oldu";
}
function örnek4(){
    document.getElementById("sonuc3").innerHTML="onmouseout işlemi oldu";
    document.getElementById("sonuc3").style.color="yellow"
}
function örnek5(){
    document.getElementById('sonuc5').innerHTML=event.button;
    // 0 sol tuş,1 orta ve tekerlek,2 sağ tuş demek
}
function örnek6(){
    let xdegeribul=event.screenX;
    let ydegeribul=event.screenY;
    document.getElementById('x').innerHTML=xdegeribul;
    document.getElementById('y').innerHTML=ydegeribul;
}
function örnek7(){
    let basılan=event.key;
    document.getElementById('sonuc7').innerHTML+=basılan;
}
/* function örnek8(){
alert("olay olay")
}*/
function örnek9(){
    document.getElementById('input').style.backgroundColor="red";
    document.getElementById('input').style.color="white";
}
function örnek10(){
    document.getElementById('metin2').innerHTML="odaktan çıkıldı"
}
function örnek11(){
  let veri=  document.getElementById('input2').value;
  document.getElementById('son').innerHTML +=veri;
}
function örnek12(){
    let veri=  document.getElementById('input3').value;
    document.getElementById('son1').innerHTML =veri;
  }
  function örnek13(){
    alert("lütfen değer giriniz")
  }