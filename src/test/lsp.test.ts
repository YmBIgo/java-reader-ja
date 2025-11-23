import * as assert from 'assert';
import {
    getFunctionContentFromLineAndCharacter,
    getFileLineAndCharacterFromFunctionName
} from "../core/lsp";
import documentWriter_content from "./stub/lsp/documentWriter_content.json";
import indexWriter_content from "./stub/lsp/indexWriter_content.json";
import path from "path";

// please edit pathToYourDirectory when you want to test it.
const pathToYourDirectory = "/Users/kazuyakurihara/Documents/work/llm/OJT/java-reader-ja"

suite('Extension LSP', () => {
    // getFunctionContentFromLineAndCharacter
    // 行数・何文字目・ファイルパスから、関数の内容を取得
    // DocumentWriter.java
    test("getFunctionContentFromLineAndCharacter DocumentWriter.java", async() => {
        const stubFilePath = path.resolve(pathToYourDirectory, "src", "test", "stub", "lsp", "DocumentWriter.java");
        for(let i = 0; i < documentWriter_content.length; i++) {
            const currentFileContent = documentWriter_content[i];
            const functionContent = await getFunctionContentFromLineAndCharacter(
                stubFilePath,
                currentFileContent.line,
                currentFileContent.character
            );
            assert.strictEqual(functionContent, currentFileContent.functionContent);
        }
    });

    test("getFunctionContentFromLineAndCharacter DocumentWriter.java", async() => {
        const stubFilePath = path.resolve(pathToYourDirectory, "src", "test", "stub", "lsp", "IndexWriter.java");
        for(let i = 0; i < indexWriter_content.length; i++) {
            const currentFileContent = indexWriter_content[i];
            const functionContent = await getFunctionContentFromLineAndCharacter(
                stubFilePath,
                currentFileContent.line,
                currentFileContent.character
            );
            assert.strictEqual(functionContent, currentFileContent.functionContent);
        }
    });

    // getFileLineAndCharacterFromFunctionName
    // 関数の先頭１行目とファイルパスから、行数・何文字目かを取得
    // DocumentWriter.java !isFirst
    test('getFileLineAndCharacterFromFunctionName !isFirst DocumentWriter.java', async() => {
        const stubFilePath = path.resolve(pathToYourDirectory, "src", "test", "stub", "lsp", "DocumentWriter.java");
        for(let i = 0; i < documentWriter_content.length; i++) {
            const currentFileContent = documentWriter_content[i];
            const [line, character] = await getFileLineAndCharacterFromFunctionName(
                stubFilePath,
                currentFileContent.firstLine,
                currentFileContent.functionName,
            );
            console.log("current DocumentWriter : ", currentFileContent.queryLine, currentFileContent.queryCharacrer);
            assert.strictEqual(line, currentFileContent.queryLine);
            assert.strictEqual(character, currentFileContent.queryCharacrer);
        }
    });
    // DocumentWriter.java isFirst
    test('getFileLineAndCharacterFromFunctionName isFirst DocumentWriter.java', async() => {
        const stubFilePath = path.resolve(pathToYourDirectory, "src", "test", "stub", "lsp", "DocumentWriter.java");
        for(let i = 0; i < documentWriter_content.length; i++) {
            const currentFileContent = documentWriter_content[i];
            const [line, character] = await getFileLineAndCharacterFromFunctionName(
                stubFilePath,
                currentFileContent.firstLine,
                currentFileContent.firstLine,
                true,
            );
            console.log("current DocumentWriter : ", currentFileContent.line, currentFileContent.character);
            assert.strictEqual(line, currentFileContent.line);
            assert.strictEqual(character, currentFileContent.character);
        }
    });

    // DocumentWriter !isFirst
    test('getFileLineAndCharacterFromFunctionName !isFirst DocumentWriter.java', async() => {
        const stubFilePath = path.resolve(pathToYourDirectory, "src", "test", "stub", "lsp", "IndexWriter.java");
        for(let i = 0; i < indexWriter_content.length; i++) {
            const currentFileContent = indexWriter_content[i];
            const [line, character] = await getFileLineAndCharacterFromFunctionName(
                stubFilePath,
                currentFileContent.firstLine,
                currentFileContent.functionName,
            );
            console.log("current DocumentWriter : ", currentFileContent.line, currentFileContent.character);
            assert.strictEqual(line, currentFileContent.line);
            assert.strictEqual(character, currentFileContent.character);
        }
    });
});