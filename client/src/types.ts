export interface MainReducer {
  products: Product[];
  cart: CartProduct[];
  isLoading: boolean;
  error: string;
}
export interface IUser {
  refreshToken: string;
  accessToken: string;
  id: string;
  username: string;
  role: string;
  cart: CartProduct[];
}

export interface AuthReducer {
  user?: IUser;
  isAuth: boolean;
  isLoading: boolean;
  error: string;
}
export interface CompareReducer {
  compareItems: Product[];
  isLoading?: boolean;
  error?: string;
}

export interface CartProduct {
  _id: string;
  price: number;
  quantity: number;
}

export interface Product {
  _id: string;
  title: string;
  subTitle: string;
  price: number;
  picture: string;
  previewPicture: {
    1: string;
    2: string;
    3: string;
    4: string;
  };
  specifications: {
    color: string;
    bodyMaterial: string;
    protect: string;
    protectType: string;
    gradeIP: string;
    versionOS: string;
    CPU: string;
    Kernels: number;
    cpuFrequency: string;
    technicalProcess: string;
    memory: string;
    mainCameras: number;
    mainCamerasMegapixels: string;
    mainCamerasAperture: string;
    videoFormat: string;
    videoResolutionFrequency: string;
    doubleFrontCamera: string;
    frontCameraMegapixels: string;
    frontCameraAperture: string;
    autofocus: string;
    headphonesIncluded: string;
    chargerIncluded: string;
    chargerType: string;
    fastCharge: string;
    wirelessCharge: string;
    musicWorkingTime: string;
    videoWorkingTime: string;
    width: string;
    height: string;
    thickness: string;
    weight: string;
    guarantee: string;
    producerCountries: string;
    producerCode: string;
    releaseYear: string;
    screenDiagonal: string;
    screenResolution: string;
    pixelDensity: string;
    screenTechnologyType: string;
  };
  isLoading?: boolean;
  error?: string;
}
