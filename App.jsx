// JavaScript logic for adding and completing todos
const addTodoButton = document.querySelector('.add-todo button');
const todoList = document.querySelector('.todo-list');

addTodoButton.addEventListener('click', function() {
  const input = document.querySelector('.add-todo input[type="text"]');

  if (input.value !== '') {
    const newItem = document.createElement('li');
    const checkbox = document.createElement('input');
    const textField = document.createElement('input');

    checkbox.type = 'checkbox';
    textField.type = 'text';
    textField.value = input.value;

    newItem.classList.add('todo-item');
    newItem.appendChild(checkbox);
    newItem.appendChild(textField);

    todoList.appendChild(newItem);

    input.value = '';
  }
});
