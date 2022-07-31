
//girilecek parametre tamamlandıktan sonra bir kere çalışır 2 paramaetre alınır 
setTimeout(()=>{
    console.log("merhaba");
},2000)// sayfada 2 saniye sonra merhaba yazar

//set timout benze ama her saniye çalışır durdurana kadar
// setInterval(()=>{
//     console.log("merhaba ben her saniye çalışacağım");
// },5000)
const merhabaDe=(cb)=>{
    cb();
}
merhabaDe(()=>{
    console.log("hello");
});
