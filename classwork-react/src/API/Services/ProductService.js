import { HttpClient } from "../HttpClient";

class ProductService extends HttpClient {
  constructor() {
    super("https://624b1a8b44505084bc4c3fd0.mockapi.io");
  }

  getAllProducts() {
    return this.get("products");
  }
  getProductById(id){
    return this.getById("products",id)
  }
  postProduct(body){
    return this.post("products",body)
  }
}

export const productService = new ProductService();