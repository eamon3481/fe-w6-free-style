import { toggles, type, step } from "./components/units.js";
import _ from "./components/utils.js";
export default class ListitemView {
  constructor(parents, types, text, subtext, toggle, steps) {
    this.type = types;
    this.text = text;
    this.subtext = subtext;
    this.toggle = toggle;
    this.step = steps;
    this.parents = parents;
  }

  init() {
    if (this.type !== type.LIST) return;
    this.parents.appendChild(this.createList(this.tep));
  }

  listTemplate(text, toggle) {
    return `<div class="${toggle}"></div>${text}`;
  }

  createList(step) {
    return _.genEl("Li", {
      classNames: ["list", `${step}`],
      template: this.listTemplate(this.text, this.toggle),
    });
  }
}
