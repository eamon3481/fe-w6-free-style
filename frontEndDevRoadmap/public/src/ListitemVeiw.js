import _ from "./components/utils.js";
import View from "./View.js";
import svg from "./components/SVG.js";
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
    const $li = this.createli();
    this.parents.appendChild($li);
    if (this.children) {
      const $containe = this.createContainer();
      $li.appendChild($containe);
      new View(this.children, $containe, this.parents).init();
    }
  }

  listTemplate(text, toggle) {
    return `<div class="${toggle} toggle position"><i class="fas fa-check"></i></div>${text}`;
  }

  createli() {
    const $li = _.genEl("LI");
    $li.appendChild(this.createList(this.step));
    return $li;
  }

  createList(step) {
    return _.genEl("DIV", {
      classNames: ["list", `step${step}`],
      template: this.listTemplate(this.text, this.toggle),
    });
  }
  createContainer() {
    return _.genEl("DIV", {
      classNames: ["Container", "child"],
      template: svg.arrow,
    });
  }
}
