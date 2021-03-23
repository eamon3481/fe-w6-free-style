import _ from "./components/utils.js";
import LoginView from "./loginView.js";
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
    const $login = _.$(".loggin-section", this.parents);

    if (target.closest(".loggin-section")) {
      this.popupLogin($login);
      new LoginView(target.closest("div")).init();
    } else {
      this.removeLogin($login);
    }
  }
  removeLogin(target) {
    target.removeAttribute("style");
  }
  popupLogin(target) {
    target.style.transform = "translateX(-15rem)";
  }
  reaplaceStep(target, stepnum) {
    const roadMap = JSON.parse(localStorage.getItem("map"));
    const dfs = (item, text, num) => {
      if (!item) return;
      if (item.title === text) {
        item.step = num;
      }
      if (!item.children) return;
      item.children.forEach((v) => {
        dfs(v, text, num);
      });
    };
    roadMap.map((v) => dfs(v, target.innerText, stepnum));
    localStorage.setItem("map", JSON.stringify(roadMap));
  }

  replaceClass(target) {
    const newClassName = this.changeStep(target.classList[1]);
    _.replace(target, target.classList[1], `step${newClassName}`);
    this.reaplaceStep(target, newClassName);
  }

  changeStep(curr) {
    let currStep = parseInt(curr.replace(/[a-z]/gi, ""));
    if (currStep === 3) currStep = -1;
    return 1 + currStep;
  }
}
