var toDoForm = document.querySelector(".js-toDoForm");
var toDoInput =  toDoForm.querySelector("input");
var toDoList = document.querySelector(".js-toDoList");

var TODOS_LS = 'toDos';

let toDos = [];

function deleteToDo(event){
    var btn = event.target;
    var li = btn.parentNode;
    toDoList.removeChild(li);
    var cleanToDos = toDos.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}




function paintToDo(text) {
    var li = document.createElement("li");
    var delBtn = document.createElement("button");
    var span = document.createElement("span");
    var newId = toDos.length + 1;
    delBtn.innerText = "지우기"
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    var toDoobj = {
        text: text,
        id: newId
    };
    toDos.push(toDoobj);
    saveToDos();
}

function handleSubmit(event) {
    event.preventDefault();
    var currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}


   

function loadToDos() {
    var loadedtoDos = localStorage.getItem(TODOS_LS);
    if(loadedtoDos !== null) {
       var parsedToDos = JSON.parse(loadedtoDos);
       parsedToDos.forEach(function(toDo){
           paintToDo(toDo.text);
       });
    } 

 
}

function init () {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)
}

init();