import { ICoachaaPrompt } from "../common/interface/prompt-interface"

const user_prompt = ``
const system_prompt = ``

export type TrainingEvaluationPayload = {
  training_evaluation_id: any
}

export type TrainingEvaluationOutput = {
  
}

export const TrainingEvaluationPrompt: ICoachaaPrompt = {
  user_prompt,
  system_prompt,
}
