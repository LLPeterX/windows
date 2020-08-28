const checkInputAsNumber = (selector) => {
  document.querySelectorAll(selector).forEach(item => {
    item.addEventListener('input',() => {
      item.value = item.value.replace(/\D/g,"");
    });
  });
};

// на входе массив из 2-х элементов inputs и элемент кнопки btn
// если оба элемента ненулевые, то разрешаем кнопку btn, иначе - запрещаем
const checkInputsNonZero = (inputs, btn) => {
  if(inputs) {
    if(inputs[0].value>0 && inputs[1].value>0) {
      btn.disabled = false;
    } else {
      btn.disabled = true;
    }
  }
};

export {checkInputAsNumber, checkInputsNonZero};