// Обработка формы и отправка на сервер
import { checkInputAsNumber } from './checks';
import { closeWindow } from './modals';

// определить, находится ли форма el внутри одного из div, у которого есть атрибут "data-modal"
const getParentWindow = (el) => {
  const windows = document.querySelectorAll("[data-modal]");
  for (let w of windows) {
    if (w.contains(el)) {
      return w;
    }
  }
  return null;
};


const forms = (state, timer) => {
  const allForms = document.querySelectorAll('form');
  // сообщения, выводимые в процессе отправки двнных формы на сервер
  const message = {
    loading: 'Загрузка...',
    success: 'Спасибо! С вами скоро свяжутся',
    error: 'Извините, произошла какая-то ошибка',
    nodata: 'Не указаны размеры'
  };

  // проверяем, что заданные поля - числовые
  checkInputAsNumber('input[name="user_phone"]');

  allForms.forEach((form => form.addEventListener('submit', (e) => {
    e.preventDefault();
    // create statusmessage block 
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

    // после отправки останавливаем таймер, который вызывает окно вызова замерщика
    if (timer && timer.timerId != null) {
      clearTimeout(timer.timerId);
    }

    // заполняем данные формы: имя, телефон (стандартно) плюс данные балкона из state
    const data = new FormData(form);
    if (form.getAttribute("id") === 'end_form') {
      for (let prop in state) {
        data.append(prop, state[prop]);
      }
      data.append('date',new Date()); // дата поста
    }

    // отправляем данные на сервер
    postData("http://food/server.php", data)
      //postData('assets/server.php',data)
      .then(res => {
        console.log(res); // отображаем то, что получили с сервера
        statusMessage.textContent = message.success;
      })
      .catch(() => {
        statusMessage.textContent = message.error;
      })
      .finally(() => {
        // по любому очищаем форму и через несколько сек скрываем её.
        form.reset();
        setTimeout(() => { statusMessage.remove(); }, 5000);
        // после отправки (или при ошибке) закрываем ЛЮБУЮ форму, через 1 сек после сообщения
        // TODO: проверить, закрывается ли окно если кликнуть на подложку сразу после отправки
        const w = getParentWindow(form);
        setTimeout(() => { closeWindow(w); }, 6000);

      });


  })));
};

export default forms;

