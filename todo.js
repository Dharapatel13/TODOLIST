 //selector
 const todoInput=document.querySelector(".inpt");
 const addBtn=document.querySelector(".btn");
 const  todoList=document.querySelector(".todo-list")
 function addItem() {
  var x = document.getElementById("myText").value;
  var todo = document.createElement("LI");
  var dtlbtn=document.createElement("button");

var textnode = document.createTextNode(x);
todo.appendChild(textnode);
document.getElementById("myList").appendChild(todo);
}
//delete item form to do list
function deleteTodos(e) {
if (e.target.classList.contains('delete')) {
e.target.parentElement.remove();
}
}

todoList.addEventListener('click', deleteTodos);