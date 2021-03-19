import _ from "./components/utils.js";
import View from "./View.js";
import ClickEvent from "./Clickevent.js";
document.addEventListener("DOMContentLoaded", initViews);
const SERVER_URL = "http://localhost:3000";
const DATA_URL = SERVER_URL + "/sample.json";
async function initViews() {
  if (!localStorage.getItem("author")) {
    await fetch(DATA_URL) //
      .then((res) => res.json())
      .then((json) => {
        SaveTolocalstorge(json.author, json.map);
        new View(json.map, _.$("body")).init();
      });
  } else { 
    const map = JSON.parse(localStorage.getItem("map"));
    new View(map, _.$("body")).init();
  }
  new ClickEvent(_.$("body")).init();
}

function SaveTolocalstorge(author, data) {
  localStorage.setItem("author", author);
  localStorage.setItem("map", JSON.stringify(data));
}
