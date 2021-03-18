import ListitemView from "./ListitemVeiw.js";
export default class ListView {
  constructor(parents, list) {
    this.list = list;
    this.parents = parents;
  }
  // 중복을 피하는 방법? view 클래스 하나로 할수있을 것같은데//
  init() {
    this.list.forEach((listData) => {
      new ListitemView(
        this.parents,
        listData.type,
        listData.title,
        listData.subtext,
        listData.toggle,
        listData.step
      ).init();
    });
  }
}
