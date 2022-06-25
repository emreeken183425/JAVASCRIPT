const ürünServis={
    ekle:function(){
        console.log(this);
    }
}

ürünServis.ekle();

class Personel{
    constructor(ad,soyad){

        this.ad=ad;
        this.soyad=soyad;
    }
    kaydet(){
        console.log("pesonel kaydedildi"+" "+this.ad);
    }
}

 let personel= new Personel("emre","eken")

 personel.kaydet();

personel.ad="yasemin"
console.log(personel.ad);