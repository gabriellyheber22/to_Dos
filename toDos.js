var listElements = document.getElementById('lista');
let inputElements = document.getElementById('inputTarefa');
let btnElements = document.getElementById('btn');
let btnExcluir = document.getElementById('btn-Excluir');
var toDos = JSON.parse(localStorage.getItem('list_todo')) || []; //Inicialização padrão, converte os itens armazenados na localStorage para array ou se o local Storage estiver vazio, ele apresenta o array vazio
let contadorId = 0;

function renderTodos() {

    listElements.innerText = '';
    for (let toDo of toDos) { //Visualizando os itens do array "toDo é o valor do array" e "toDos é o array"
        let posicaoArray = toDos.indexOf(toDo);
        let toDoText = document.createTextNode(toDo);

        let elements = document.createElement('div');
        elements.setAttribute('class', 'listaItem')



        let toDoElement = document.createElement('input');//Cria Input 
        toDoElement.setAttribute('type', 'checkbox'); //Atribui type:CheckBox
        toDoElement.setAttribute('id', 'check' + posicaoArray);//Atribui Id ao input
        toDoElement.setAttribute('name', 'check' + posicaoArray);


        let toDoLabel = document.createElement('label'); //Cria a Label
        toDoLabel.setAttribute('for', 'check' + posicaoArray) //Informa o ID do Rotulo
        toDoLabel.appendChild(toDoText);


        let quebraLinha = document.createElement('br')

        elements.appendChild(toDoElement);
        elements.appendChild(toDoLabel);
        elements.appendChild(quebraLinha);
        listElements.appendChild(elements);

    }



}
renderTodos();
function validaForm(){
    
}
function AdicionaToDos() {

    if(inputElements.value == ''){
        alert('O campo de Tarefa esta vazio');
        inputElements.style.borderColor ='red';
        inputElements.focus();
        return true;
    }else{
        let toDoText = inputElements.value;
        toDos.push(toDoText);
        inputElements.value = '';
        renderTodos();
        saveStorage(); 
    }
    
    
}

btnElements.onclick = AdicionaToDos;

document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        AdicionaToDos();
    }
  });
function deleteTodo(pos) {
    toDos.splice(pos, 1);
    renderTodos();
    saveStorage();

}

btnExcluir.addEventListener('click', function () {
    // Cria um novo array apenas com os itens não selecionados (não marcados)
    toDos = toDos.filter((toDo, index) => {
        let checkbox = document.getElementById('check' + index); // Encontra o checkbox pelo id
        return !checkbox.checked; // Retorna true para os itens que NÃO estão marcados
    });

    // Re-renderiza a lista e salva no localStorage
    renderTodos();
    saveStorage();
});

function saveStorage() {
    localStorage.setItem('list_todo', JSON.stringify(toDos));
}