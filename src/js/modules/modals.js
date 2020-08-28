const modals = (timer) => {
  // bindModal() отвечает за привязку окна к триггеру
  function bindModal(triggerSelector, modalSelector, closeSelector, closeOnOverlay = true) {
    const openButtons = document.querySelectorAll(triggerSelector),
      modalWindow = document.querySelector(modalSelector),
      closeBtn = document.querySelector(closeSelector),
      allWindows = document.querySelectorAll('[data-modal]');

    // const closeWindow = (el) => {
    //   el.style.display = 'none';
    //   document.body.style.overflow = '';
    // };
    // клик на элемент открытия окна
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

      });
    });
    // клик на элемент закрытия окна 
    closeBtn.addEventListener('click', () => {
      allWindows.forEach(window => window.style.display = 'none');
      document.body.style.overflow = '';
    });

    // клик на подложку
    modalWindow.addEventListener('click', (e) => {
      if (e.target === modalWindow && closeOnOverlay) {
        allWindows.forEach(window => { window.style.display = 'none'; });
        document.body.style.overflow = '';
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

  timer.timerId = showModalAfterTimeout('.popup', 60000);
  console.log('setting timer', timer);
};

export const closeWindow = (selector) => {
  if(!selector) { return; }
  if (typeof selector === 'string') {
    document.querySelector(selector).style.display = 'none';
    document.querySelector(selector).overflow = '';
  } else {
    selector.style.display = 'none';
    document.body.style.overflow = '';
  }
};

export default modals;

