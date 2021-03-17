const injectScript = (uri) => {
    const script = document.createElement('script');
    script.src = uri;

    (document.head || documentElement).appendChild(script);
}

const showAnswers = () => {
    const scriptUri = chrome.extension.getURL('src/scripts/correct-answers.js');
    injectScript(scriptUri);
};

const convertTest = () => {
    const scriptUri = chrome.extension.getURL('src/scripts/convert-test.js');
    injectScript(scriptUri);
}

const reorderQuestions = () => {
    const scriptUri = chrome.extension.getURL('src/scripts/reorder-questions.js');
    injectScript(scriptUri);
}