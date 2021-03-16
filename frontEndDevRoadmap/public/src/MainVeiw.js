import { toggles, type, step } from "./components/units.js";
class MainView {
  constructor(parents, type, text, subtext, toggle, step) {
    this.type = type;
    this.text = text;
    this.subtext = subtext;
    this.toggle = toggle;
    this.step = step;
    this.parents = parents;
  }

  init() {
    if (this.type === type.MAIN) {
      this.parents.innerHTML = this.render(this.text, this.step, this.toggle);
    }
  }

  render(text, step, toggle) {
    return `<section class="${text}"><span> class="${toggle}">${text}</span>${text}</section>`;
  }
}
