console.log("merhaba");

//! slice() methodu kendisine verilecek olan parametreler ile tanımlanmış değişken içeriği aralığında kopyalayarak yeni bir içerik Oluşturur ve oluşturduğu değeri geri döndürür.

let içerik = "emre eken java script eğitim seti"
console.log(içerik);

let sonuç = içerik.slice(15);
console.log(sonuç);

let başlangıç = "emre eken javascript dersi çalışıyor";
let bitiş = başlangıç.slice(5, 15); // 5 inci karakerden başla 15 e kadar yazdır dedik 
console.log(bitiş);