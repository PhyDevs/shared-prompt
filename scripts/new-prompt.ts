import { mkdir, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import * as path from 'node:path'


/**
 * String format helpers
 */
const toKebabCase = (str: string): string => {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

/**
 * File system helpers
 */
const createDir = async (dir: string): Promise<boolean> => {
  try {
    if (!await existsSync(dir)) {
      await mkdir(dir, { recursive: true })
      console.log(`Successfully created folder: "${dir}"`)
      return true
    } else {
      console.warn(`Folder "${dir}" already exists.`)
      return false
    }
  } catch (err) {
    console.error("Failed to create folder:", err)
    return false
  }
}

const createFile = async (filePath: string, content?: string) => {
  try {
    const _content = `// Auto-generated file for ${filePath}\nconsole.log("Module ${filePath} initialized");\n`;

    await writeFile(filePath, content || _content);

    console.log(`✅ Success!`);
    console.log(`Created: ${filePath}`);
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

  await createFile(path.join(promptPath, 'index.ts'))
  await createFile(path.join(promptPath, 'system-prompt.md'), 'You are a professional {{role}}.')
  await createFile(path.join(promptPath, 'user-prompt.md'), 'Do this task.')
}

main()
