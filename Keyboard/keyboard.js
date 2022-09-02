const ctr = document.getElementById('container');
const keyboard = document.createElement('div');

keyboard.classList.add('keyboard');
let keyboardState = 'lowercase';
let input = document.getElementById('input-name');

const keyBoardChars = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '$', 'del'],
  ['123', '.', 'space', '!?', 'enter']
];

const keyBoardShiftChars = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '$', 'del'],
  ['123', '.', 'space', '!?', 'enter']
];

const keyBoard123Chars = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
  ['_', '/', ':', ';', '(', ')', '$', '&', '@', '"'],
  ['+', '-', '%', ',', '?', '!', '\'', 'del'],
  ['abc', '.', 'space', '*', 'enter']
];

const appendKeyRows = (board) => {
  board.forEach((row, i) => {
    const keyBoardRow = document.createElement('div');

    keyBoardRow.setAttribute('name', `row-${i + 1}`);
    keyBoardRow.classList.add('keyboard-row');

    appendKeys(keyBoardRow, row);

    keyboard.appendChild(keyBoardRow);
  });
};

const appendKeys = (keyBoardRow, keys) => {
  keys.forEach(key => {
    const button = createButton(key);
    keyBoardRow.appendChild(button);
  });

  return keyBoardRow;
};

const createButton = (char) => {
  const button = document.createElement('button');

  button.classList.add('btn');
  button.textContent = char;
  button.setAttribute('name', char);

  if (char.length > 1) button.classList.add(char);

  return button;
};

const handleShift = () => {
  removeCurrentKeys();
  keyboardState = keyboardState === 'lowercase' ? 'uppercase' : 'lowercase';
  const newBoardChars = keyboardState === 'lowercase' ? keyBoardChars : keyBoardShiftChars;
  appendKeyRows(newBoardChars);
};

const handle123Nums = () => {
  removeCurrentKeys();
  appendKeyRows(keyBoard123Chars);
};

const handleAbcChars = () => {
  removeCurrentKeys();
  keyboardState = 'lowercase';
  appendKeyRows(keyBoardChars);
}

const removeCurrentKeys = () => {
  while (keyboard.children.length) {
    keyboard.children[0].remove();
  }
};

keyboard.addEventListener('click', (e) => {
  if (e.target.id === 'keyboard') return;
  e.stopPropagation();

  switch(e.target.name) {
    case 'shift':
      handleShift();
      break;
    case '123':
      handle123Nums();
      break;
    case 'abc':
      handleAbcChars();
      break;
    case 'space':
      input.value+= ' ';
    case '!?':
      break;
    case 'del':
      input.value = input.value.slice(0, -1);
    case undefined:
      break;
    case 'enter':
      input.value = '';
      keyboard.remove();
      break;
    default:
      input.value+= e.target.name
  }
});

input.addEventListener('focus', (e) => {
  ctr.appendChild(keyboard);
});

appendKeyRows(keyBoardChars);

