// Обработка формы и отправка на сервер
const formProcessor = () => {
  const url = "http://food/server.php";
  const forms = document.querySelectorAll('.form');
  forms.forEach((form => form.addEventListener('submit', (e) => {
    e.preventDefault();
    // check phone type
    const phone = form.querySelector('user_phone').value;
    if (phone.match(/^\d+$/)) {
      const data = new FormData(form);
      fetch(url, {
        method: 'POST',
        body: data
      })
        .then(response => {
          console.log('Form data sent',response);
          form.reset();
        })
        .catch(e => console.log('Error'))
    } // phone match
    else {
      console.log('bad data');
    }

  })))
}

export default formProcessor;