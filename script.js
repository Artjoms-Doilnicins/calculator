const allCalculationButtonEls = document.querySelectorAll('.calc-button');
const resultWindowEl = document.querySelector('.current-operand');
const equalsBtnEl = document.querySelector('.equals');
const acBtnEl = document.querySelector('.ac-btn');
let calculation = '';
let result = '0';

const updateResultWindow = () => {
	resultWindowEl.textContent = calculation;
};

allCalculationButtonEls.forEach((btn) => {
	const calculateNumbers = () => {
		switch (btn.textContent) {
			case 'AC':
				calculation = '';
				resultWindowEl.textContent = '0';
				break;
			case 'DEL':
				calculation = calculation.slice(0, -1);
				updateResultWindow();
				break;
			case '%':
				if (calculation) {
					calculation = (parseFloat(calculation) / 100).toString();
					updateResultWindow();
				}
				break;
			case '=':
				calculation = eval(calculation);
				updateResultWindow();
				break;
			default:
				calculation = calculation + btn.textContent;
				updateResultWindow();
				break;
		}
	};
	btn.addEventListener('click', calculateNumbers);
});
