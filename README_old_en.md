## What is Java Reader?
Java Reader is a tool that helps you read Java code together with a Large Language Model (LLM).

#### [Features]

- Allows the LLM to explore functions without requiring manual reading
- Lets you backtrack through previously explored function paths
- Helps detect bugs in the currently investigated function path using the LLM
- Visualizes the function under investigation as a diagram
- Summarizes the explored function path into a report using the LLM
- Exports and imports the explored function path as JSON

#### [Benefits]

- Enables you to navigate Java code without aimless random walks
- Allows the LLM to summarize hundreds or thousands of lines of function code in under a minute—something that could take over 10 minutes without prior knowledge of the codebase
- Includes functionality for detecting bugs in Java code
- Provides explanations of function paths and logic that would otherwise remain implicit knowledge

#### [Limitations / Human Tasks]
- Identifying the entry point of the codebase
- Choosing which functions to explore (LLM-driven auto-exploration is less accurate)
- It cannot analyze the entire codebase at once without splitting it into parts

#### How to Use
1. Install jdtls

```bash
brew install jdtls
```

2. Install VS Code

Please install version 1.100.0 or later of Visual Studio Code.

3. Install JavaReader

Download java-reader-ja at [vscode store](https://marketplace.visualstudio.com/items?itemName=coffeecupjapan.java-reader-ja&ssr=false#overview).

https://marketplace.visualstudio.com/items?itemName=coffeecupjapan.java-reader-ja&ssr=false#overview 

4. Open the Extension
Once downloaded, open the Command Palette with Command + Shift + P, and click “Open Java Reader Tab”. If a tab opens on the right side, it was successful.

5. Configure settings
Provide the path to jdtls and select your preferred LLM (OpenAI, Claude, or Plamo).

6. Start exploration in the chat UI

To begin, input the following:

- File path to start exploring
- Function to start from
- Purpose of the exploration

This will initiate the analysis process.

7. Guide the Exploration

The LLM will suggest important functions within the current function. You then select which one to explore next. This process repeats as long as you like, allowing you to explore deeper step by step.