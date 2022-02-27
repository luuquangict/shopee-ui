"use strict";

class Modal {
  constructor(element, formElement) {
    this.element = element;
    this.formElement = formElement;

    this.init();
  }

  init() {
    const aTags = document.querySelectorAll("a.open-modal");
    console.log(aTags);
    for (let i = 0; i < aTags.length; i++) {
      let href = aTags[i].attributes["href"].nodeValue;
      if (href && href.startsWith("#")) {
        href = href.replace("#", "");
        handle(aTags[i], href);
      }
    }

    function handle(target, modalId) {
      const form = document.getElementById(modalId);
      form.getElementsByClassName("modal__overlay")[0].addEventListener("click", closeModal);
      form.getElementsByClassName("btn-back")[0].addEventListener("click", closeModal);

      target.addEventListener("click", (event) => {
        event.preventDefault();
        console.log("Open modal");
        form.classList.remove("hidden");
      });

      function closeModal() {
        console.log("Close modal");
        form.classList.add("hidden");
      }
    }
  }
}

document.addEventListener("DOMContentLoaded", function (event) {
  const register = new Modal();
});
