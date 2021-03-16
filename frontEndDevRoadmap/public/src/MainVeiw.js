import { type } from "./components/units.js";
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
    if (this.type === type.MAIN) {
      const $section = this.CreateSection(this.text);
      this.parents.appendChild($section);
      $section.appendChild(this.CreateTri());
      if (this.children) {
        $section.appendChild(this.CreateContainer());
      }
    }
  }

  CreateSection(text) {
    return _.genEl("SECTION", {
      template: this.SectionTemplate(text),
    });
  }
  CreateContainer() {
    return _.genEl("DIV", {
      classNames: ["Container"],
    });
  }
  CreateTri() {
    return _.genEl("DIV", {
      classNames: ["trigle"],
    });
  }
  SectionTemplate(text) {
    return `<div class="main"><span>${text}</span></div>`;
  }
}
