import './slider';
import modals from './modules/modals';
import forms from './modules/forms';
import tabs from './modules/tabs';
import calculator from './modules/calculator';

window.addEventListener('DOMContentLoaded', () => {
  let modalState = {};
  let timer = { timerId: null }; // таймер появления окна вызова обмерщика - объект, чтобы передать по ссылке
  calculator(modalState);
  modals(timer);
  tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
  tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
  // табы внутри окна подсчета стоимости
  tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline');
  forms(modalState, timer);
});