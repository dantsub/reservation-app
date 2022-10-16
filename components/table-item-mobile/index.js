import TEMPLATE from "./template.js";

export class TableItemMobile extends HTMLElement {
  constructor() {
    super();
    this.template = TEMPLATE;
    this.data = {};
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    if (attr === "data") {
      this.data = JSON.parse(newValue);
    }
  }

  addDetails = () => {
    const details = this.querySelector("dl");
    const keys = Object.keys(this.data);
    keys.forEach((item) => {
      const dt = document.createElement("dt");
      const dd = document.createElement("dd");
      const div = document.createElement("div");
      const summary = this.querySelector("summary");

      dt.classList.add("text-lg", "font-semibold", "text-sky-700");
      dd.classList.add("text-slate-500");
      div.classList.add("py-2");

      if (item !== "name" && item !== "message" && item !== "id") {
        const title = item === "messagetext" ? "Message" : item;
        dt.textContent = title;
        dd.textContent = this.data[item];
        div.appendChild(dt);
        div.appendChild(dd);
        details.appendChild(div);
      } else {
        summary.firstElementChild.textContent = this.data[item];
      }
    });
  };

  connectedCallback() {
    this.innerHTML = this.template;
    this.addDetails();

    this.firstElementChild.addEventListener("toggle", () => {
      const icon = this.querySelector("i");
      if (this.firstElementChild.hasAttribute("open")) {
        icon.classList.replace("fi-rr-angle-small-down", "fi-rr-angle-small-up");
      } else {
        icon.classList.replace("fi-rr-angle-small-up", "fi-rr-angle-small-down");
      }
    });
  }

  adoptedCallback() {
    this.firstElementChild.addEventListener("toggle", () => {
      console.log("toggle");
    });

  }

  static get observedAttributes() {
    return ["data"];
  }
}

customElements.define("table-item-mobile", TableItemMobile);
