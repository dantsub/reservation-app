import TEMPLATE from "./template.js";

const _template = document.createElement("template");
_template.innerHTML = TEMPLATE;

class BaseTable extends HTMLElement {
  constructor() {
    super();
    this.template = _template;
    this.data = [];
  }

  createHeader = () => {
    const thead = document.createElement("thead");
    thead.classList.add("border-b", "text-sky-900");
    const tr = document.createElement("tr");
    const keys = Object.keys(this.data[0]);
    keys.forEach((content) => {
      const th = document.createElement("th");
      th.classList.add("px-2", "py-3");
      th.textContent = content === "messagetext" ? "Message" : content;
      tr.appendChild(th);
    });
    thead.appendChild(tr);
    return thead;
  };

  addItems = (content) => {
    const td = document.createElement("td");
    td.classList.add("p-2");
    td.textContent = content;
    return td;
  };

  createBody = () => {
    const tbody = document.createElement("tbody");
    this.data.forEach((item) => {
      const tr = document.createElement("tr");
      tr.classList.add("border-b");
      tr.classList.add("border-gray-200");
      tr.classList.add("hover:bg-gray-50");
      tr.classList.add("transition");
      tr.classList.add("duration-150");
      tr.classList.add("ease-in-out");
      const values = Object.values(item);
      values.forEach((value) => {
        tr.appendChild(this.addItems(value));
      });
      tbody.appendChild(tr);
    });
    return tbody;
  };

  connectedCallback() {
    this.appendChild(this.template.content.cloneNode(true));
    const table = this.querySelector("table");
    table.appendChild(this.createHeader());
    table.appendChild(this.createBody());
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "data") {
      this.data = eval(newValue);
    } else if (oldValue !== newValue) {
      this[name] = newValue;
    }
  }

  static get observedAttributes() {
    return ["data"];
  }
}

customElements.define("base-table", BaseTable);
