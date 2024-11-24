var listElements = document.querySelector('#App ul');
let inputElements = document.querySelector('#App input');
let btnElements = document.querySelector('#App button');
let toDos = ['Fazer café', 'Estudar JavaScript', 'Acessar comunidade da Rocketset']

function renderTodos(){
    listElements.innerText ='';
    for(let todo of toDos){
        let toDoElement = document.createElement('li');
        let toDoText = document.createTextNode(todo);
        toDoElement.appendChild(toDoText);
        listElements.appendChild(toDoElement);

    }
}
renderTodos();

function AdicionaToDos(){
    let toDoText = inputElements.value;
    toDos.push(toDoText);
    inputElements.value ='';
    renderTodos();
}

btnElements.onclick = AdicionaToDos;