import TEMPLATE from "./template.js";

const _template = document.createElement("template");
_template.innerHTML = TEMPLATE;

class XForm extends HTMLElement {
  constructor() {
    super();
    this.template = _template;
    this.data = [];
  }

  createInput = ({type, placeholder, name}) => {
    const input = document.createElement("input");
    input.setAttribute("type", type);
    input.setAttribute("placeholder", placeholder);
    input.setAttribute("name", name);
    input.setAttribute("id", name);
    input.setAttribute("class", "p-2 border rounded shadow border-sky-700");
    return input;
  };

  createInputWrapper = () => {
    const wrapper = document.createElement("div");
    wrapper.setAttribute("class", "flex flex-col w-full");
    return wrapper;
  };

  createLabel = (text) => {
    const label = document.createElement("label");
    label.setAttribute("class", "text-xl text-sky-700 capitalize");
    label.innerText = text;
    return label;
  };

  createSubmitButton = () => {
    const button = document.createElement("button");
    button.setAttribute("class", "p-2 bg-sky-700 text-white rounded shadow");
    button.innerText = "Submit";
    return button;
  };

  buildFields = (form) => {
    this.data.forEach((field) => {
      const wrapper = this.createInputWrapper();
      const label = this.createLabel(field.label);
      const input = this.createInput(field);
      wrapper.appendChild(label);
      wrapper.appendChild(input);
      form.appendChild(wrapper);
    });
    form.appendChild(this.createSubmitButton());
  };

  connectedCallback() {
    this.appendChild(this.template.content.cloneNode(true));
    const form = this.querySelector("form");
    this.buildFields(form);
  }

  static get observedAttributes() {
    return ["data"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "data") {
      this.data = eval(newValue);
    }
  }
}

customElements.define("x-form", XForm);
