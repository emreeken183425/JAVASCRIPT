const users=["mehmet","ahmet","ali","veli","deli"]
const ad=[
    {name:"emre"},
    {name:"yasemin"},
    {name:"emir"}
]
users.push("ayşe");
users.push("xxxx");
console.log(users);
users.map((item)=>{
    console.log(item);
})

ad.map((getir)=>{
    console.log(getir.name);
})

const filtered=users.filter((item)=>item==='ahmet')
console.log(filtered);
const eken=ad.filter((getir)=>getir.name==='emre')
console.log(eken);