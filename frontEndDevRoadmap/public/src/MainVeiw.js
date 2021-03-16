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
      const $el = this.CreateSection(this.text);
      this.parents.appendChild($el);
      if (this.children) {
        $el.appendChild(this.CreateContainer());
      }
    }
  }

  CreateContainer() {
    return _.genEl("DIV", {
      classNames: ["Container"],
    });
  }

  CreateSection(text) {
    return _.genEl("SECTION", {
      template: this.SectionTemplate(text),
    });
  }

  SectionTemplate(text) {
    return `<span class="main">${text}</span>`;
  }
}
