import {Schema, model} from 'mongoose'

const User = new Schema ( {
    name: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    roles: {type: String, default: "USER"}
} )

export default model ( 'User', User )