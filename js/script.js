/* Import modules */
import loader from "./modules/loader";
import modal from "./modules/modal";
import date from "./modules/date";
import slider from "./modules/slider";
import tabs from "./modules/tabs";
import cards from "./modules/cards";
import accordion from "./modules/accordion";
import forms from "./modules/forms";
import { openModal } from "./modules/modal.js";

window.addEventListener("DOMContentLoaded", () => {
  const modalTimer = setTimeout(() => {
    openModal(".modal", modalTimer);
  }, 50000);

  /* Call modules */
  loader();
  modal("[data-modal]", ".modal", modalTimer);
  date();
  slider();
  tabs();
  cards();
  accordion();
  forms(modalTimer);
});
