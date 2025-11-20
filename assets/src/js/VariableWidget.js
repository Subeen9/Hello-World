import { Widget } from "./Widget.js";

export class VariableWidget extends Widget {
  constructor(container, page) {
    super(container, page);

    this.valueDisplay = this.container.querySelector(".value-display");
    this.button = this.container.querySelector(".change-value-btn");

    this.value = 0;

    this.button.addEventListener("click", () => {
      this.changeValue();
    });
  }

  changeValue() {
    this.value = Math.floor(Math.random() * 10);
    this.valueDisplay.textContent = this.value;

    this.valueDisplay.classList.add("flash");
    setTimeout(() => this.valueDisplay.classList.remove("flash"), 300);
  }
}
