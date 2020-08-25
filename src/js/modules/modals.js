const modals = () => {
  // bindModal() отвечает за привязку окна к триггеру
  function bindModal(triggerSelector, modalSelector, closeSelector=null) {
    const openButtons = document.querySelectorAll(triggerSelector),
      modalWindow = document.querySelector(modalSelector),
      closeButtons = document.querySelectorAll(closeSelector);
    
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
    closeButtons && closeButtons.forEach(closeBtn => {
      // клик на элемент закрытия окна 
      closeBtn.addEventListener('click', () => {
        closeWindow(modalWindow);
//        modalWindow.style.display = 'none';
//        document.body.style.overflow = '';
        //document.body.classList.remove('modal-open');
      });
    });

    // клик на подложку
    modalWindow.addEventListener('click', (e) => {
      if (e.target === modalWindow) {
        //modalWindow.style.display = 'none';
        //document.body.style.overflow = '';
        closeWindow(modalWindow);
        //document.body.classList.remove('modal-open');
      }
    })

  }

  // test
  // const openBtn = document.querySelector('.popup_engineer_btn'),
  //   modalWindow = document.querySelector('.popup_engineer'),
  //   closeBtn = document.querySelector('.popup_engineer .popup_close');
  // bindModal(openBtn, modalWindow, closeBtn);

  bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
  bindModal('.phone_link','.popup','.popup_dialog .popup_close');
//  bindModal('.contact_us','.popup','.popup_dialog .popup_close');
}

export default modals;