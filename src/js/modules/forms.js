// Обработка формы и отправка на сервер
const forms = () => {
  const allForms = document.querySelectorAll('form');
  const allInputs = document.querySelectorAll('input');
  const phones = document.querySelectorAll('input[name="user_phone"]');
  const message = {
    loading: 'Загрузка...',
    success: 'Спасибо! С вами скоро свяжутся',
    error: 'Извините, произошла какая-то ошибка'
  };
  // проверяем, что телефоны - цифры
  phones.forEach(item => {
    item.addEventListener('input',() => {
      item.value = item.value.replace(/\D/g,"");
    });
  });

  allForms.forEach((form => form.addEventListener('submit', (e) => {
    e.preventDefault();
    // check phone type
    let statusMessage = document.createElement("div");
    statusMessage.classList.add("status");
    form.appendChild(statusMessage);

    // функция отправки POST на сервер
    const postData = async (url, data) => {
      document.querySelector('.status').textContent = message.loading;

      let res = await fetch(url, {
        method: 'POST',
        body: data
      });
      return await res.text();
    }; // postData


    const data = new FormData(form);
    postData("http://food/server.php", data)
      //postData('assets/server.php',data)
      .then(res => {
        console.log(res);
        statusMessage.textContent = message.success;
      })
      .catch(() => {
        statusMessage.textContent = message.error;
      })
      .finally(() => {
        form.reset();
        setTimeout(() => { statusMessage.remove(); }, 5000);
      });


  })));
};

export default forms;