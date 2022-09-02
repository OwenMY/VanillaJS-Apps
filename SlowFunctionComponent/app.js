const count = document.querySelector('.count');
const incrementBtn = document.querySelector('.increment');
const decrementBtn = document.querySelector('.decrement');

incrementBtn.addEventListener('click', () => {
  count.textContent = memoSlowFunction(count.textContent);
});

decrementBtn.addEventListener('click', () => {
  count.textContent--;
});

const slowFunction = (number) => {
  for (let i = 0; i < 1000000000; i++) {}
  number++;
  return number;
};

const memo = (func) => {
  const cache = new Map();

  return (number) => {
    const key = number;
    if (cache.has(key)) return cache.get(key);

    const result = func(number);
    cache.set(key, result);

    return result;
  };
};

const memoSlowFunction = memo(slowFunction);
