import { checkInputAsNumber } from './checks';

const changeState = (state) => {
  const windowForm = document.querySelectorAll('.balcon_icons_img'),
    windowWidth = document.querySelectorAll('#width'), // All() - для forEach(), чтобы не заморачиваться с индивидуалами
    windowHeight = document.querySelectorAll('#height'),
    windowType = document.querySelectorAll('#view_type'),
    windowProfile = document.querySelectorAll('.checkbox');

  checkInputAsNumber('#width');
  checkInputAsNumber('#height');

  // значения по умолчанию для отдельных полей/селекторов ввода
  const setDefaultValues = () => {
    // значение по умолчанию для SELECT = 0 (Тип1) - форма окна
    if (state.form == undefined) {
      state.form = 'Тип1';
    }
    if (state.profile == undefined) { // профиль. по умолчанию 2-й, "теплое"
      state.profile = 'Теплое'; // второй элемент
      windowProfile[1].checked = true;
    }
    if (state.type == undefined) { // тип 
      state.type = windowType[0].value = 'aluminum';
    }
  };

  const bindActionToElements = (event, elements, prop) => {
    elements.forEach((item, i) => {
      item.addEventListener(event, () => {
        switch (item.nodeName) {
          case 'SPAN': // иконки формы балкона
            state[prop] = `Тип${i + 1}`;
            break;
          case 'INPUT': // либо профиль (холодное/теплое), либо размеры (width & height)
            if (item.getAttribute('type') === 'checkbox') { // профиль
              state[prop] = (i === 0) ? 'Холодное' : 'Теплое';
              // чтобы можно было вбрать только один чекбокс, сначала снимаем все метки,
              // а потом выбираем тот, на который кликнули (elements[i])
              elements.forEach(checkbox => checkbox.checked = false);
              elements[i].checked = true;
            } else { // размеры - width & height
              state[prop] = item.value;
            }
            break;
          case 'SELECT': // тип (алюминий, дерево и т.п) 
            state[prop] = item.value;
            break;
          default:
            break;
        }
        console.log(state);
      });
    });
  };

  setDefaultValues();
  bindActionToElements('click', windowForm, 'form');
  bindActionToElements('input', windowWidth, 'width');
  bindActionToElements('input', windowHeight, 'height');
  bindActionToElements('change', windowType, 'type');
  bindActionToElements('change', windowProfile, 'profile');

};

export default changeState;