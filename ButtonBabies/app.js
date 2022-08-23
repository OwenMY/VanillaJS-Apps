const ctr = document.querySelector('.container');

ctr.addEventListener('click', (e) => {
  incrementCount(e);
  addNewButton();
});

const addNewButton = () => {
  const newBtn = document.createElement('button');
  newBtn.setAttribute('id', 'btn');
  newBtn.textContent = 'I\'ve been clicked 0 times';
  ctr.appendChild(newBtn);
};

const incrementCount = (e) => {
  const numStart = 18;
  const numEnd = e.target.textContent.length - 6;
  let number = Number(e.target.textContent.slice(numStart, numEnd));
  number++;

  const textStart = e.target.textContent.slice(0, numStart);
  const textEnd = e.target.textContent.slice(numEnd);
  const newText = textStart + number + textEnd;

  e.target.textContent = newText;
};