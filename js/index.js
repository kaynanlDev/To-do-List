//formulário para adicionar
const formAdd = document.querySelector('#add-todo')
const addInput = document.querySelector('#add-input')
const addBtn = document.querySelector('#add-btn')

//lista do to do
const todo = document.querySelector('#list-todo')
const itemTodo = document.querySelector('.list-item')

console.log(formAdd, addBtn, addInput, todo, itemTodo)


//funções
const addItem = (text) =>{
    let divList = document.createElement('div')
    divList.classList.add('list-item')

    let listTitle = document.createElement('h3')
    listTitle.innerText = text
    divList.appendChild(listTitle)

    let btnCheck = document.createElement('button')
    btnCheck.innerHTML = '<img src="img/check.svg" alt="check">'
    divList.appendChild(btnCheck)

    let btnEdit = document.createElement('button')
    btnEdit.innerHTML = '<img src="img/edit.svg" alt="edit">'
    divList.appendChild(btnEdit)

    let btnDelete = document.createElement('button')
    btnDelete.innerHTML = '<img src="img/delete.svg" alt="delete">'
    divList.appendChild(btnDelete)

    todo.appendChild(divList)

    addInput.value = ''
    addInput.focus()
}

//eventos
formAdd.addEventListener('submit', (e) =>{
    e. preventDefault()
    let addValue = addInput.value


    addItem(addValue)
})