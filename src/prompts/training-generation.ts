import { ICoachaaPrompt } from "../common/interface/prompt-interface"

const user_prompt = ``
const system_prompt = ``

export type TrainingGenerationPayload = {
  training_id: any
}

export type TrainingGenerationOutput = {
  
}

export const TrainingGenerationPrompt: ICoachaaPrompt = {
  user_prompt,
  system_prompt,
}
