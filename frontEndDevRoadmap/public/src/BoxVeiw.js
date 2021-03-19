import { toggles, type, step } from "./components/units.js";
import _ from "./components/utils.js";
export default class BoxVeiw {
  constructor(parents, types, text, subtext, toggle) {
    this.type = types;
    this.text = text;
    this.subtext = subtext;
    this.toggle = toggle;
    this.parents = parents;
  }

  init() {

  }
  BoxTemplate()
  
  createBox(){
      return _.genEl("DIV",{
          classNames:["box"],
      })
  }
}