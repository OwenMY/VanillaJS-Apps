const ctr = document.querySelector('.container');

ctr.addEventListener('click', (e) => {
  incrementCount(e);
  addNewButton();
});

const addNewButton = () => {
  let newBtn = document.createElement('button');
  newBtn.setAttribute('id', 'btn');
  newBtn.textContent = 'I\'ve been clicked 0 times';
  ctr.appendChild(newBtn);
};

const incrementCount = (e) => {
  const numStart = 18;
  const numEnd = e.target.textContent.length - 6;
  let number = Number(e.target.textContent.slice(numStart, numEnd));
  number++;

  let textStart = e.target.textContent.slice(0, numStart);
  let textEnd = e.target.textContent.slice(numEnd);
  let newText = textStart + number + textEnd;

  e.target.textContent = newText;
};