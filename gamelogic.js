let resultField = document.getElementById('result');
let longPressTimeout;

function append(value) {
  resultField.value += value;
  highlightButton(value);
}

function calculate() {
  try {
    resultField.value = eval(resultField.value.replace(/×/g, '*').replace(/÷/g, '/'));
  } catch {
    resultField.value = "Error";
  }
}

function clearAll() {
  resultField.value = '';
}

function backspace() {
  resultField.value = resultField.value.slice(0, -1);
}

function startClear() {
  longPressTimeout = setTimeout(() => {
    clearAll();
  }, 1000); // Long press duration: 1 second
}

function stopClear() {
  clearTimeout(longPressTimeout);
}

function highlightButton(value) {
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach((btn) => btn.classList.remove('active'));
  buttons.forEach((btn) => {
    if (btn.textContent === value || btn.textContent === value.replace('*', '×').replace('/', '÷')) {
      btn.classList.add('active');
      setTimeout(() => btn.classList.remove('active'), 200); // Remove after 200ms
    }
  });
}
