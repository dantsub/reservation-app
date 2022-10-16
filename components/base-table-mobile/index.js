import TEMPLATE from "./template.js";
import { TableItemMobile } from "../table-item-mobile/index.js";

export class BaseTableMobile extends HTMLElement {
  constructor() {
    super();
    this.template = TEMPLATE;
    this.data = [];
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    if (attr === "data") {
      this.data = eval(newValue);
    }
  }

  addItems = () => {
    const base = this.querySelector("#base-table-mobile");
  
    this.data.forEach((item) => {
      const tableItem = new TableItemMobile();
      tableItem.setAttribute("data", JSON.stringify(item));
      base.appendChild(tableItem);
    });
  };

  connectedCallback() {
    this.innerHTML = this.template;
    this.addItems();
  }

  static get observedAttributes() {
    return ["data"];
  }
}

customElements.define("table-mobile", BaseTableMobile);
