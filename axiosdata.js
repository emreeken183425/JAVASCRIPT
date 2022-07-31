const { default: axios } = require("axios");

(async()=>{
const {data:users}=await axios ("https://jsonplaceholder.typicode.com/users");
console.log("uses yüklendi",users);
})();