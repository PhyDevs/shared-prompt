import { ICoachaaPrompt } from "@/common/interface/prompt-interface"
import systemPrompt from "./system-prompt.md"
import userPrompt from "./user-prompt.md"


export type TrainingGenerationPayload = {
  training_id: any
}

export type TrainingGenerationOutput = {

}

export const TrainingGenerationPrompt: ICoachaaPrompt = {
  user_prompt: userPrompt,
  system_prompt: systemPrompt,
}
