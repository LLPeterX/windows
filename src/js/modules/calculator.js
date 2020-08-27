import tabs from './tabs';

// teacher variant
const calculator = () => {
  //const calcWindow = document.querySelector('.popup_calc');
  const profileWindow = document.querySelector('.popup_calc_profile');
  //const calcButtons = document.querySelectorAll('.popup_calc_btn');
  //const closeButtons = ['.popup_calc_close', '.popup_calc_profile_close', '.popup_calc_end_close'];
  //const profileButton = document.querySelector('.popup_calc_button');
  //const icons = document.querySelectorAll('.balcon_icons_img');
  //const bigImages = document.querySelector('.big_img');
  const inputWidth = document.querySelector('#width'),
    inputHeight = document.querySelector('#height'),
    checkBoxes = document.querySelectorAll('.checkbox');
  const endWindow = document.querySelector(".popup_calc_end");
  const buttonEnd = document.querySelector('.popup_calc_profile_button');
  let activeWindow = null;

  // my variant
  // слушатели на все возможные кнопки открытия окна
  // кнопки "Рассчитать": открыть окно расчета
  /*
  calcButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      calcWindow.style.display = 'block';
      tabs('.balcon_icons', '.balcon_icons_img', '.big_img', 'do_image_more');
    });
  });

  // кнопки закрытия окон. Окна отбираются по массиву стилей всех окон. Закрывается активное окно.
  closeButtons.forEach(closeStyle => {
    document.querySelector(closeStyle).addEventListener('click',() => {
      if(activeWindow) {
        activeWindow.style.display='none';
        activeWindow=null;
      }
    });
  });
*/
/*
  inputWidth.addEventListener('input', () => {
    inputWidth.value = inputWidth.value.replace(/\D/g, "");
  });
  inputHeight.addEventListener('input', () => {
    inputHeight.value = inputHeight.value.replace(/\D/g, "");
  });
*/
  const boxCold = checkBoxes[0],
    boxWarm = checkBoxes[1];

  const switchBoxes = (target) => {
    if (target == boxCold) {
      boxWarm.checked = !boxCold.checked;
    } else {
      boxCold.checked = !boxWarm.checked;
    }
  };

  checkBoxes.forEach(item => item.addEventListener('change', (e) => {
    switchBoxes(e.target);
  }));
/*
  profileButton.addEventListener('click', () => {
    const width = +inputWidth.value;
    const height = +inputHeight.value;
    if (!isNaN(width) && !isNaN(height) && width > 0 && height > 0) {
      // hide current window and show profile
      //calcWindow.style.display = 'none';
      profileWindow.style.display = 'block';
      activeWindow = profileWindow;
    }
  });
*/
  // Для отправки дополнительных данных (ширина, высота, тип) добавляем в форму <input type="hidden">
  function addField(form, name, value) {
    const field = document.createElement("input");
    field.setAttribute("type","hidden");
    field.setAttribute("name",name);
    field.setAttribute("value",value);
    form.append(field);
  }

  buttonEnd.addEventListener('click', () => {
    if (boxCold.checked || boxWarm.checked) {
      profileWindow.style.display = 'none';
      endWindow.style.display = 'block';
      activeWindow = endWindow;
      // теперь в форму надо добавить скрытые поля: width, height, type (warm/cold) и view_type
      const form = document.querySelector('#end_form');
      addField(form,"width",inputWidth.value);
      addField(form,"height",inputHeight.value);
      addField(form,"type",boxCold.checked ? 'cold' : 'warm');
      addField(form,"view_type", document.querySelector('#view_type').value);
    }

  });


};

export default calculator;