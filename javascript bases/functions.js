console.log('****functions expretions****');

const tekÇift = function(number) {
    return number % 2 === 0 ? `${number} çifttir` : `${number} tektir `;

}
console.log(tekÇift(5));
console.log(tekÇift(4));

const buyukBul = function(x, y, z) {
    let enBüyük;
    if (x > y && x > z) {
        enBüyük = x;

    } else if (y > x && y > z) {
        enBüyük = y;
    } else if (z > x && z > y) {
        enBüyük = z
    } else {
        enBüyük = x
    }
    return enBüyük;
}
console.log('en büyük sayı:', buyukBul(1, 5, 9));
console.log('en büyük sayı:', buyukBul(8, 5, 3));
console.log('en büyük sayı:', buyukBul(1, 5, 2));
console.log('en büyük sayı:', buyukBul(1, 6, 4));




const hesapla = function(islem, s1, s2) {
    let sonuc;

    if (islem == '+') {
        sonuc = topla(s1, s2);
    } else if (islem == '-') {
        sonuc = cikar(s1, s2);
    } else if (islem == '*') {
        sonuc = carp(s1, s2);
    } else if (islem == '/') {
        sonuc = bol(s1, s2);
    }
    return sonuc;
};

const topla = function(s1, s2) {
    return s1 + s2;
};
const cikar = function(s1, s2) {
    return s1 - s2;
};
const carp = function(s1, s2) {
    return s1 * s2;
};
const bol = function(s1, s2) {
    return s1 / s2;
};

console.log(hesapla('+', 3, 5));
console.log(hesapla('-', 3, 5));

const usAl = (taban, üs) => taban ** üs;
console.log(usAl(2, 3));

const bölüm = (sayı1, sayı2) => sayı1 / sayı2;
console.log(bölüm(8, 4));