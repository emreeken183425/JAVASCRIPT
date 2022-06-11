console.log("merhaba");

let isim = "emre"; //! string veri türü
let sayı = 1; //! number
let mantıksal = true; //! boolean
let isimler = ["mehmet", "ahmet"]; //! array
let nesneler = new object(); //! object
let tanımısız; //! tanımısız undifined
let boş = ""; //! tanımısız undifined


let depo1 = isim + ":" + typeof(isim); //string
console.log(depo1);

let depo2 = sayı + ":" + typeof(sayı); //number
console.log(depo2);

let depo3 = mantıksal + ":" + typeof(mantıksal); //boolean
console.log(depo3);

let depo4 = isimler + ":" + typeof(isimler); //array
console.log(depo4);

let depo5 = isim + ":" + typeof(isim); //object
console.log(depo5);

let depo6 = isim + ":" + typeof(isim); //tanımısız undifined
console.log(depo6);