const tabs = (headerSelector, tabSelector, contentSelector, activeClass = null) => {
  const header = document.querySelector(headerSelector);
  const tabs = document.querySelectorAll(tabSelector);
  const content = document.querySelectorAll(contentSelector);

  const hideContent = () => {
    content.forEach(item => {
      item.style.display = 'none';
    })
    tabs.forEach(item => item.classList.remove(activeClass));
  }

  const showContent = (i = 0) => {
    content[i].style.display = 'block';
    tabs[i].classList.add(activeClass);
  }

  header.addEventListener('click', (e) => {
    const target = e.target;
    //debugger;
    if (target && (target.classList.contains(tabSelector.replace(/\./, "")) ||
      target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) { // remove "." in tabSelector
      tabs.forEach((item, i) => {
        if (item == target || target.parentNode == item) {
          hideContent();
          showContent(i);
        }
      });
    }
  }) // addEventListener


  hideContent();
  showContent();
}

export default tabs;
