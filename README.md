# Project Automation & Git Workflow

This project contains a utilities to generate Prompt files.

## How to Run
1. Install dependencies: `npm install`
2. Generate a module: `npm run generate -- "prompt-name"`

---

## Git Workflow Guide

### 1. Commit and Push Changes

```bash
# Stage all changes
 git add .

# Commit with a message
git commit -m "feat: a new prompt"

# Push to the remote repository
git push origin main
```

### 2. Version Tagging
```bash
# Create an annotated tag
git tag v1.0.6

# Push the tag to the remote server
git push origin v1.0.6
```


### 3. Update package version on node-coacha
```bash
"@coachaa/prompt": "github:Coachaa/prompt#v1.0.6",
```