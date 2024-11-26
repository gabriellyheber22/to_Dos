var listElements = document.querySelector('#App ul');
let inputElements = document.querySelector('#App input');
let btnElements = document.querySelector('#App button');
let toDos = JSON.parse (localStorage.getItem('list_todo')) || [];

function renderTodos(){
    listElements.innerText ='';
    for(let toDo of toDos){
        let toDoElement = document.createElement('li');
        let toDoText = document.createTextNode(toDo);
        let linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');
        let linkText = document.createTextNode('Excluir');
        toDoElement.appendChild(toDoText);
        listElements.appendChild(toDoElement);
        toDoElement.appendChild(linkElement);
        linkElement.appendChild(linkText);

        let posicaoArray = toDos.indexOf(toDo);
        linkElement.setAttribute('onclick', 'deleteTodo('+posicaoArray +')');
    }
}
renderTodos();

function AdicionaToDos(){
    let toDoText = inputElements.value;
    toDos.push(toDoText);
    inputElements.value ='';
    renderTodos();
    saveStorage();
}

btnElements.onclick = AdicionaToDos;

function deleteTodo(pos){
    toDos.splice(pos,1);
    renderTodos();
    saveStorage();

}

function saveStorage(){
    localStorage.setItem('list_todo',JSON.stringify(toDos));
}