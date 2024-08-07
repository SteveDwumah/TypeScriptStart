//!----- DOM 2 - Aufgabe 5 --------!

document.getElementById('addButton')?.addEventListener('click', addTodo);

function addTodo() {
    const todoInput = document.getElementById('todoInput') as HTMLInputElement;
    const todoText = todoInput.value.trim();

    if (todoText === "") {
        alert("Bitte ein item eingeben.");
        return;
    }

    const todoList = document.getElementById('todoList') as HTMLUListElement;
    const li = document.createElement('li') as HTMLLIElement;

    const checkbox = document.createElement('input') as HTMLInputElement;
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => {
        if (checkbox) {
            li.style.textDecoration = 'line-through'
            li.style.color = 'gray'
        } else {
            li.style.textDecoration = 'none'
            li.style.color = ''
        }
    });

    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(todoText));

    const deleteButton = document.createElement('button') as HTMLButtonElement;
    deleteButton.textContent = '❌';
    deleteButton.addEventListener('click', function() {
        if (checkbox.checked) {
            todoList.removeChild(li);
        } else {
            alert("Ein Todo kann nur gelöscht werden, wenn es als gecheckt markiert ist.");
        }
    });

    li.appendChild(deleteButton);
    todoList.appendChild(li);
    todoInput.value = "";
}