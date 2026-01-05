import { z } from "zod"
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

export const CallAnalysisOutputSchema = z.object({
  label: z.string(),
  tasks: z.array(z.object({
    name: z.string(),
    priority: z.number()
  })),
  sales_skills: z.object({
    qualification: z.number(),
    objection_handling: z.number(),
    value_storytelling: z.number(),
    conversational_leadership: z.number(),
    closing: z.number(),
    emotional_intelligence: z.number()
  }),
  decision_making_sphere: z.object({
    situation: z.object({ result: z.boolean(), justification: z.string() }),
    pain: z.object({ result: z.boolean(), justification: z.string() }),
    impact_cost: z.object({ result: z.boolean(), justification: z.string() }),
    past_solutions: z.object({ result: z.boolean(), justification: z.string() }),
    objective: z.object({ result: z.boolean(), justification: z.string() }),
    resistance: z.object({ result: z.boolean(), justification: z.string() }),
    trust: z.object({ result: z.boolean(), justification: z.string() }),
    logistics: z.object({ result: z.boolean(), justification: z.string() }),
    timing_priority: z.object({ result: z.boolean(), justification: z.string() }),
    competitors: z.object({ result: z.boolean(), justification: z.string() }),
    environment: z.object({ result: z.boolean(), justification: z.string() }),
    need_payoff: z.object({ result: z.boolean(), justification: z.string() })
  }),
  next_step: z.boolean(),
  next_step_description: z.string(),
  call_duration: z.number(),
  call_score: z.number(),
  call_type: z.number(),
  sales_talking_time: z.number(),
  prospect_budget_estimate: z.number(),
  competitors: z.array(z.string()),
  list_objections: z.array(z.object({
    type: z.number(),
    text: z.string()
  })),
  lead_quality: z.number(),
  lead_score: z.number(),
  lead_description: z.string(),
  buyer_journey: z.number(),
  product: z.string(),
  prospects: z.array(z.object({
    firstname: z.string(),
    lastname: z.string(),
    profile_disc: z.number(),
    description: z.string()
  })),
  ai_analysis: z.string(),
  sale_completed: z.boolean(),
  insights: z.array(z.string())
})

export type CallAnalysisOutput = z.infer<typeof CallAnalysisOutputSchema>


export const CallAnalysisPrompt: ICoachaaPrompt = {
  user_prompt: userPrompt,
  system_prompt: systemPrompt,
  output_validator: CallAnalysisOutputSchema
}
