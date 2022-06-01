console.log('******merhaba******');
const header = document.getElementById('header');
console.log(header);
header.style.color = 'green';

//* BUTTOS STYLE 

const button = document.getElementById('btn');
btn.style.color = 'yellow';
btn.style.backgroundColor = 'red';
btn.style.fontSize = '25px';

const img = document.getElementsByTagName('img');
console.log('img');
img[0].style.border = 'solid 5px  red';
img[0].style.borderRadius = '10px';
img[0].style.transform = 'rotate(-10deg)';

const pars = document.getElementsByClassName('pars');

// pars[0].textContent = 'DOM manipülasyonu';
// para[0].innerText = 'DOM manipülasyonu';


//* BUTTOSQUERYSELLECTORS
document.querySelector('title').textContent = "javascript😍 ";

const myPars = document.querySelectorAll('p');
console.log(myPars);

myPars.forEach((p) => console.log(p.textContent));