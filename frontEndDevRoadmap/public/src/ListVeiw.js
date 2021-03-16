import { toggles, type, step } from "./components/units.js";
class ListView {
  constructor(parents, type, text, subtext, toggle, step) {
    this.type = type;
    this.text = text;
    this.subtext = subtext;
    this.toggle = toggle;
    this.step = step;
    this.parents = parents;
  }

  init() {
    if (this.type === type.LIST) {
      this.parents.innerHTML = this.render(this.text, this.step, this.toggle);
    }
  }

  render(text, step, toggle) {
    return `<li class="list ${step}"><div class="${toggle}"></div>${text}</li>`;
  }
}
