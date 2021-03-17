const execJSInCurrentTab = async (code) => {
    await chrome.tabs.executeScript(null, {
        code: code
    });
}

const reorderQuestionsButton = document.getElementById('reorder-questions-btn');
reorderQuestionsButton.onclick = () => {
    execJSInCurrentTab('reorderQuestions()');
}

const showAnswersButton = document.getElementById('correct-answers-btn');
showAnswersButton.onclick = async () => {
    execJSInCurrentTab('showAnswers()');
}

const convertButton = document.getElementById('remove-pages-btn');
convertButton.onclick = () => {
    execJSInCurrentTab('convertTest()')
};