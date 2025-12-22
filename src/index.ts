import { ICoachaaPrompt } from "@/common/interface/prompt-interface"
import { CallAnalysisPrompt, CallAnalysisPayload, CallAnalysisOutput } from "@/prompts/call-analysis"
import { TrainingGenerationPrompt, TrainingGenerationPayload, TrainingGenerationOutput } from "@/prompts/training-generation"
import { TrainingEvaluationPrompt, TrainingEvaluationPayload, TrainingEvaluationOutput } from "@/prompts/training-evaluation"

// ==> 1: Add prompt name same as in Database
export enum COACHAA_PROMPT {
  CALL_ANALYSIS = 'CALL_ANALYSIS',
  TRAINING_GENERATION = 'TRAINING_GENERATION',
  TRAINING_EVALUATION = 'TRAINING_EVALUATION',
}

// ==> 2: Map prompt name to the appropriate prompt content 
export const CoachaaPromptMap: Record<COACHAA_PROMPT, ICoachaaPrompt> = {
  CALL_ANALYSIS: CallAnalysisPrompt,
  TRAINING_GENERATION: TrainingGenerationPrompt,
  TRAINING_EVALUATION: TrainingEvaluationPrompt,
}

// ==> 3: Map prompt name to the appropriate payload & output 
export interface ICoachaaPromptMap {
  [COACHAA_PROMPT.CALL_ANALYSIS]: {
    payload: CallAnalysisPayload,
    output: CallAnalysisOutput
  },

  [COACHAA_PROMPT.TRAINING_GENERATION]: {
    payload: TrainingGenerationPayload,
    output: TrainingGenerationOutput
  },

  [COACHAA_PROMPT.TRAINING_EVALUATION]: {
    payload: TrainingEvaluationPayload,
    output: TrainingEvaluationOutput
  }
}



// -============-
// async function execute<K extends COACHAA_PROMPT>(
//   promptKey: K,
//   payload: ICoachaaPromptMap[K]["payload"],
// ): Promise<any> {

// }

// execute(COACHAA_PROMPT.TRAINING_EVALUATION, {training_evaluation_id: ''})