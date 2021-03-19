import _ from "./components/utils.js";

export default class ClickEvent {
  constructor(parents) {
    this.parents = parents;
  }

  init() {
    _.on(this.parents, "click", ({ target }) => this.clickEventHandler(target));
  }

  clickEventHandler(target) {
    if (target.classList[0] === "list") {
      this.replaceClass(target);
    }
  }

  replaceClass(target) {
    const newClassName = this.changeStep(target.classList[1]);
    _.replace(target, target.classList[1], `step${newClassName}`);
  }

  changeStep(curr) {
    let currStep = parseInt(curr.replace(/[a-z]/gi, ""));
    if (currStep === 2) currStep = -1;
    return 1 + currStep;
  }
}
