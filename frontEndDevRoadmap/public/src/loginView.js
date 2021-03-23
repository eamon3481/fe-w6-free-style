export default class loginView {
  constructor(target) {
    this.target = target;
  }

  init() {
    this.checkTarget(this.target)
  }

  checkTarget(target) {
    if (target.classList[1] === "selected") return;
    switch (target.innerText) {
      case "log-in":
        console.log("login");
        //this.renderloginView()
        break;
      case "sign-in":
        console.log("sign");
        //this.renderSigninView()
        break;
    }
  }
}
