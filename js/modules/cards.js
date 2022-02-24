function cards() {
  /* -------------------- Class ---------------- */

  const getResource = async (url) => {
    const request = await fetch(url);
    if (!request.ok) {
      throw new Error(`Could not fetch ${url}, status: ${request.status}`);
    }
    return await request.json();
  };

  class CarCard {
    constructor(
      src,
      alt,
      title,
      description,
      price,
      parentSelector,
      ...classes
    ) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.description = description;
      this.price = price;
      this.classes = classes;
      this.parentSelector = document.querySelector(parentSelector);
      this.transfer = 10.5;
      this.changeToUSD();
    }

    changeToUSD() {
      this.price = this.price * this.transfer;
    }

    render() {
      const element = document.createElement("div");

      if (this.classes.length === 0) {
        this.classes = "menu__item";
        element.classList.add(this.classes);
      } else {
        this.classes.forEach((className) => {
          element.classList.add(className);
        });
      }

      element.innerHTML = `
      <div class="menu__item">
        <img src="${this.src}" alt="vegy" />
        <h3 class="menu__item-subtitle">${this.title}</h3>
        <div class="menu__item-descr"> ${this.description}</div>
        <div class="menu__item-divider"></div>
        <div class="menu__item-price">
          <div class="menu__item-cost">Price:</div>
          <div class="menu__item-total"><span>${this.price}</span> $</div>
        </div>
    </div>
      `;

      this.parentSelector.append(element);
    }
  }

  getResource("http://localhost:3000/menu").then((data) => {
    data.forEach(({ img, altimg, title, descr, price }) => {
      new CarCard(
        img,
        altimg,
        title,
        descr,
        price,
        ".menu .container"
      ).render();
    });
  });
}

export default cards;