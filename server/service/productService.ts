import { Product } from "../../client/src/types";
import productModel from "../models/productModel";
import fileService from "./fileService";

class ProductService {
  async create(product: Product, imgFiles: any) {
    const mainPicture = fileService.saveFile(imgFiles.picture);
    const prevOne = fileService.saveFile(imgFiles[`previewPicture.1`]);
    const prevTwo = fileService.saveFile(imgFiles[`previewPicture.2`]);
    const prevThree = fileService.saveFile(imgFiles[`previewPicture.3`]);
    return await productModel.create({
      ...product,
      picture: mainPicture,
      previewPicture: { 1: prevOne, 2: prevTwo, 3: prevThree },
    });
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

  async getSortedProducts(query) {
    const price = query.price.split("-");
    const lowerPrice = +price[0];
    const highPrice = +price[1];
    return productModel.find({ price: { $gte: lowerPrice, $lte: highPrice } });
  }
}

export default new ProductService();
