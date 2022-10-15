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


export { getData, postData, whereIAm, redirect, getParam }; // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export
