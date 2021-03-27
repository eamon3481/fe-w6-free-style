import _ from "./components/utils.js";

export default class loginView {
  constructor(target) {
    this.target = target;
    this.loginSection = target.offsetParent;
    this.loginInner = this.loginSection.children[1];
  }

  init() {
    this.checkTarget(this.target);
  }

  checkTarget(target) {
    if (this.target.classList[0] !== "toggle-btn") return;
    if (target.classList[1] === "selected") return;
    this.switchBtn(target);
    this.renderView(target);
  }

  switchBtn(target) {
    const selected = _.$(".selected", this.loginSection);
    _.replace(selected, "selected", "unselected");
    _.replace(target, "unselected", "selected");
  }

  renderView(target) {
    switch (target.innerText) {
      case "log-in":
        this.loginInner.innerHTML = this.TemplateLoginView();
        break;
      case "sign-in":
        this.loginInner.innerHTML = this.TemplateSignView();
        break;
    }
  }

  TemplateLoginView() {
    return `
    <form action="/" method="post">
        <div>
          <input type="text" id="name" placeholder="Name" />
        </div>
        <div>
          <input type="password" id="password" placeholder="Password" />
        </div>
        <button type="submit">Log In</button>
      </form>
    `;
  }

  TemplateSignView() {
    return ` 
    <form action="/" method="post">
    
    <div>
      <input type="text" id="name" placeholder="Name" />
    </div>
    
    <div>
      <input type="password" id="password" placeholder="Password" />
    </div>
    
    <div>
    <input type="password" id="password2" placeholder="Password" />
    </div>
    
    <button type="submit">Sign In</button>
  
    </form>`;
  }
}
