
    let rsayı,sayaç,hak=4;
    const başlat=document.querySelector('#başlat');
    const tahmin=document.querySelector('#tahmin');
    const sayı=document.querySelector('#sayı');

    başlat.onclick=function(){
        tahmin.disabled=false;
        rastgelesayı=Math.round(Math.random()*100);
        sayaç=0;
       
    }
    tahmin.onclick=function(){
        sayaç++;
        if(rsayı!=sayı.value && sayaç>hak ){
            window.alert("game over");
            tahmin.disabled=true;
        }
        if(rsayı==sayı.value){
            document.alert("tebrikler")
        }else if(sayı.value>rsayı){
           window.alert("azalt")
        }else {
           window.alert("arttır")
        }
    }


