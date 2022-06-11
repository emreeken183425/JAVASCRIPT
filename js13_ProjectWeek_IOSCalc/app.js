//* =================================================
//*                     IOS CALCULATOR
//* =================================================
const prevDisp = document.querySelector('.previous-display');
const currDisp = document.querySelector('.current-display');

const btnContainer = document.querySelector('.buttons-container');

let currOperand = '';
let previousOperand = '';
let operation = '';

//? Butonlari tasiyan container icin event tanimlamasi
btnContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('num')) {
    appendNumber(e.target.textContent);
    updateDisplay();
  }

  if (e.target.classList.contains('operator')) {
    chooseOperator(e.target.textContent);
    updateDisplay();
  }
});

const appendNumber = (num) => {
  //? Eger ilk olarak  0 girilmisse geri don
  if (!currOperand && num === '0') return;

  //? Eğer şu anki sayi . ise ve önceki girilen sayi . iceriyorsa geri don
  if (num === '.' && currOperand.includes('.')) return;

  if (currOperand.length > 10) return;
  //? Girilen sayilari birlestir.
  currOperand += num;
};

const updateDisplay = () => {
  currDisp.textContent = currOperand;
  prevDisp.textContent = `${previousOperand} ${operation}`;
};

const chooseOperator = (op) => {
  //? ilk sayi girisiinden sonraki islemleri gercekletir
  if (previousOperand) {
    calculate();
  }

  //? Degisken swapiing
  operation = op;
  previousOperand = currOperand;
  currOperand = '';
};

const calculate = () => {
  let calculation = 0;

  const prev = Number(previousOperand);
  const current = Number(currOperand);

  console.log(prev, current);

  switch (operation) {
    case '+':
      calculation = prev + current;
      break;
    case '-':
      calculation = prev - current;
      break;
    case 'x':
      calculation = prev * current;
      break;
    case '÷':
      calculation = prev / current;
      break;
    default:
      break;
  }

  currOperand = calculation;
};
