// import axios from "axios";

// class CrudService {
//   constructor() {
//     const service = axios.create({
//       baseURL: "http://localhost:3004",
//       withCredentials: true
//     });
//     this.service = service;
//   }
//   getProduct(itemsId) {
//     let products = []
//     itemsId.map((item) => {
//       this.service
//         .get(`/product?id=${item}`)
//         .then(response => products.push(response.data));
//     })
//     return products
//   }
// }

// export default CrudService;
