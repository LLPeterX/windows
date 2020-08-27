import './slider';
import modals from './modules/modals';
import forms from './modules/forms';
import tabs from './modules/tabs';
import calculator from './modules/calculator';
import changeState from './modules/changeState';

window.addEventListener('DOMContentLoaded', () => {
  let modalState = {
  };
  changeState(modalState);
  modals();
  tabs('.glazing_slider','.glazing_block','.glazing_content','active');
  tabs('.decoration_slider','.no_click','.decoration_content > div > div','after_click');
  tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more','inline');
  forms();
  //calculator();
  
  

});