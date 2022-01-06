import {Schema, model} from 'mongoose';

const UserModel = new Schema ( {
    username: {type: String, required: true},
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    role : {type : String, default: 'USER'},
    isActivated: {type: Boolean, required: true, default: false},
    cart: {type: [String], default: [] },
    activationLink: {type: String}
} )

export default model ( 'User', UserModel )