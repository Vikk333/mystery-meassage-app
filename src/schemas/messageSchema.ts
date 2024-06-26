import {z} from "zod"

export const acceptMeassageSchema = z.object({
  content:z
  .string()
  .min(10,{message:'at leat 10 chars'})
  .max(300,{message:'ma could me 300 chars'})
})