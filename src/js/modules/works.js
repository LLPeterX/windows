const OurWorks = () => {
  // создаем модальное окно
  const popupWindow = document.createElement('div');
  const section = document.querySelector('.works');
  const bigImage = document.createElement('img');

  // для отображения большой картиники создаем <div> с классом popup внутри section .works
  popupWindow.classList.add('popup');
  section.appendChild(popupWindow);
  popupWindow.appendChild(bigImage);
  popupWindow.style.justifyContent = popupWindow.style.alignItems = 'center';
  popupWindow.style.display = 'none';
  bigImage.style.border="2px solid white";
  // размеры окна
  let docWidth = document.documentElement.clientWidth, 
      docHeight = document.documentElement.clientHeight;

  section.addEventListener('click', (e) => {
    e.preventDefault();
    let target = e.target;
    if (target && target.classList.contains('preview')) {
      popupWindow.style.display = 'flex';
      const imgPath = target.parentNode.getAttribute("href"); // из внешнего тега <a>
      bigImage.setAttribute("src", imgPath);
      if(docWidth > docHeight) {
        bigImage.setAttribute('width',Math.floor(docWidth/3)); // 30% размера
      } else {
        bigImage.setAttribute('height',Math.floor(docHeight/3));
      }
    }
    // закрыть окно при клике либо на подложку, либо на картинку
    if (target) {
      if (target.matches('div.popup')) {
        popupWindow.style.display = 'none';
      } else {
        try {
          if (target.getAttribute('src').includes('big_img')) {
            popupWindow.style.display = 'none';
          }
        } catch (e) { }
      }
    }
  });

};

export default OurWorks;