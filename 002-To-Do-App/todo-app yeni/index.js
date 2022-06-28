

const btn=document.getElementById('todo-button');
const inputum=document.getElementById('todo-input');
const todoUl=document.getElementById('todo-ul');

window.onload=function(){
    inputum.focus();
}

btn.addEventListener('click',(e)=>{
    todoUl.innerHTML +=`<li>
    <i class="fa fa-check" ></i>
    <p>${inputum.value} </p>
    <i class="fa fa-trash" ></i>
    </li>`;
    inputum.value='';

});

inputum.addEventListener("keydown",(e)=>{
    if(e.key==='Enter'){
        btn.click();
    }
})

inputum.addEventListener("keydown",(e)=>{
    if(e.key==='Delete'){
        btn.click();
    }
})