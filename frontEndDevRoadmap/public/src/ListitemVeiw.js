
import _ from "./components/utils.js";
import View from "./View.js";
export default class ListitemView {
  constructor(grandparents, parents, text, subtext, toggle, steps, children) {
    this.text = text;
    this.subtext = subtext;
    this.toggle = toggle;
    this.step = steps;
    this.grandparent = grandparents;
    this.parents = parents;
    this.children = children;
  }

  init() {
    this.parents.appendChild(this.createList(this.step));
    if (this.children) {
      const $containe = this.createContainer();
      this.grandparent.appendChild($containe);
      new View(this.children, $containe, this.grandparent).init();
    }
  }

  listTemplate(text, toggle) {
    return `<div class="${toggle} toggle position"><i class="fas fa-check"></i></div>${text}`;
  }

  createList(step) {
    return _.genEl("Li", {
      classNames: ["list", `step${step}`],
      template: this.listTemplate(this.text, this.toggle),
    });
  }
  createContainer() {
    return _.genEl("DIV", {
      classNames: ["Container"],
    });
  }
}
