import Api from "./models/API.js";

const getData = async (url, callback) => {
  try {
    const response = await fetch(url) // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    const data = await response.json() // https://developer.mozilla.org/en-US/docs/Web/API/Body/json
    callback(data) 
  } catch (error) {
    console.log(error)
  }
};

const postData = async (url, data, callback) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const _data = await response.json()
    callback(_data)
  } catch(error) {
    console.log(error)
  }
};

const deleteData = async (url, callback) => {
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
    const _data = await response.json()
    callback(_data)
  } catch(error) {
    console.log(error)
  }
};

const putData = async (url, data, callback) => {
  try {
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const _data = await response.json()
    callback(_data)
  } catch(error) {
    console.log(error)
  }
};

const arrPath = () => {
  const path = window.location.pathname; // https://developer.mozilla.org/en-US/docs/Web/API/Location
  return path.split("/"); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
}

const whereIAm = () => {
  const pathArray = arrPath();
  return pathArray[pathArray.length - 1] || pathArray[pathArray.length - 2]; // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
};

const redirect = (url) => {
  const pathArray = arrPath();
  pathArray.pop(); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
  pathArray.push(url); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
  window.location.replace(pathArray.join("/")); // https://developer.mozilla.org/en-US/docs/Web/API/Location/replace
};

const getParam = (param) => {
  const urlParams = new URLSearchParams(window.location.search); // https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
  return urlParams.get(param); // https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/get
};

const fixRoutes = () => {
  const path = window.location.href;
  const main = document.querySelector("section");
  const anchors = main.querySelectorAll("a");
  anchors.forEach((anchor) => {
    const href = anchor.getAttribute("href");
    anchor.setAttribute("href", `${path}${href}`);
  });
};

const renderTable = (api) => {
  const table = document.createElement("base-table");
  const mobileTable = document.createElement("table-mobile");

  table.setAttribute("data", JSON.stringify(api.getData()));
  mobileTable.setAttribute("data", JSON.stringify(api.getData()));
  const section = document.querySelector("section");
  section.appendChild(table);
  section.appendChild(mobileTable);
}


const init = async (page) => {
  const api = new Api();
  const createButton = document.querySelector("#crear");
  createButton.addEventListener("click", () => {
    window.location.href = `/${page}/new.html`;
  });

  await api.get(page)
  
  renderTable(api);
  fixRoutes();
}

export { getData, postData, deleteData, putData, whereIAm, redirect, getParam, init }; // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export
