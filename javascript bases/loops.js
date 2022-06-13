console.log('***merhaba***');

/* *************----FOR----*****************

for(let i=1;i<=5 && i>0;i++ ){
  const randomSayı=Math.floor(Math.random()*100+1);
  console.log(randomSayı );
}
console.log('program bitti');
 
//? birden 10 a kadar olan sayıları yazınız

//const n=prompt('n sayısı giriniz:')
// let topla=0;
//for (let i=1;i<=n;i++ ){
//   
//    topla=topla+i;
//}
//console.log(topla);

// girilen sayının asal olup olmadığını tespit edelim 

const sayı=prompt("lütfen sayı girinzi:");
let asal=true;
if(sayı%2==0){
   asal=false;
   console.log(`${sayı} asal değil `);
   
}else{
    console.log(`${sayı} asaldır `);
};
*/

/*  ******---while----******* */
/* let i=1;
while(i<=5){
    console.log("merhaba -",i);
    i++;
    
};
console.log("bitti");

let not=prompt("enter your exam points");

while(not<0 || not>100 ){
    console.log("wrong number please enter correct number.");
     not=prompt("enter valid number");
}
console.log("girdiğiniz not ",not); */






/*  ***DO-WHİLE******************* */

 /* let sayı;
  do{
    let sayı=prompt("enter a number:")
  }while(sayı>0 || sayı<100 )
  console.log("girdiğiniz sayı 0-100 arasındadır"); 


  let not;
  do{
    not=prompt("enter your exam points");
    if(not<0 || not>100 ){
        console.log("wrong number please enter correct number.");
    }

  }while(not<0 || not>100 );

    console.log("girdiğiniz not ",not);  */
     

 console.log("OYUN");
 let devam;
  do{
    let hak =5;
    const rastgele=Math.floor(Math.random()*100+1);
    console.log(rastgele );
 
    do{
  const tahmin=prompt("enter guess number 1-100..")
  hak -=1;
  if(tahmin==rastgele){
     console.log( `tebrikler😍 ${5-hak} .denemede bildiniz `);
     break;
  }else{
     console.log(`Dikkat ${hak} kaldı  ` );
     if(tahmin<rastgele){
         console.log("artır");
     }else{
         console.log("azalt");
     }
  }
    }while(hak>0) ;
 
   if (hak==0){
     console.log("Üzgünüm kaybettiniz ");
   }
   
    devam=prompt("yeniden oynamak ister misiniz? e/h?")
  }while(devam=='e'|| devam=='E');
  console.log("yine bekleriz");

