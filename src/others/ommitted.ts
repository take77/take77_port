const contentOmit = (content: string, maxLength: number) => {
    if (content.length > maxLength) {
        return content.substr(0, maxLength) + '...'
    };

    return content;
};

export default contentOmit;
