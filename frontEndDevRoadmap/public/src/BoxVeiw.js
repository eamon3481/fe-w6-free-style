import { toggles, type, step } from "./components/units.js";
import _ from "./components/utils.js";
import View from "./View.js";
export default class BoxVeiw {
  constructor(grandparents, parents, text, subtext, toggle, children) {
    this.text = text;
    this.subtext = subtext;
    this.toggle = toggle;
    this.parents = parents;
    this.grandparent = grandparents;
    this.children = children;
  }

  init() {
    const $box = this.createBox();
    this.parents.appendChild($box);
    if (this.children) {
      new View(this.children, $box, this.grandparent).init();
    }
  }
  BoxTemplate(toggle, text, subtext) {
    let template = `<div class=${toggle}></div><strong>${text}</strong>`;
    if (subtext) template += `<h6>${subtext}</h6>`;
    return template;
  }

  createContainer() {
    return _.genEl("UL");
  }

  createBox() {
    return _.genEl("DIV", {
      classNames: ["box"],
      template: this.BoxTemplate(this.toggle, this.text, this.subtext),
    });
  }
}
