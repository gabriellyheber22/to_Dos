var listElements = document.getElementById('lista');
let inputElements = document.getElementById('inputTarefa');
let btnElements = document.querySelector('#App button');
var toDos = JSON.parse(localStorage.getItem('list_todo')) || []; //Inicialização padrão, converte os itens armazenados na localStorage para array ou se o local Storage estiver vazio, ele apresenta o array vazio
let contadorId = 0;

function renderTodos(){
  
    listElements.innerText ='';
    for(let toDo of toDos){ //Visualizando os itens do array "toDo é o valor do array" e "toDos é o array"
        let posicaoArray = toDos.indexOf(toDo);
        let toDoText = document.createTextNode(toDo);
        
        let elements = document.createElement('div');
        elements.setAttribute('class', 'listaItem')
       
        

        let toDoElement = document.createElement('input');//Cria Input 
        toDoElement.setAttribute('type', 'checkbox'); //Atribui type:CheckBox
        toDoElement.setAttribute('id', 'check'+posicaoArray );//Atribui Id ao input
        toDoElement.setAttribute('name', 'check'+posicaoArray);
        
        
        let toDoLabel = document.createElement('label'); //Cria a Label
        toDoLabel.setAttribute('for', 'check'+posicaoArray) //Informa o ID do Rotulo
        toDoLabel.appendChild(toDoText);

       
        let quebraLinha= document.createElement('br')
        
        elements.appendChild(toDoElement);
        elements.appendChild(toDoLabel);
        elements.appendChild(quebraLinha);
        listElements.appendChild(elements);
        
      
        
       
        //Retorna o valor do indice (posição) onde o elemento referenciado esta localizado no array
       // toDoElement.addEventListener('click', function () {
          //  deleteTodo(posicaoArray); // Chama a função deleteTodo com a posição do item no array
        //});
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