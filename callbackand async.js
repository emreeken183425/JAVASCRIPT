
//girilecek parametre tamamlandıktan sonra bir kere çalışır 2 paramaetre alınır 
//setTimeout(()=>{
 //   console.log("merhaba");
//},2000)// sayfada 2 saniye sonra merhaba yazar

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

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((data)=>data.json())
// .then((users)=>{console.log("users yüklendi",users);})

// fetch("https://jsonplaceholder.typicode.com/post/1")
// .then((data)=>data.json())
// .then((post)=>{
//     console.log("post1 yüklendi",post);
// })
 async function getDATA(){
    
    
    const users=await (await fetch("https://jsonplaceholder.typicode.com/users")).json();
    const post=await (await fetch("https://jsonplaceholder.typicode.com/post/1")).json();
    console.log("usres yüklendi",users);
    console.log("post1 yüklendi",post);
 }
 getDATA();

 (async()=>{
    const post=await (await fetch("https://jsonplaceholder.typicode.com/post/2")).json();
    console.log("post2 yüklendi",post);
 })();