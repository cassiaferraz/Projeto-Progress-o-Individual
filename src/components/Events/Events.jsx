

//Seleção de elementos

export default function Events () {
    
    const todoForm = document.querySelector("#todo-form")
    const todoInput = document.querySelector("#todo-input")
    const todoList = document.querySelector("#todo-list")
    const editForm = document.querySelector("#edit-form")
    const editInput = document.querySelector("#edit-input")
    const cancelEditBtn = document.querySelector("#cancel-edit-btn")
}
//Funcções
    const saveTodo = (text) => {
    const todo = document.createElement("div")
    todo.classList.add("todo")

    const todoTitle = document.createElement("h3")
    todoTitle.innerText = text
    todo.appendChild(todoTitle)

    const doneBtn = document.createElement("button")
    doneBtn.classList.add("finish-todo")
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
    todo.appendChild(doneBtn)

    const editBtn = document.createElement("button")
    editBtn.classList.add("edit-todo")
    editBtn.innerHTML = '<i class="fa-solid fa-pencil"></i>'
    todo.appendChild(editBtn)


    todoList.appendChild(todo)


}
//Eventos

todoForm.addEventListener ("submit", (e) => {
    e.preventDefault()

    const inputValue = todoInput.value

    if (inputValue) {
        saveTodo(inputValue)

    }
})
    