//Selectors
const todoInput = document.querySelector(".todo-input");
const todobutton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");


//Event Listner
document.addEventListener('DOMContentLoaded', getTodos);
todobutton.addEventListener("click", addtodo);
todoList.addEventListener('click',deleteItem);
filterOption.addEventListener('click',filterTodo);



//Function
function addtodo(e){
    e.preventDefault();

    //create a div
    const todoDiv = document.createElement("div");
    //add class to div
    todoDiv.classList.add("todo");
    //create LI
    const newTodo = document.createElement("li");
    newTodo.innerHTML = todoInput.value;  
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //Save to Local Storage
    saveLocalTodo(todoInput.value);
   
    //Mark Button
    const completeButton = document.createElement("button");
    completeButton.innerHTML = '<i class="fas fa-check"></i>';
    completeButton.classList.add("complete-btn");
    todoDiv.appendChild(completeButton);
    //Trash Button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="far fa-trash-alt"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //append to list
    todoList.appendChild(todoDiv);
     //delete previous input
     todoInput.value = "";

    //Trash Button Click
    
    // trashButton.addEventListener('click',function(){
    //     e.stopPropagation();
    //     todoDiv.remove();
    // });//this is for new added items

 }
 function deleteItem(event){
    const item = event.target;
    // console.log(item.classList[0]);
    //Delete ToDo
    if(item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        //Animation
        todo.classList.add("fall");
        removeLocalTodos(todo);
        todo.addEventListener("transitionend", function(){
            todo.remove();
        });

    }
    
    //Mark ToDo
    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
    
 }
 function filterTodo(e){
    //  console.log(todoList.children);
     const todos = Array.from(todoList.children);

    // console.log('todos :: ', todos);

    todos.forEach(function(todo){
        const newList = Array.from(todo.classList);
        // console.log('todo.classList :: ', todo.classList)

        switch(e.target.value){
            case "all":
            todo.style.display = "flex";
            break;

            case "completed":
            if(newList.includes('completed')){
                todo.style.display = "flex";                
            }
            else{
                // console.log(todo);
                todo.style.display = "none";
            } 
            break;  
            case "uncompleted":
                if(!todo.classList.contains('completed')){
                    todo.style.display = "flex";
                    
                }
                else{
                    console.log(todo);
                    todo.style.display = "none";

                }
                break;  

        }
    });
 }
function saveLocalTodo(todo){
//CHECK IF ALREADY ADDED
// console.log(todo);
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    // localStorage.setItem("todos", JSON.stringify(todo));

    localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos(){
    
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach(function(todo){
        //create a div
        const todoDiv = document.createElement("div");
        //add class to div
        todoDiv.classList.add("todo");
        //create LI
        const newTodo = document.createElement("li");
        newTodo.innerHTML = todo;  
        newTodo.classList.add("todo-item");
        todoDiv.appendChild(newTodo);
       
        //Mark Button
        const completeButton = document.createElement("button");
        completeButton.innerHTML = '<i class="fas fa-check"></i>';
        completeButton.classList.add("complete-btn");
        todoDiv.appendChild(completeButton);
        //Trash Button
        const trashButton = document.createElement("button");
        trashButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
        trashButton.classList.add("trash-btn");
        todoDiv.appendChild(trashButton);
        //append to list
        todoList.appendChild(todoDiv);
    });

}
function removeLocalTodos(todo){
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    const deleteIt = todos.indexOf(todo.innerText);
    todos.splice(deleteIt,1);
    localStorage.setItem("todos", JSON.stringify(todos));
}