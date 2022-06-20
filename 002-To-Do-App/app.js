const btn=document.getElementById('todo-button');
const todoInput=document.getElementById('todo-input');
const todoUl=document.getElementById('todo-ul');

window.onload=function(){
    todoInput.focus();
}

btn.addEventListener("click",(e)=>{
    console.log(todoInput.value );
    todoUl.innerHTML+=`<li>
    <i class="fa fa-check " ></i>
    <p>${todoInput.value}</p>
    <i class="fa fa-trash " > </i>
  </li> `;
  todoInput.value='';
}  )

todoInput.addEventListener('keydown',(e)=>{
    if(e.key==="Enter" ){
        btn.click();
    }
})