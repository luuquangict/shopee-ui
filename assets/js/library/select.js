(function () {
  // Handle when click outside of select
  window.addEventListener("click", function (item) {
    if (item.target.closest(".select.show")) {
      return;
    }

    // Remove class show
    this.document.querySelector(".select.show")?.classList.remove("show");
  });

  // Handle select click
  var selectElements = document.querySelectorAll(".select");
  selectElements.forEach((element) => {
    element.addEventListener("click", selectClicked.bind(element));
  });

  // Click on select
  function selectClicked(e) {
    this.classList.toggle("show");
  }

  // Handle option click
  var optionElements = document.querySelectorAll(".select__option");
  optionElements.forEach((element) => {
    element.addEventListener("click", optionClicked.bind(element));
  });

  // Option clicked
  function optionClicked(e) {
    e.stopPropagation();
    var select = this.closest(".select.show");
    var label = select.querySelector(".select__label");
    label.innerText = this.innerText;
    select.classList.remove("show");
  }
})();
