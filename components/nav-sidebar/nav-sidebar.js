import TEMPLATE from "./template.js";
import { whereIAm } from "../../utils.js";

class NavSidebar extends HTMLElement {
  constructor() {
    super();
    this.template = TEMPLATE;
  }

  changeUrls() {
    const links = this.querySelectorAll("a");
    links.forEach((link) => {
      const href = link.getAttribute("href");
      if (whereIAm() !== "/" && href !== "/") {
        link.setAttribute("href", `../${href}`);
      }
    });
  }

  changeActive() {
    const links = this.querySelectorAll("a");
    links.forEach((link) => {
      const href = link.getAttribute("href");
      if (href.includes(whereIAm()) && whereIAm() !== "") {
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
