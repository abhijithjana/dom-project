const buttons = document.querySelectorAll('.button');
let color = 'white';
buttons.forEach((b) => {
  b.addEventListener('click', (event) => {
    color = event.target.id;
    body.style.backgroundColor = event.target.id;
  });
  b.addEventListener('mouseover', (event) => {
    body.style.backgroundColor = event.target.id;
  });
  b.addEventListener('mouseout', (event) => {
    body.style.backgroundColor = color;
  });
});
