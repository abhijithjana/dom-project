form.addEventListener('submit', (event) => {
  results.innerHTML = '';
  event.preventDefault();
  h = height.value;
  w = weight.value;
  if (h === '' || h < 0 || isNaN(h))
    results.innerHTML = `please give a valid height ${h}`;
  else if (w === '' || w < 0 || isNaN(w))
    results.innerHTML = `please give a valid height ${w}`;
  else {
    bmi = 0;
    bmi = (w / ((h * h) / 10000)).toFixed(2);
    s = (bmi) => {
      span = document.createElement('span');

      let messege;
      if (bmi < 18.6) {
        span.style.color = 'blue';
        messege = document.createTextNode('Under Weight');
      } else if (bmi >= 18.6 && bmi <= 24.9) {
        span.style.color = 'green';
        messege = document.createTextNode('Normal Range');
      } else {
        messege = document.createTextNode('Overweight');
        span.style.color = 'red';
      }
      span.appendChild(messege);
      console.log(span);
      return span;
    };

    results.appendChild(document.createTextNode(`your bmi is ${bmi}`));
    results.appendChild(document.createElement('br'));
    results.appendChild(s(bmi));
  }
});
