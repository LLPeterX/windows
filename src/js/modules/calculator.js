const calculator = () => {
  const calcWindow = document.querySelector('.popup_calc');
  const calcButtons = document.querySelectorAll('.popup_calc_btn');
  const closeButton = document.querySelector('.popup_calc_close');

  // слушатели на все возможные кнопки открытия окна
  calcButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      calcWindow.style.display = 'block';
    });
  });
  // слушатели на то, что может закрыть окно
  closeButton.addEventListener('click', () => {
    calcWindow.style.display = 'none';
  });
  calcWindow.addEventListener('click', (e) => {
    if (e.target === calcWindow) {
      calcWindow.style.display = 'none';
    }
  });
};

export default calculator;