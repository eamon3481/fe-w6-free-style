import MainVeiw from "./MainVeiw.js";
import ListitemView from "./ListitemVeiw.js";
import { type } from "./components/units.js";

export default class View {
  constructor(data, parents) {
    this.data = data;
    this.parents = parents;
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
          this.parents,
          Data.title,
          Data.subtext,
          Data.toggle,
          Data.step
        ).init();
      }
    });
  }
}
