let kullanıcılar=[
    {email:"emreeken1834@gmail.com",şifre:"12345"},
    {email:"derinmehmet@gmail.com",şifre:"54321" }
]

let tivitler=[
    {email:"emreeken1834@gmail.com",tivit:"bugün hava çok güzel"},
    {email:"emreeken1834@gmail.com",tivit:"bugün hava çok güzel iki"}, {email:"derinmehmet@gmail.com",tivit:"kapıyı ben açarım"},
    {email:"derinmehmet@gmail.com",tivit:"sen ne güzelsin"}
]

let email= prompt("email?");
let şifre=prompt("şifre giriniz");

function giriş(){
    if((email == kullanıcılar[0].email && şifre == kullanıcılar[0].şifre)|| (email == kullanıcılar[1].email && şifre == kullanıcılar[1].şifre) ){
        console.log(tivitler );
    }else{
        console.log("hatalı giriş");
    }
}
giriş(email,şifre);