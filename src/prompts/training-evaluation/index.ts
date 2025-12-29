import { ICoachaaPrompt } from "@/common/interface/prompt-interface"
import systemPrompt from "./system-prompt.md"
import userPrompt from "./user-prompt.md"


export type TrainingEvaluationPayload = {
  training_evaluation_id: any
}

export type TrainingEvaluationOutput = {
  
}

export const TrainingEvaluationPrompt: ICoachaaPrompt = {
  user_prompt: userPrompt,
  system_prompt: systemPrompt,
}
