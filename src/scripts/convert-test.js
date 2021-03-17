const answerWidgets = materialObj.getAllAnswerWidgets();

if (answerWidgets.length != 0) {
    const baseWidgetElem = answerWidgets[0].mainWidget.element[0];
    answerWidgets.forEach(answerWidget => {
        const currentElement = answerWidget.element[0];

        if (currentElement != undefined) {
            return;
        }

        
    });
}
else {
    barShowMessage('Failed to convert test!');
}