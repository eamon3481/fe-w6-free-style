import MainVeiw from "./MainVeiw.js";
export default class View {
  constructor(data, parents) {
    this.data = data;
    this.parents = parents;
  }

  init() {
    this.data.forEach((mainData) => {
      new MainVeiw(
        this.parents,
        mainData.type,
        mainData.title,
        mainData.subtext,
        mainData.children
      ).init();
    });
  }
}
