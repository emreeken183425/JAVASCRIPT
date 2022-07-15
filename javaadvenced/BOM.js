// open() yeni browser penceresi açmak için
// 1 parametre url
//2 parametre pencere adı,
// 3 pencere pencerenin özellikleri
// 4 pencere pencere geçmiş bilgisi



function pencereac(){
let pencere=window.open("","yeni pencere","width=500px,height=500px,left=250px,top=250px", )
}
function pencereac1(){
    let pencere1=window.open("https://www.google.com/","google","width=1000px,height=750px",true);
    pencere1.opener.document.write("yeni google sayfası açıldı")
    }