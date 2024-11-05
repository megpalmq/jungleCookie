import { changePage } from "../model/model.js";

const hamburgerMenu = document.querySelector(".hamburgerMenu");
const nav = document.querySelector(".nav");

function route() {
  let hashTag = window.location.hash || "#";
  let pageID = hashTag.replace("#", "");
  

  changePage(pageID);
}
function initSite() {
  $(window).on("hashchange", route);
  route();
}

hamburgerMenu.addEventListener("click", () => {
    console.log('clicky')
  nav.classList.toggle("active");
});

function initListeners() {
  $(document).on("click", "a", function (e) {
    let id = e.currentTarget.id;
    console.log(id);
    window.location.hash = id;
    nav.classList.toggle("active");
  });

  $(".nav").on("click", function () {
    nav.classList.toggle("active");
  });
}

$(document).ready(function () {
  initSite();
  initListeners();
});