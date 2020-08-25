const modals = () => {
  // bindModal() отвечает за привязку окна к триггеру
  function bindModal(triggerSelector, modalSelector, closeSelector = null) {
    const openButtons = document.querySelectorAll(triggerSelector), // кнопок открытия может несколько, а внутри всего 2 случая
      modalWindow = document.querySelector(modalSelector),
      closeBtn = document.querySelector(closeSelector);

    const closeWindow = (el) => {
      el.style.display = 'none';
      document.body.style.overflow = '';
    }
    // клик на элемент открытия окна
    openButtons.forEach((openBtn) => {
      openBtn.addEventListener('click', (e) => {
        if (e.target) {
          e.preventDefault(); // чтобы ссылка не сработала
          modalWindow.style.display = 'block';
          // чтобы скроллить только модальное окно, а не всю страницу
          document.body.style.overflow = 'hidden';
          //document.body.classList.add('modal-open');
        }
      });
    });
    // клик на элемент закрытия окна 
    closeBtn.addEventListener('click', () => {
      closeWindow(modalWindow);
    });

    // клик на подложку
    modalWindow.addEventListener('click', (e) => {
      if (e.target === modalWindow) {
        closeWindow(modalWindow);
      }
    })
  }

  // показать окно через 60 сек.
  const showModalAfterTimeout = (selector, timeout) => {
    setTimeout(()=> {
      document.querySelector(selector).style.display='block';
      document.querySelector(selector).overflow='hidden';
    },timeout);
  }

  bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
  bindModal('.phone_link', '.popup', '.popup .popup_close');
  //showModalAfterTimeout('.popup',60000);
}

export default modals;