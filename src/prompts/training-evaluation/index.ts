import { ICoachaaPrompt } from "@/common/interface/prompt-interface"
import systemPrompt from "./system-prompt.md"
import userPrompt from "./user-prompt.md"
import z from "zod"


export type TrainingEvaluationPayload = {
  training_evaluation_id: any
}

export const TrainingEvaluationOutputSchema = z.object({
  eval_feedback: z.number(),
})
export type TrainingEvaluationOutput = z.infer<typeof TrainingEvaluationOutputSchema>

export const TrainingEvaluationPrompt: ICoachaaPrompt = {
  user_prompt: userPrompt,
  system_prompt: systemPrompt,
  output_validator: TrainingEvaluationOutputSchema
}
