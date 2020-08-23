const modals = () => {
  // bindModal() отвечает за привязку окна к триггеру
  function bindModal(trigger, modal, close) {
    // клик на элемент открытия окна
    trigger.addEventListener('click', (e) => {
      if (e.target) {
        e.preventDefault(); // чтобы ссылка не сработала
        modal.style.display='block';
        // чтобы скроллить только модальное окно, а не всю страницу
        document.body.style.overflow='hidden';
      }
    });

    // клик на элемент закрытия окна 
    close.addEventListener('click',()=> {
      modal.style.display='none';
      document.body.style.overflow='';
    });

  }

  // test
  const openBtn = document.querySelector('.popup_engineer_btn'),
        modalWindow =  document.querySelector('.popup_engineer'),
        closeBtn = document.querySelector('.popup_engineer .popup_close');
  bindModal(openBtn, modalWindow, closeBtn);
}

export default modals;