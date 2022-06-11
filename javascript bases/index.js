console.log('******FUNC DECLARATİON******');

function yazdir() {
    console.log('merhaba');
}
yazdir();
yazdir();
console.log(typeof yazdir);

function selamla(name, lastname = '') {
    console.log(` merhaba ${name} ${lastname} `);

}
selamla('erhan', 'yılmaz');
selamla('mehmet');
selamla('ahmet');

// örnek3: parametre dönüş değerli

function yasHesapla(year, name) {
    // const mesaj = ` ${name} im yaşı ${2022-year} dir  `;
    const time = new Date().getTime();
    console.log(time);
    const mesaj = ` ${name} im yaşı ${new Date().getFullYear()-year} dir  `;
    return mesaj;

}

const mesaj1 = yasHesapla(2001, 'elif')
console.log(mesaj1);

// örnek4: parametre dönüş değerli

function tekÇift(number) {
    return number % 2 === 0 ? `${number} çifttir` : `${number} tektir `;

}
console.log(tekÇift(5));
console.log(tekÇift(4));