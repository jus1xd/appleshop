import { Schema, model } from "mongoose";

export interface IProduct {
  title: string;
  subTitle: string;
  price: number;
  _id: string;
  picture: string;
  specifications: any;
}

const ProductModel = new Schema<IProduct>({
  title: { type: String, required: true },
  subTitle: { type: String, required: true },
  price: { type: Number, required: true },
  picture: { type: String },
  specifications: {
    bodyMaterial: { type: String },
    protect: { type: String },
    protectType: { type: String },
    gradeIP: { type: String },
    versionOS: { type: String },
    CPU: { type: String },
    Kernels: { type: Number },
    cpuFrequency: { type: String },
    technicalProcess: { type: String },
    memory: { type: String },
    mainCameras: { type: Number },
    mainCamerasMegapixels: { type: String },
    mainCamerasAperture: { type: String },
    videoFormat: { type: String },
    videoResolutionFrequency: { type: String },
    doubleFrontCamera: { type: String },
    frontCameraMegapixels: { type: String },
    frontCameraAperture: { type: String },
    autofocus: { type: String },
    headphonesIncluded: { type: String },
    chargerIncluded: { type: String },
    chargerType: { type: String },
    fastCharge: { type: String },
    wirelessCharge: { type: String },
    musicWorkingTime: { type: String },
    videoWorkingTime: { type: String },
    width: { type: String },
    height: { type: String },
    thickness: { type: String },
    weight: { type: String },
    guarantee: { type: String },
    producerCountries: { type: String },
    producerCode: { type: String },
    releaseYear: { type: String },
    screenDiagonal: { type: String },
    screenResolution: { type: String },
    pixelDensity: { type: String },
    screenTechnologyType: { type: String },
  },
});

export default model("Product", ProductModel);