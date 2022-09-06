const ctr = document.getElementById('container');
const btn = document.createElement('button');
const btnText = '<i class="fa-solid fa-heart"></i> Like'
let liked = false;

btn.classList.add('btn', 'like-btn');
btn.innerHTML = btnText;

btn.addEventListener('click', function(e) {
  changeLikedState(this);
});

const changeLikedState = (button) => {
  button.innerHTML = '<img src="https://www.freeiconspng.com/uploads/load-icon-png-27.png" width="12" alt="Load Symbols" /> Like';

  if (!liked) {
    button.classList.replace('like-btn', 'like-btn-loading');
    setTimeout(() => {
      button.classList.replace('like-btn-loading', 'like-btn-liked');
      liked = !liked;
      button.innerHTML = btnText;
    }, 500);
  } else {
    button.classList.replace('like-btn-liked', 'like-btn-loading');
    setTimeout(() => {
      button.classList.replace('like-btn-loading', 'like-btn');
      liked = !liked;
      button.innerHTML = btnText;
    }, 500);
  }
};

ctr.appendChild(btn);
