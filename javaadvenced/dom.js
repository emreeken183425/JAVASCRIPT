console.log('******merhaba******');
const header = document.getElementById('header');
console.log(header);
header.style.color = 'green';

//* BUTTOS STYLE 

const button = document.getElementById('btn');
btn.style.color = 'yellow';
btn.style.backgroundColor = 'green';
btn.style.fontSize = '25px';

const img = document.getElementsByTagName('img');
console.log('img');
img[0].style.border = 'solid 5px  red';
img[0].style.borderRadius = '10px';
img[0].style.transform = 'rotate(-10deg)';

const pars = document.getElementsByClassName('pars');

 //pars[0].textContent = 'DOM manipülasyonu';
// para[0].innerText = 'DOM manipülasyonu';


//* BUTTOSQUERYSELLECTORS
document.querySelector('title').textContent = "javascript😍 ";

const myPars = document.querySelectorAll('p');
console.log(myPars);

myPars.forEach((p) => console.log(p.textContent));

document.querySelector(".eken").onmouseover=function(){
    document.querySelector(".eken").style.color="green";
}
document.querySelector(".eken").onmouseout=function(){
    document.querySelector(".eken").style.color="red";
}

document.getElementById('head').onmouseover=function(){
    document.getElementById('head').style.color='red';
}
document.getElementById('head').onmouseout=function(){
    document.getElementById('head').style.backgroundColor='pink';
    document.getElementById('head').style.border='1px solid green';
    
}

const il=document.getElementById('il');
il.onmouseover=function(){
    il.style.color='purple';
}

const ilçe=document.getElementById('il');
il.onmouseout=function(){
    il.style.color='orange';
}

const buton=document.querySelector('#btnk');
buton.addEventListener("click",function(){
    document.querySelector('body').style.backgroundImage='linear-gradient(to right,purple ,pink )';
    buton.textContent='again';
} )