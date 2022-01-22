import {Product} from '../../client/src/types'
import productModel from "../models/productModel";
import fileService from "./fileService";

class ProductService {
  async create(product: Product, picture: string) {
    const fileName = fileService.saveFile(picture);
    return await productModel.create({ ...product, picture: fileName });
  }

  async getAll() {
    return productModel.find();
  }

  async getOne(id: string) {
    const product = await productModel.findById(id);
    if (!id) {
      throw new Error("Id не указан");
    }
    return product;
  }

  async update(product: Product) {
    if (!product._id) {
      throw new Error("Id не указан");
    }
    return productModel.findByIdAndUpdate(product._id, product, { new: true });
  }

  async delete(id: string) {
    if (!id) {
      throw new Error("не указан ID");
    }
    return productModel.findByIdAndDelete(id);
  }
}

export default new ProductService();
