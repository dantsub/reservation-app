import { getData, postData, putData, deleteData } from '../utils.js';

class Api {
  constructor() {
    this.baseUrl = 'http://localhost:3100/';
    this.data = []; 
  }

  async get(path) {
    let data;
    await getData(this.baseUrl + path, res => data = res);
    this.data = data;
  }

  async post(path, data) {
    await postData(this.baseUrl + path, data, () => console.log("Añadido!"));
  }

  async delete(path, id) {
    await deleteData(this.baseUrl + path + id, () => console.log("Eliminado!"));
  }

  async update(path, id, data) {
    await putData(this.baseUrl + path + id, data, () => console.log("Actualizado!"));
  }

  getData () {
    return this.data;
  }
}

export default Api;
