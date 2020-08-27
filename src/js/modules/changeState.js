import { checkInputAsNumber } from './checks';

const changeState = (state) => {
  const windowForm = document.querySelectorAll('.balcon_icons_img'),
    windowWidth = document.querySelectorAll('#width'), // All() нужен чтобы в bindActionToElements() работал forEach()
    windowHeight = document.querySelectorAll('#height'),
    windowType = document.querySelectorAll('#view_type'),
    windowProfile = document.querySelectorAll('.checkbox');

  checkInputAsNumber('#width');
  checkInputAsNumber('#height');

  const bindActionToElements = (event, elements, prop) => {
    elements.forEach((item, i) => {
      item.addEventListener(event, () => {
        // если несколько элементов, то передаем индекс, иначе - значение (для width и height)
        if (elements.length > 1) {
          state[prop] = i;
        } else {
          state[prop] = item.value;
        }
        console.log(state);
      });
    });
  };

  bindActionToElements('click', windowForm, 'form');
  bindActionToElements('input', windowWidth, 'width');
  bindActionToElements('input', windowHeight, 'height');

};

export default changeState;