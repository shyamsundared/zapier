
import {minLength, string, z} from "zod"

export const signupschema = z.object({
    name :z.string().min(3),
    username:z.string().min(5),
    password:z.string().min(6)
})

export const signinschema = z.object({
    username :z.string(),
    
    password:z.string()
})
export const Zapcreateschema =z.object({
    availableTriggerId:z.string(),
    triggerMetadata:z.any().optional(),
    actions:z.array(z.object({
        availableActionId:z.string(),
        actionMetadata:z.any().optional()
}))
})