materialObj.getAllAnswerWidgets().forEach((question) => {
    const warnSecured = (question) => {
        if (question.props.isSecured == true) {
            question.element.before(`<div style="background-color: red;">This question is secured, the answers might not be correct!</div>`);
        }
    };

    if (question.getWidgetClass() == "AbcdAnswerETestWidget") {
        const answers = question.props.correctAnswers;
        const id = question.id;

        

        if (answers == undefined) {
            return;
        }

        for (let i = 0; i < answers.length; i++) {
            const targetElements = document.querySelector(`[data-wid="${id}"]`)?.querySelectorAll(`[data-answerid="${answers[i]}"]`);
            
            if (targetElements == undefined) {
                continue;
            }
            
            for (let k = 0; k < targetElements.length; k++) {
                targetElements[k].style.border = "2px solid #2196F3";
            }
        }

        warnSecured(question);
    }
    else if (question.getWidgetClass() == "InputAnswerETestWidget") { // old code
        const answers = question.props.correctAnswers;

        if (answers.length == 0) {
            question.element.before("<div style='background: red; color: white; padding: 5px;'>I can't find the answer to this question...</div>");
            return;
        } 

        for (let i = 0; i < answers.length; i++) {
            question.element.before("<br><br><span style='border: 2px solid #2196F3; background: white; color: black; padding: 5px; margin: 5px;'>Answer: " + answers[i] + " </span><br><br></br>");
        }

        warnSecured(question);
    }
    else if (question.getWidgetClass() == "OrderingAnswerETestWidget") {
        const answers = question.props.answers;

        if (answers.length == 0) {
            question.element.before("<div style='background: red; color: white; padding: 5px;'>I can't find the answer to this question...</div>");
            return;
        }

        let output = "<div style='background-color: #2196F3; color: white; padding: 5px; margin: 0;'>Correct order:<ol style='list-style-type: decimal; padding-left: 30px;'>";

        for (let i = 0; i < answers.length; i++) {
            const answerText = answers[i].text;
            output += `<li> ${answerText} </li>`;
        }

        output += "</div>";

        question.element.before(output);
        
        warnSecured(question);
    }
    else if (question.getWidgetClass() == "GroupsAnswerETestWidget") {
        const groups = question.props.groups;
        
        let output = "<div style='background-color: #2196F3; color: white; padding: 5px; margin: 0;'>Correct grouping:<div>"
        for (let i = 0; i < groups.length; i++) {
            const group = groups[i].items;
            
            output += `<div> ${groups[i].title} </div><ol style='list-style-type: decimal; padding-left: 30px;'>`
            for (let j = 0; j < group.length; j++) {
                output += `<li> ${group[j].text} </li>`;
            }
            output += "</ol>"            
        }
        output += "</div>";

        question.element.before(output);

        warnSecured(question);
    }
    else if (question.getWidgetClass() == "ConnectAnswerETestWidget") {
        const correctAnswers = question.props.pairs;
        let output = "<div style='background-color: #2196F3; color: white; padding: 5px; margin: 0;'>Correct answers:<ol style='list-style-type: decimal; padding-left: 30px;'>"
        for (answerid = 0; answerid < correctAnswers.length; answerid++) {
            output += `<li> ${correctAnswers[answerid].l}`;
            output +=  `${correctAnswers[answerid].r} </li>`;
        }
        output += "</ol></div>"
        question.element.before(output);
        question.element[0].style = "border: 2px solid #2196F3;";

        warnSecured(question);
    }
    else if (question.getWidgetClass() == "MapAnswerETestWidget") {
        const points = question.props.points;
        for (let i = 0; i < points.length; i++) {
            const currentPoint = points[i];
            
            const answer = document.querySelectorAll(`[data-id="${currentPoint.pointid}"]`)[0];
            const point = document.querySelectorAll(`[data-id="${currentPoint.r_pointid}"]`)[0];

            answer.addEventListener("mouseenter", () => {
                point.style.backgroundColor = "green";
            });

            answer.addEventListener("mouseleave", () => {
                point.style.backgroundColor = "";
            });
        }

        warnSecured(question);
    }
});