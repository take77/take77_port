import React from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierCaveDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const codeContentformat = codeContent => {
    const languageAssign = codeContent.match(/<language:\s\w+>/)[0];
    const language = languageAssign.split('')[1].replace('>', '');
    const codeContentAdjusted = codeContent.replace('<Code Block>', '').replace(/<language:\s\w+>/, '').replace(/\r?\n/, '');

    return [language, codeContentAdjusted]
};

const CommonTemplateCodeBlock = ({ content }) => {
    const [language, codeContentAdjusted] = codeContentformat(content[0])

    return (
        <SyntaxHighlighter
            showLineNumbers
            style={atelierCaveDark}
            language={language}
        >
            {codeContentAdjusted}
        </SyntaxHighlighter>
    )
};

export default CommonTemplateCodeBlock;
