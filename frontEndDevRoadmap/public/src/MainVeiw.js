import { type } from "./components/units.js";
import svg from "./components/SVG.js";
import _ from "./components/utils.js";
import ListView from "./ListVeiw.js";
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
    $section.appendChild(this.createTri());
    $section.appendChild(this.createLine("line2"));
    if (this.children) {
      const $containe = this.createContainer();
      $section.appendChild($containe);
      new ListView($containe, this.children).init();
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

  createLine(num) {
    let line;
    switch (num) {
      case "line1":
        line = svg.line1;
        break;
      case "line2":
        line = svg.line2;
        break;
    }
    return _.genEl("DIV", {
      classNames: [num],
      template: line,
    });
  }
  createTri() {
    const $tri = _.genEl("DIV", {
      classNames: ["trigle"],
    });

    $tri.appendChild(this.createLine("line1"));

    return $tri;
  }
  sectionTemplate(text) {
    return `<div class="main"><span>${text}</span></div>`;
  }
}
