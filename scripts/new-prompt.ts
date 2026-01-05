import { mkdir, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import * as path from 'node:path'


const promptFileTemplate = (promptName: string) => `import z from "zod"
import { ICoachaaPrompt } from "@/common/interface/prompt-interface"
import systemPrompt from "./system-prompt.md"
import userPrompt from "./user-prompt.md"


export type ${promptName}Payload = {
  name: string
}

export const ${promptName}OutputSchema = z.object({
  outpout_name: z.string(),
})
export type ${promptName}Output = z.infer<typeof ${promptName}OutputSchema>

export const ${promptName}Prompt: ICoachaaPrompt = {
  user_prompt: userPrompt,
  system_prompt: systemPrompt,
  output_validator: ${promptName}OutputSchema
}
`


/**
 * String format helpers
 */
const toKebabCase = (str: string): string => {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

const toPascalCase = (str: string): string => {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+(.)/g, (match, group1) => group1.toUpperCase())
    .replace(/^(.)/, (match) => match.toUpperCase()); // Capitalize the first letter
}


/**
 * File system helpers
 */
const createDir = async (dir: string): Promise<boolean> => {
  try {
    if (!await existsSync(dir)) {
      await mkdir(dir, { recursive: true })
      console.log(`✅ Successfully created folder: "${dir}"`)
      return true
    } else {
      console.warn(`❌ Folder "${dir}" already exists.`)
      return false
    }
  } catch (err) {
    console.error("❌ Failed to create folder:", err)
    return false
  }
}

const createFile = async (filePath: string, content?: string) => {
  try {
    const _content = `// Auto-generated file for ${filePath}\nconsole.log("Module ${filePath} initialized");\n`;

    await writeFile(filePath, content || _content);

    console.log(`✅ Created: ${filePath}`);
  } catch (err) {
    console.error("❌ Failed to create directory structure:", err);
  }
}

/**
 * Main entry
 */
async function main() {
  const nameArg: string | undefined = process.argv[2]
  if (!nameArg) {
    console.error("Error: Please provide a prompt name as an argument.")
    console.log("Usage: npm run create -- <prompt_name>")
    process.exit(1)
  }


  const inputPrompt: string | undefined = process.argv[2]
  if (!inputPrompt) {
    console.error("Error: Please provide a prompt name.")
    process.exit(1)
  }


  const promptPath = path.join('src/prompts', toKebabCase(inputPrompt))
  if (!await createDir(promptPath)) {
    process.exit(1)
  }

  await createFile(path.join(promptPath, 'index.ts'), promptFileTemplate(toPascalCase(inputPrompt)))
  await createFile(path.join(promptPath, 'system-prompt.md'), 'You are a professional {{role}}.')
  await createFile(path.join(promptPath, 'user-prompt.md'), 'Do this task.')

  console.log('\n\n||=========== Next step go to src/index.ts file ============||')
  console.log('||  1: Add prompt name same as in Database.                 ||')
  console.log('||  2: Map prompt name to the appropriate prompt content.   ||')
  console.log('||  3: Map prompt name to the appropriate payload & output. ||')
  console.log('||==========================================================||')
}

main()
