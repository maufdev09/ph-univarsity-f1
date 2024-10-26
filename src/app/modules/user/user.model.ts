import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";

const userSchema = new Schema<TUser>({
    id:{type: String,required: true},
    password:{
        type: String,
        required: true,
      
    },
    needsPasswordChange:{
        type: Boolean,
        default: true,
    },
    role:{
        type:String,
        enum: ['admin','student','faculty'],
        required: true,
    },
    status:{
        type: String,
        enum: ['in-progress','blocked'],
        required: true,
        default: 'in-progress'
    },
    isDelete:{
        type: Boolean,
        default: false,
    },

},
{
    timestamps: true,
    
})



export const  User=model<TUser>('User',userSchema);