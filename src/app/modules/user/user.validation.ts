import {z} from 'zod';
import { TUser } from './user.interface';

const  userValidationSchema=z.object({
    password: z.string({
       invalid_type_error:"password must be string" 
    }).max(20,{message:"Password cannot be more than 20 characters"}).optional(),
    
})


export const userValidation={
userValidationSchema,
} 