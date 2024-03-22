const todo = document.getElementById('input');
const add = document.getElementById('submit');
const list = document.querySelector('.todo-list');

let todos = JSON.parse(localStorage.getItem("todos")) || [];
console.log(todos);

function todoList() {
    list.innerHTML = ``;
    todos.forEach((todo, index) => {
        list.innerHTML += `
            <li class="todo-item">
                <span>${todo.task}</span>
                <button class="delete-btn" data-index="${index}">x</button>
            </li>
        `;
    });
}

add.addEventListener('click', () => {
    let data = todo.value;
    try {
        if (!data) {
            alert("Please type something in input field first.");
        } else {
            todos.push({ task: data, completed: false });
            localStorage.setItem('todos', JSON.stringify(todos));
            todoList();
        }
    } catch (error) {
        console.log(error);
    }
});

// Event delegation to handle delete button clicks
list.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-btn')) {
        // If the clicked element is a delete button
        let index = event.target.dataset.index;
        todos.splice(index, 1); // Remove the todo from the array
        localStorage.setItem('todos', JSON.stringify(todos)); // Update local storage
        todoList(); // Update the todo list on the page
    }
});

// Initial rendering of todos when the page loads
todoList();
