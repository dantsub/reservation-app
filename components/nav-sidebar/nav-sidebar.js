import TEMPLATE from "./template.js";
import { whereIAm } from "../../utils.js";

class NavSidebar extends HTMLElement {
  constructor() {
    super();
    this.template = TEMPLATE;
  }

  changeUrls() {
    const pages = ["new.html", "edit.html", "delete.html", "show.html"];
    const links = this.querySelectorAll("a");
    links.forEach((link) => {
      const href = link.getAttribute("href");
      const { href: local } = window.location;
      const array = local.split("/");
      array.splice(array.length - 2, 1);
      if (pages.includes(whereIAm())) {
        array.splice(array.length - 1, 1);
        array.push("");
      }
      const newHref = array.join("/");

      if (whereIAm() !== "" && href !== "/") {
        link.setAttribute("href", `${newHref}${href}`);
      } else if (whereIAm() === "" && href !== "/") {
        link.setAttribute("href", `${local}${href}`);
      } else if (whereIAm() !== "" && href === "/") {
        link.setAttribute("href", `${newHref}`);
        console.log(whereIAm());
      } else {
        link.setAttribute("href", `${local}`);
      }
    });
  }

  changeActive() {
    const list = this.querySelector("ul");
    const links = list.querySelectorAll("a");
    const { href: local } = window.location;
    links.forEach((link) => {
      const href = link.getAttribute("href");
      if (local.includes(href) && whereIAm() !== "") {
        const li = link.parentElement;
        li.classList.add("bg-sky-900");
      }
    });
  }

  connectedCallback() {
    this.innerHTML = this.template;
    this.changeUrls();
    this.changeActive();
  }
}

customElements.define("nav-sidebar", NavSidebar);
