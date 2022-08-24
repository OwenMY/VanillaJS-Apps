const ctr = document.getElementById('dog-container');
let fetching = false;

const fetchData = () => {
  if (fetching) return;
  fetching = true;

  fetch(`https://dog.ceo/api/breeds/image/random/10`)
    .then(res => res.json())
    .then(data => addDogPics(data.message))
    .catch(err => console.error(err))
    .finally(() => { fetching = false });
};

window.addEventListener('scroll', (e) => {
  if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
    fetchData();
  }
});

const addDogPics = (pics) => {
  for (let pic of pics) {
    let img = document.createElement('img');
    img.src = pic;

    ctr.append(img);
  }
};

fetchData();