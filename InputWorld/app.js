const inp = document.getElementById('name');

inp.addEventListener('input', (e) => {
  console.log(e.target.value)
  // console.log(e.target.textContent)
});