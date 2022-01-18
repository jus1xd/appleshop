import { Schema, model } from "mongoose";

export interface IProduct {
  title: string;
  subTitle: string;
  price: number;
  _id: string;
  picture: string;
  previewPicture: {};
  specifications: {};
}

const ProductModel = new Schema<IProduct>({
  title: { type: String, required: true },
  subTitle: { type: String, required: true },
  price: { type: Number, required: true },
  picture: { type: String, required: true },
  previewPicture: {
    1: { type: String, required: false },
    2: { type: String, required: false },
    3: { type: String, required: false },
    4: { type: String, required: false },
  },
  specifications: {
    color: { type: String, required: false },
    bodyMaterial: { type: String, required: false },
    protect: { type: String, required: false },
    protectType: { type: String, required: false },
    gradeIP: { type: String, required: false },
    versionOS: { type: String, required: false },
    CPU: { type: String, required: false },
    Kernels: { type: Number, required: false },
    cpuFrequency: { type: String, required: false },
    technicalProcess: { type: String, required: false },
    memory: { type: String, required: false },
    mainCameras: { type: Number, required: false },
    mainCamerasMegapixels: { type: String, required: false },
    mainCamerasAperture: { type: String, required: false },
    videoFormat: { type: String, required: false },
    videoResolutionFrequency: { type: String, required: false },
    doubleFrontCamera: { type: String, required: false },
    frontCameraMegapixels: { type: String, required: false },
    frontCameraAperture: { type: String, required: false },
    autofocus: { type: String, required: false },
    headphonesIncluded: { type: String, required: false },
    chargerIncluded: { type: String, required: false },
    chargerType: { type: String, required: false },
    fastCharge: { type: String, required: false },
    wirelessCharge: { type: String, required: false },
    musicWorkingTime: { type: String, required: false },
    videoWorkingTime: { type: String, required: false },
    width: { type: String, required: false },
    height: { type: String, required: false },
    thickness: { type: String, required: false },
    weight: { type: String, required: false },
    guarantee: { type: String, required: false },
    producerCountries: { type: String, required: false },
    producerCode: { type: String, required: false },
    releaseYear: { type: String, required: false },
    screenDiagonal: { type: String, required: false },
    screenResolution: { type: String, required: false },
    pixelDensity: { type: String, required: false },
    screenTechnologyType: { type: String, required: false },
  },
});

export default model("Product", ProductModel);
