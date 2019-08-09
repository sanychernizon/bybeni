import axios from "axios";

class Api {
  
  constructor() {
    const service = axios.create({
      baseURL: "http://localhost:3004",
    });
    this.service = service;
  }
  
  getProducts = productId => {
    this.service
      .get(`/api/product?id=${productId}`)
      .then(function(response) {
        return response.data[0]
      })
      .catch(function(error) {
        console.log(error);
      });
  };

}

export default Api;
