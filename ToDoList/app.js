const input = document.getElementById('todo-input');
const button = document.getElementById('add-button');
const list = document.getElementById('todo-list');

const handleInput = () => {
  if (input.value.length) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
}

const addNewListItem = (e) => {
  const listItem = document.createElement('li');
  const listDescription = document.createElement('h2');
  const deleteButton = document.createElement('button');

  listDescription.textContent = input.value;
  deleteButton.textContent = 'X';
  deleteButton.classList.add('delete-button');
  input.value = '';
  button.disabled = true;

  listItem.append(listDescription, deleteButton);
  list.appendChild(listItem);
};

const deleteListItem = (e) => {
  if (e.target.tagName === 'BUTTON') {
    e.target.parentElement.remove();
  }
};

input.addEventListener('input', handleInput);
button.addEventListener('click', addNewListItem);
list.addEventListener('click', deleteListItem);