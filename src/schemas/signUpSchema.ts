import { z } from "zod";

export const usernameValidation=z
.string()
.min(2,"must be atleat 2 characters")
.max(20,"must be np more then 20")
.regex(/^[a-zA-Z0-9_]+$/,"must not contain special characters")


export const signUpSchema = z.object({
    username:usernameValidation,
    email:z.string().email({message:'Invalid email address'}),
    password:z.string().min(6,{message:"atleast 6 chars"}),
    
})