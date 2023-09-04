"use strict";

const submitBtn = document.querySelector("#submitButton");
submitBtn.addEventListener("click", () => {
  console.log("submit");
});

const checkbox = document.querySelector("#check");
checkbox.addEventListener("change", () => {
  checkbox.checked == true
    ? submitBtn.classList.remove("disabled")
    : submitBtn.classList.add("disabled");
});

(function () {
  const forms = document.querySelectorAll(".needs-validation");

  Array.prototype.slice.call(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (e) => {
        if (!form.checkValidity()) {
          e.preventDefault();
          e.stopPropagation();
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
})();

const btnUp = {
  el: document.querySelector(".gh-btn-up"),
  show() {
    this.el.classList.add("gh-btn-up-show");
  },
  hide() {
    this.el.classList.remove("gh-btn-up-show");
  },
  addEventListener() {
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      scrollY > 300 ? this.show() : this.hide();
    });
    document.querySelector(".gh-btn-up").onclick = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    };
  },
};

btnUp.addEventListener();
