import { ICoachaaPrompt } from "@/common/interface/prompt-interface"
import systemPrompt from "./system-prompt.md"
import userPrompt from "./user-prompt.md"


export type NewPromptPayload = {
  training_evaluation_id: any
}

export type NewPromptOutput = {
  
}

export const NewPromptPrompt: ICoachaaPrompt = {
  user_prompt: userPrompt,
  system_prompt: systemPrompt,
}
