//! forEach() methodu


const dizi=[1,2,3,4];
dizi.forEach(sayı=>{
    document.write(sayı + "<br/>");
})

const dizi1=[2,5,4,8,6,5];

const kare=[]

dizi1.forEach(emre=>{
    kare.push(emre*emre);
})

document.write(kare +"<br/>")

let dizi2=["emre","eken","yasemini","seviyor"]

let yazdır=[]

dizi2.forEach(i=>{
    yazdır.push(i)
})

document.write(yazdır+"<br/>")

let erzurum=[2,5,4,6,3]

let ilçe=[]

erzurum.forEach(i=>{
    ilçe.push(i**3)
})

document.write(ilçe+"<br/>");


let güneş=["güneş","bir","lambadır","dünya","için"]

let ay=[ ]

güneş.forEach(x=>{
    ay.push(x)
})

document.write(ay+"<br/>")


 //! map() methodu

let dizi3=[1,2,5,4,7,8,9]

let yeni=dizi3.map(x=>x*5)

document.write(yeni+"<br/>")

let yeni1=dizi3.map(y=> y**3)
document.write(yeni1 +"<br/>" )


 //! filter() methodu


 let filterdizi=dizi3.filter(x=>(x>3)&&(x<9))
 document.write(filterdizi+"<br/>" )

  //! reduce() methodu

  let toplam=dizi3.reduce((xx,yy)=>{
    return xx+yy
  })
  document.write(toplam+"<br/>")