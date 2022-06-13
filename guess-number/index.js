 
const tahmin=document.getElementById('#tahmin');
const gönder=document.getElementById('#gönder');
const sil=document.getElementById('#sil');

 let devam;
  do{
    let hak =5;
    const tahmin=Math.floor(Math.random()*100+1);
    document.write(rastgele );
 
    do{
  const tahmin=prompt("enter guess number 1-100..")
  hak -=1;
  if(tahmin==rastgele){
     document.write( `tebrikler😍 ${5-hak} .denemede bildiniz `);
     break;
  }else{
     document.write(`Dikkat ${hak} kaldı  ` );
     if(tahmin<rastgele){
         document.write("artır");
     }else{
         document.write("azalt");
     }
  }
    }while(hak>0) ;
 
   if (hak==0){
    document.write("Üzgünüm kaybettiniz ");
   }
   
    devam=prompt("yeniden oynamak ister misiniz? e/h?")
  }while(devam=='e'|| devam=='E');
document.write("yine bekleriz"); 
