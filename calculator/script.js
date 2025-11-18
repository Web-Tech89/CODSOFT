const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let current = '';

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const value = btn.textContent;
    if (value === 'C') current = '';
    else if (value === '←') current = current.slice(0, -1);
    else if (value === '=') {
      try { current = eval(current).toString(); }
      catch { current = 'Error'; }
    } else current += value;
    display.value = current;
  });
});
