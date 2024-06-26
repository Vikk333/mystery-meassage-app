import {z} from "zod"

export const verifySchema = z.object({
    Code:z.string().length(6,'must be c digits'),

})