import {Schema, model} from "mongoose";
import {Product, Review} from '../../client/src/types'

const ProductModel = new Schema<Product> ( {
    title: {type: String, required: true},
    subTitle: String,
    price: {type: Number, required: true},
    picture: {type: String, required: true},
    reviews: {type : [{} as Review], default: []},
    previewPicture: {
        1: String,
        2: String,
        3: String,
        4: String,
    },
    specifications: {
        common: {
            guarantee: {type: String, required: true},
            series: String,
            category: String,
            releaseYear: String,
            producerCountries: String,
            producerCode: String,
        },
        appearance: {
            bodyMaterial: String,
            color: String,
        },
        screen: {
            screenDiagonal: String,
            screenResolution: String,
            pixelDensity: String,
            screenTechnologyType: String,
        },
        system: {
            versionOS: String,
            CPU: String,
            Kernels: String,
            cpuFrequency: String,
            technicalProcess: String,
            memory: String,
        },
        protection: {
            protectType: String,
            protect: String,
            gradeIP: String,
        },
        mainCamera: {
            mainCameras: Number,
            mainCamerasMegapixels: String,
            mainCamerasAperture: String,
            opticalStabilization: String,
            autofocus: String,
        },
        frontCamera: {
            doubleFrontCamera: String,
            frontCameraMegapixels: String,
            frontCameraAperture: String,
            autofocus: String,
        },
        videoCapture: {
            videoFormat: String,
            videoResolutionFrequency: String,
        },
        audio: {
            stereo: String,
            audioFormats: String,
        },
        communications: {
            bluetooth: String,
            nfc: String,
        },
        mobileConnection: {
            lteFreq: String,
            simFormat: String,
            eSim: String,
            simsCount: String,
        },
        size: {
            width: String,
            height: String,
            thickness: String,
            weight: String,
        },
        battery: {
            chargerType: String,
            fastCharge: String,
            wirelessCharge: String,
            musicWorkingTime: String,
            videoWorkingTime: String,
        },
        package: {
            headphonesIncluded: String,
            chargerIncluded: String,
            complectation: String,
        },
    },
} )

export default model ( "Product", ProductModel );
