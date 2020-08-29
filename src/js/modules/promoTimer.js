// функция промо-таймера
// запускает таймер отчета в окне id="timer1"
const promoTimer = (deadline) => {
  function getRemainingTime(endtime) {
    const t = Date.parse(endtime) - (new Date()); // разница в ms
    const days = Math.floor(t / (1000 * 60 * 60 * 24));
    const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((t / (1000 * 60)) % 60);
    const seconds = Math.floor((t / 1000) % 60);
    return ({
      total: t, days, hours, minutes, seconds
    });
  }

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector);
    const daysElement = timer.querySelector('#days'),
      hoursElement = timer.querySelector('#hours'),
      minElement = timer.querySelector('#minutes'),
      secElement = timer.querySelector('#seconds'),
      actionsTimer = setInterval(updateClock, 1000);

    updateClock(); // чтобы избежать показа старых значение элементов

    function updateClock() {
      const t = getRemainingTime(endtime);
      if (t.total <= 0) {
        // скрываем div с промо-акцией
        document.querySelector('.sale').style.display = "none";
        clearInterval(actionsTimer);
      }

      daysElement.textContent = leadingZero(t.days);
      hoursElement.textContent = leadingZero(t.hours);
      minElement.textContent = leadingZero(t.minutes);
      secElement.textContent = leadingZero(t.seconds);
    }

    function leadingZero(value) {
      if (value < 10) {
        return "0" + value;
      } else {
        return value;
      }
    }

    function replacePromoText(selector, dateStr) {
      let months = ["января", "февраля", "марта", "апреля", "мая", "июня",
        "июля", "августа", "сентября", "октября", "ноября", "декабря"];
      const el = document.querySelector(selector);
      let [ymd, timeStr] = dateStr.split(' ');
      let [year, month, day] = ymd.split("-");
      let newStr = day.substring(0, 2) + " " + months[+month - 1] + " " + year + " " + (timeStr || "");
      //el.innerHTML = el.innerHTML.replace('Акция закончится 1 августа в 00:00', 'Акция закончится ' + newStr);
      el.textContent = `Успей сэкономить на остеклении! Только до ${day} ${months[+month - 1]}!`;
    }

    replacePromoText(".sale_subtitle", deadline);

  }

  setClock(".timer1", deadline);

};

export default promoTimer;
