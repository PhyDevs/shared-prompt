import { ICoachaaPrompt } from "@/common/interface/prompt-interface"
import systemPrompt from "./system-prompt.md"
import userPrompt from "./user-prompt.md"


export type CallAnalysisPayload = {
  business_description: any[]
  products_with_pitches: any[]
  palybook: any[]
  scripts: any[]
  call_history: any[]
  transcript: any[]
}

export type CallAnalysisOutput = {

}

export const CallAnalysisPrompt: ICoachaaPrompt = {
  user_prompt: userPrompt,
  system_prompt: systemPrompt,
}
