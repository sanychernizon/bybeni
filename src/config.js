import axios from "axios";

class ApiService {
  constructor() {
    const service = axios.create({
      baseURL: "http://localhost:3004/api/",
    });
    this.service = service
  }

  getProducts = productId => {
    axios
      .get(`http://localhost:3004/api/product?id=${productId}`)
      .then(function(response) {
        self.setState({ product: response.data[0] });
      })
      .catch(function(error) {
        console.log(error);
      });
  };
}

export default ApiService;