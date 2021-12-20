const btn = document.querySelector('button');
const vid = document.querySelector('video');

btn.addEventListener('click', ()=> {
  vid.style.display = 'block';
  vid.play();
})