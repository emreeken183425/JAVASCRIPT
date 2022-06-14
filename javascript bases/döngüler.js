console.log("****merhaba***  ");

/* while(koşul){
    çaşışacak kodlar
}  */

let deger=5;

while( deger<=10 ){
    document.write(deger+"<br/> ")
    console.log(deger );
    deger++;
  
}

let değer1=1;
while(değer1<=10){
    if(değer1==4){
        değer1++;
        continue;// i 4 e geldiğinde atlatr devam eder
    }
   console.log(değer1+"<br/>");
    değer1++;
}




// *******DO WHİLE******

let sonuc=5;

do{
    document.write(sonuc+"<br/>")
    console.log(sonuc );
    sonuc++;
}while(sonuc<15);

// ***FOR****
/* 
1.parametre=döngü başlangıç değeri
2.parametre=koşul
3.parametre=artırma/azaltma
for(1.parametre,2.parametre,3.parametre  ){
    kodlar
}
*/
for(let eken=1; eken<5;eken++ ){
    document.write(eken)
}

for(let eken1=1;eken1<=10;eken1++ ){
    if(eken1==5){
        continue;
    }
    console.log(eken1);
}
 let listem=["emre","yasemin","emir","eken"]
 let sonuç;
 for(sonuç in listem ){
    if(sonuç==0 ){
        continue;
    }
    console.log(listem[sonuç] );
 }





// ***FOR İN ****

/* 
1.parametre=döngü başlangıç değeri
2.parametre=koşul
for(1.parametre in 2.parmetre ){
    kodlar
}
*/


let liste=["emre","yasemin","emir","eken" ];
let i;

for(i in liste ){
    if(liste[i]=="emre" ){
        console.log("emre benim");
    }else if(liste[i]=="yasemin" ){
        console.log("emrenin sevgili eşi yasemin");
    }else if(liste[i]=="eken" ){
        console.log("bizim soyadımız");
    }else if(liste[i]="emir" ){
        console.log("emir bizim ilk evladımız");
    }
}
























