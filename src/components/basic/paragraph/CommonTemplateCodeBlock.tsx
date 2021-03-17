import React from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierCaveDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CommonTemplateCodeBlock = ({ content }) => {
    const codeContent = content[0];
    const languageAssign = codeContent.match(/<language:\s\w+>/)[0];
    const language = languageAssign.split('')[1].replace('>', '');
    const codeContentAdjusted = codeContent.replace('<Code Block>', '').replace(/<language:\s\w+>/, '').replace(/\r?\n/, '');

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
