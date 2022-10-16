import TEMPLATE from "./template.js";

const _template = document.createElement("template");
_template.innerHTML = TEMPLATE;

class XDetails extends HTMLElement {
  constructor() {
    super();
    this.template = _template;
    this.data = {};
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "data") {
      this.data = JSON.parse(newValue);
    }
  }

  createElement = (tag, attributes, children) => {
    const element = document.createElement(tag);
    if (attributes) {
      Object.keys(attributes).forEach((key) => {
        element.setAttribute(key, attributes[key]);
      });
    }
    if (children) {
      children.forEach((child) => {
        element.appendChild(child);
      });
    }
    return element;
  };

  addInfo = () => {
    const details = this.querySelector("#detalles");
    Object.keys(this.data).forEach((key) => {
      const container = this.createElement("div", {"class": "p-4"});
      const title = this.createElement("h3", {"class": "text-xl text-sky-800 capitalize"}, [document.createTextNode(key)]);
      const value = this.createElement("p", {"class": "text-slate-500"}, [document.createTextNode(this.data[key])]);
      container.appendChild(title);
      container.appendChild(value);
      details.appendChild(container);
    });
  };

  connectedCallback() {
    this.appendChild(this.template.content.cloneNode(true));
    this.addInfo();
  }

  static get observedAttributes() {
    return ["data"];
  }
}

customElements.define("x-details", XDetails);
