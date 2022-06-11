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
























