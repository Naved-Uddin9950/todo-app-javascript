const todo = document.getElementById('input');
const add = document.getElementById('submit');
const list = document.querySelector('.todo-list');
const del = document.querySelector('.delete-btn');

add.addEventListener('click', () => {
    let data = todo.value;
    try {
        if(!data){
            alert("Please type something in input field first.");
        } else {
            localStorage.setItem(data, data);
            let getData = localStorage.getItem(data);
            list.innerHTML += `
                <li class="todo-item">
                    <span>${getData}</span>
                    <button class="delete-btn">x</button>
                </li>
            `
        }
    } catch (error) {
        console.log(error);
    }
});


del.addEventListener('click', (event) => {
    let listItem = event.target.parentNode;
    deleteItem(listItem);
});

function deleteItem(listItem) {
    let data = listItem.querySelector('span').innerHTML;
    if(data != localStorage.getItem(data)) {
        console.log("Data mismatch. Item can't be deleted.");
    } else {
        console.log("Ok Darling");
    }
}