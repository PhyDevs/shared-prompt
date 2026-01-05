import z from "zod"
import { ICoachaaPrompt } from "@/common/interface/prompt-interface"
import systemPrompt from "./system-prompt.md"
import userPrompt from "./user-prompt.md"


export type TrainingGenerationPayload = {
  training_id: any
}


export const TrainingGenerationOutputSchema = z.object({
  outpout_id: z.string(),
})
export type TrainingGenerationOutput = z.infer<typeof TrainingGenerationOutputSchema>

export const TrainingGenerationPrompt: ICoachaaPrompt = {
  user_prompt: userPrompt,
  system_prompt: systemPrompt,
  output_validator: TrainingGenerationOutputSchema
}
