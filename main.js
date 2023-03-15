'use strict';

const count = document.getElementById('count');
const dec = document.querySelector('.dec');
const res = document.querySelector('.res');
const inc = document.querySelector('.inc');

let value = 0;
function changeColor(value) {
  var color = '';
  if (value < 0) {
    color = 'red';
  } else if (value > 0) {
    color = 'green';
  } else {
    color = 'black';
  }
  return color;
}

dec.addEventListener('click', function () {
  value--;
  count.innerHTML = value;
  count.style.color = changeColor(value);
});

res.addEventListener('click', function () {
  value = 0;
  count.innerHTML = value;
  count.style.color = changeColor(value);
});

inc.addEventListener('click', function () {
  value++;
  count.innerHTML = value;
  count.style.color = changeColor(value);
});
