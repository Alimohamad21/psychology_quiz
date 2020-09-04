var count = 1, result = "", points = 0;

document.addEventListener("DOMContentLoaded", function () {
    var answers = document.getElementsByClassName("answer");
    for (var i = 0; i < answers.length; i++) {
        answers[i].addEventListener("click", function () {
            this.selected = true;
        })
        answers[i].addEventListener("blur", function () {
            // this.selected=false;
        })
    }

    document.querySelector("#number").textContent = "Question " + count.toString() + " of 9:";
    document.querySelector("#next").addEventListener("click", function () {
            if (answers[0].selected || answers[1].selected || answers[2].selected) {
                count++;
                if (count > 9) {
                    window.location.href = "results.html";
                    return;
                }
                document.querySelector("#number").textContent = "Question " + count.toString() + " of 9:";
                document.querySelector(".question").textContent = getQuestion();
                for (var i = 0; i < answers.length; i++)
                    answers[i].selected = false;
            } else {alert("Please select an Answer!");console.log("error");}

        }
    )

});

function getQuestion() {
    if (count === 2)
        return "Do you have a lack of remorse/emotion?";
    if (count === 3)
        return "q3";
    if (count === 4)
        return "q4";
    if (count === 5)
        return "q5";
    if (count === 6)
        return "q6";
    if (count === 7)
        return "q7";
    if (count === 8)
        return "q8";
    if (count === 9)
        return "q9";
}


