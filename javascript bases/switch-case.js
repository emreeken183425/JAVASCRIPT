/**SWİTCH(KOŞUL BAŞLATIR),CASE(KOŞUL KONTROLÜ),BREAK(KOŞUL KONTROL SONLANDIRILMASI) ,DEFAULT(KOŞUL OLUMSUZLUKLARI SONUCU)   */

let metin="javascript dersleri.";
let karakter=metin.length;
document.write(karakter+"<br/>");

switch(karakter){
    case 1:
        document.write("metnin karakter sayısı 1'dir.");
        break;
        case 5:
        document.write("metnin karakter sayısı 5'dir.");
        break;
        case 19:
        document.write("metnin karakter sayısı 19'dir.");
        break;
        case 21:
        document.write(`metnin karakter sayısı 21'dir.<br/>`);
        break;
}


switch(karakter){
        case 1:
        document.write("metnin karakter sayısı 1'dir.");
        break;
        case 5:
        document.write("metnin karakter sayısı 5'dir.");
        break;
        case 19:
        document.write("metnin karakter sayısı 19'dir.");
        break;
        case 21:
        document.write("metnin karakter sayısı 21'dir."+"<br/>");
        break;
        default:
            document.write("maalesef değer aralığında değil"+"<br/>" )
}
/** TERNARY İFADELERİ */
// 4<5?("DOĞRU"):("YANLIŞ")
document.write(4<5?("DOĞRU"+"<br/>" ):("YANLIŞ"));
// 2>5?("doğru"):("yanlış")
document.write(2>5?("doğru"):("yanlış"+"<br/>"));

let kontrol=(4<5 && 5>6 )?("yanlış"):("doğru"+"<br/>"+"<br/>");
document.write(kontrol);


/**
 * TRY:HATA OLUŞABİLECEK KODLAR İÇİN KULLANILIR
 * CATCH:HATA OLUŞURSA ÇALIŞACAK KODLAR
 * FİNALLY:HATA OLUŞSADA OLUŞMASADA ÇALIŞACAK KODLAR
 * THROW:HATA OLUŞTURULABİLECEK KODLAR İÇİN İSTİSNAİ KULLANILIR,yazıldığı yerden sonraki değerler gelmez
 */
document.write("HATA DENETİMİ TRY,CATCH,FİNALLY,THROW "+"<br/>")

try{
    let isim="emre";
    //throw("değişken tanımlama hatası soy isim adında değişken yok");
    document.write(isim+"<br/>");
    document.write(soyisim);
}
catch(err)  {
document.write("hata oluştu"+"<br/>");
document.write(err+"<br/>")
}
finally{
    document.write("finallyde hata olsada olmasada çalıştı")
}