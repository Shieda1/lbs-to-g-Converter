// https://www.omnicalculator.com/conversion/lbs-to-g

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const gRadio = document.getElementById('gRadio');
const lbsRadio = document.getElementById('lbsRadio');

let g;
let lbs = v; 

// labels of the inpust
const variable = document.getElementById('variable');

gRadio.addEventListener('click', function() {
  variable.textContent = 'lbs';
  lbs = v;
  result.textContent = '';
});

lbsRadio.addEventListener('click', function() {
  variable.textContent = 'g';
  g = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(gRadio.checked)
    result.textContent = `g = ${computeg().toFixed(5)}`;

  else if(lbsRadio.checked)
    result.textContent = `lbs = ${computelbs().toFixed(5)}`;
})

// calculation

function computeg() {
  return Number(lbs.value) * 453.6;
}

function computelbs() {
  return Number(g.value) / 453.6;
}