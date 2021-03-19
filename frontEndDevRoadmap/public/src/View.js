import MainVeiw from "./MainVeiw.js";
import ListitemView from "./ListitemVeiw.js";
import BoxVeiw from "./BoxVeiw.js";
import { type } from "./components/units.js";

export default class View {
  constructor(data, parents, grandparents) {
    this.data = data;
    this.parents = parents;
    this.grandparents = grandparents;
  }

  init() {
    this.data.forEach((Data) => {
      if (Data.type === type.MAIN) {
        new MainVeiw(
          this.parents,
          Data.title,
          Data.subtext,
          Data.children
        ).init();
      }

      if (Data.type === type.LIST) {
        new ListitemView(
          this.grandparents,
          this.parents,
          Data.title,
          Data.subtext,
          Data.toggle,
          Data.step,
          Data.children
        ).init();
      }
      if (Data.type === type.BOX) {
        new BoxVeiw(
          this.grandparents,
          this.parents,
          Data.title,
          Data.subtext, 
          Data.toggle,
          Data.children
        ).init();
      }
    });
  }
}
