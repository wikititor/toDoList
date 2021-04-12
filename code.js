const form = document.querySelector('form');
const numberOfTasks = document.querySelector('h1 span');
const ul = document.querySelector('ul');
const listElements = document.getElementsByClassName('task');
const input = document.querySelector('input');
const searchInput = document.getElementById('search');
const toDoList = [];

const removeTask = (e) => {
    const index = e.target.parentNode.dataset.key;
    toDoList.splice(index, 1);
    ul.textContent = "";
    toDoList.forEach((toDoElement, key) => {
        toDoElement.dataset.key = key;
        ul.appendChild(toDoElement);
    })
    numberOfTasks.textContent = listElements.length;

}

const addElement = (e) => {
    e.preventDefault();
    if(input.value == 0) return;
    const task = document.createElement('li');
    task.innerHTML = input.value + "</li><button> Delete </button>"
    task.className = "task";
    toDoList.push(task);
    ul.textContent = "";
    toDoList.forEach((toDoElement, key) => {
        toDoElement.dataset.key = key;
        ul.appendChild(toDoElement);
    })
    input.value = '';
    numberOfTasks.textContent = listElements.length;

    task.querySelector('button').addEventListener('click', removeTask)
}

const searchTask = (e) => {
    const searchText = e.target.value.toLowerCase();
    ul.textContent = "";
        for(let task = 0; task < toDoList.length; task++){
        if(toDoList[task].textContent.replace("Delete", "").toLowerCase().includes(searchText)){
            ul.appendChild(toDoList[task])
        }
    }
}

form.addEventListener('submit', addElement);
searchInput.addEventListener('input', searchTask)
