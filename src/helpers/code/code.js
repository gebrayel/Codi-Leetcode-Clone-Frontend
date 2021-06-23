const changeTemplate = (lenguaje, templates, setCode) => {
    for (let i = 0; i < templates.length; i++) {
        const curr = templates[i];
        if (curr.language === lenguaje) {
            setCode(curr.code);
            break;
        }
    }
}

export default {
    changeTemplate,
}