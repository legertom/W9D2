let todos = []
let ul = document.getElementsByClassName("todos")[0]    
let form = document.getElementsByClassName("add-todo-form")[0]

function addTodo() {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let value = form.children[0].value;
        form.children[0].value = '';
        let newTodo = {value: value, done : false};
        localStorage.setItem(value, JSON.stringify(newTodo));
        todos.push(newTodo)
        populateList();
    })

    if (todos.length === 0) {
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            todos.push(JSON.parse(localStorage.getItem(key)));
            populateList();
        }
    }
}

// <input type="checkbox" name="" id="" />
addTodo();
function populateList() {
    if (todos.length > 0) {
        let todo = todos[todos.length-1]
        let label = document.createElement('label');
        label.innerText = todo.value;
        let checkbox = document.createElement("INPUT");
        checkbox.setAttribute("type", "checkbox");
        let li = document.createElement('li');
        li.append(label);
        li.append(checkbox);
        ul.append(li);
    }
}

populateList();