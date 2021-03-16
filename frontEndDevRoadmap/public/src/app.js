import _ from "./components/utils.js";
import View from "./View.js";

document.addEventListener("DOMContentLoaded", initViews);
const SERVER_URL = "http://localhost:3000";
const DATA_URL = SERVER_URL + "/sample.json";
async function initViews() {
  const $body = _.$("body");
  const view = await fetch(DATA_URL) //
    .then((res) => res.json())
    .then((json) => new View(json.map, _.$("body")));

  view.init();
}
