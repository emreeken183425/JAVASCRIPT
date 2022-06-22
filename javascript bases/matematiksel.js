console.log('****MATEMATİKSEL İŞLEM****');

let sayı=Number.MAX_VALUE;// javascripte döndürülecek en büyük sayı
console.log(sayı);
let sayı1 = Number.MIN_VALUE;// javascripte döndürülecek en küçük negatif  sayı
console.log(sayı1);
let sayı3=Number.POSITIVE_INFINITY;// atanabilecek en büyük pozitif sayılarda infinity sonsuzluk döndürür.
console.log(sayı3);

let sayı4=Number.NEGATIVE_INFINITY// atanabilecek en küçük sayılarda infinity sonsuzluk döndürür.
console.log(sayı4);

let sayı5=Math.LN2// 2 sayısının logaritmik değerini döndürür.
console.log(sayı5);
/*
E	E sayısını verir. (yaklaşık. 2.718)
LN2	Logaritma 2yi verir. (yaklaşık. 0.693)
LN10	Logaritma 10 verir. (yaklaşık. 2.302)
LOG2E	2 tabanında logritma E verir. (yaklaşık. 1.442)
LOG10E	On tabanında logaritma E (yaklaşık. 0.434)
PI	PI sabiti (yaklaşık . 3.14)
SQRT1_2	Karekök 2yi verir. (yaklaşık. 0.707)
SQRT2	2nin karesi verir. (yaklaşık. 1.414)*/

//Yukarı doğru en yakın tam sayıya yuvarlama için kullanılır.
Math.ceil(1.4);  //sonuç 2

//Aşağı doğru en yakın tam sayıya yuvarlar.
Math.floor(1.6);  // 1

//JavaScript max() Kullanımı
// Kendisine parametre olarak verilen değerlerden en büyüğünü döndürür.
Math.max(5, 10,3,25); //25


//Kendisine parametre olarak verilen değerlerden en küçüğünü döndürür.
Math.max(5, 10,3,25); //3

//Sayının kuvvetini hesaplamak için kullanılır. Diğer bir ifade ile üs alma fonksiyonudur.
Math.pow(4, 3);   //4*4*4

//0-1 arasında rastgele bir sayı üretir.
 
Math.random();

// Sayıyı en yakın tam sayıya yuvarlar.
Math.round(2.51);  //3
Math.round(2.49);  //2
