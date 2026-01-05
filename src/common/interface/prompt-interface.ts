import { ZodObject } from "zod"


export interface ICoachaaPrompt {
  user_prompt: string
  system_prompt: string
  output_validator: ZodObject
}
