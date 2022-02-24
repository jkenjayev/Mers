function tabs() {
  /* TABS */
  const tabs = document.querySelectorAll(".tabheader__item");
  const tabContent = document.querySelectorAll(".tabcontent");
  const headerParents = document.querySelector(".tabheader__items");

  function hideTabContent() {
    tabContent.forEach((content) => {
      content.style.display = "none";
    });

    tabs.forEach((tab) => {
      tab.classList.remove("tabheader__item_active");
    });
  }

  function showTabContent(content = 0) {
    tabContent[content].style.display = "block";
    tabs[content].classList.add("tabheader__item_active");
  }

  hideTabContent();
  showTabContent();

  headerParents.addEventListener("click", (event) => {
    if (event.target && event.target.classList.contains("tabheader__item")) {
      tabs.forEach((tab, index) => {
        if (event.target === tab) {
          hideTabContent();
          showTabContent(index);
        }
      });
    }
  });

}

export default tabs