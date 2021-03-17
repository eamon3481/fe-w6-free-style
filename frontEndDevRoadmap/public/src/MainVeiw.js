import { type } from "./components/units.js";
import svg from './components/SVG.js';
import _ from "./components/utils.js";

export default class MainView {
  constructor(parents, type, text, subtext, children) {
    this.type = type;
    this.text = text;
    this.subtext = subtext;
    this.children = children;
    this.parents = parents;
  }

  init() {
    if (this.type !== type.MAIN) return;
    const $section = this.createSection(this.text);
    this.parents.appendChild($section);
    $section.appendChild();
    if (this.children) {
      $section.appendChild(this.createContainer());
    }
  }

  createSection(text) {
    return _.genEl("SECTION", {
      template: this.sectionTemplate(text),
    });
  }
  createContainer() {
    return _.genEl("DIV", {
      classNames: ["Container"],
    });
  }
  createTri() {
    const $tri = _.genEl("DIV", {
      classNames: ["trigle"],
    });
    

  }
  sectionTemplate(text) {
    return `<div class="main"><span>${text}</span></div>`;
  }
}
