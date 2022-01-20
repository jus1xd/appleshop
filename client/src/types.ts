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
}

export interface CartProduct {
  id: string;
  price: number;
  quantity: number;
  img?: string;
  name?: string;
}

interface Review {
  review: {
    authorID: string;
    comment: string;
    rating: number;
    date: Date;
    usageTime: string;
    replies: {
      author: string;
      comment: string;
      date: Date;
    };
  };
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
    common: {
      guarantee: string;
      producer: string;
      series: string;
      type: string;
      model: string;
      releaseYear: string;

      producerCountries: string;
      producerCode: string;
    };
    appearance: {
      bodyMaterial: string;
      color: string;
    };
    screen: {
      screenDiagonal: string;
      screenResolution: string;
      pixelDensity: string;
      screenTechnologyType: string;
    };
    system: {
      versionOS: string;
      CPU: string;
      Kernels: number;
      cpuFrequency: string;
      technicalProcess: string;
      memory: string;
    };
    protection: {
      protectType: string;
      protect: string;
      gradeIP: string;
    };
    mainCamera: {
      mainCameras: number;
      mainCamerasMegapixels: string;
      mainCamerasAperture: string;
      opticalStabilization: string;
      autofocus: string;
    };
    frontCamera: {
      doubleFrontCamera: string;
      frontCameraMegapixels: string;
      frontCameraAperture: string;
      autofocus: string;
    };
    videoCapture: {
      videoFormat: string;
      videoResolutionFrequency: string;
    };
    audio: {
      stereo: string;
      audioFormats: string;
    };
    communications: {
      bluetooth: string;
      nfc: string;
    };
    mobileConnection: {
      lteFreq: string;
      simFormat: string;
      eSim: string;
      simsCount: string;
    };
    size: {
      width: string;
      height: string;
      thickness: string;
      weight: string;
    };

    battery: {
      chargerType: string;
      fastCharge: string;
      wirelessCharge: string;
      musicWorkingTime: string;
      videoWorkingTime: string;
    };
    package: {
      headphonesIncluded: string;
      chargerIncluded: string;
      complectation: string;
    };
  };
  reviews: Review[];
  isLoading?: boolean;
  error?: string;
}
