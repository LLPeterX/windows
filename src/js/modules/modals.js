const modals = (timer) => {
  // bindModal() отвечает за привязку окна к триггеру
  function bindModal(triggerSelector, modalSelector, closeSelector, closeOnOverlay = true) {
    const openButtons = document.querySelectorAll(triggerSelector),
      modalWindow = document.querySelector(modalSelector),
      closeBtn = document.querySelector(closeSelector),
      allWindows = document.querySelectorAll('[data-modal]');
    let scrollWidth = getScrollWidth();  

    openButtons.forEach((openBtn) => {
      openBtn.addEventListener('click', (e) => {
        if (e.target) {
          e.preventDefault(); // чтобы ссылка не сработала
        }
        // сначала скрываем все окна
        allWindows.forEach((window) => { window.style.display = 'none'; });
        // чтобы скроллить только модальное окно, а не всю страницу
        modalWindow.style.display = 'block';
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight=scrollWidth+'px';

      });
    });
    // клик на элемент закрытия окна 
    closeBtn.addEventListener('click', () => {
      allWindows.forEach(window => window.style.display = 'none');
      document.body.style.overflow = '';
      document.body.style.marginRight='0px';
    });

    // клик на подложку
    modalWindow.addEventListener('click', (e) => {
      if (e.target === modalWindow && closeOnOverlay) {
        allWindows.forEach(window => { window.style.display = 'none'; });
        document.body.style.overflow = '';
        document.body.style.marginRight='0px';
      }
    });
  }

  // показать окно через 60 сек.
  const showModalAfterTimeout = (selector, timeout) => {
    return setTimeout(() => {
      document.querySelector(selector).style.display = 'block';
      document.body.style.overflow = 'hidden';
    }, timeout);
  };

  bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
  bindModal('.phone_link', '.popup', '.popup .popup_close');
  // окна расчета стоимости
  bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
  bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
  bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);

  //timer.timerId = showModalAfterTimeout('.popup', 60000); // убрал, чтобы не мешало.
};

export const closeWindow = (selector) => {
  if (!selector) { return; }
  if (typeof selector === 'string') {
    document.querySelector(selector).style.display = 'none';
    document.querySelector(selector).overflow = '';
  } else {
    selector.style.display = 'none';
    document.body.style.overflow = '';
  }
  document.body.style.marginRight='0px';
};

// Вычисляем ширину вертикального скроллбара
// для этого создаем пустой скрытый квадратный div
function getScrollWidth() {
  let emptyDiv = document.createElement('div');
  emptyDiv.style.width = emptyDiv.style.height = "50px";
  emptyDiv.style.overflowY='scroll';
  emptyDiv.style.visibility='hidden';
  document.body.appendChild(emptyDiv);
  let scrollWidth = emptyDiv.offsetWidth - emptyDiv.clientWidth;
  emptyDiv.remove();
  //console.log('scrollW=',scrollWidth);
  return scrollWidth;
}

export default modals;

