import svg from "./components/SVG.js";
import _ from "./components/utils.js";
import View from "./Veiw.js";
export default class MainView {
  constructor(parents, text, subtext, children) {
    this.text = text;
    this.subtext = subtext;
    this.children = children;
    this.parents = parents;
  }

  init() {
    const $section = this.createSection(this.text);
    this.parents.appendChild($section);
    $section.appendChild(this.createTri());
    $section.appendChild(this.createLine("line2"));
    if (this.children) {
      const $containe = this.createContainer();
      $section.appendChild($containe);
      new View($containe, this.children).init();
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
