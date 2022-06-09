const quizData = [
    {
        question: "What is the capital of India?",
        a: "Mumbai",
        b: "Delhi",
        c: "Pune",
        d: "Lucknow",
        correct: "b"
    },
    {
        question: "Which is the most popular language in programming?",
        a: "C++",
        b: "Python",
        c: "JavaScript",
        d: "Java",
        correct: "c"
    },
    {
        question: "HTML stands for ",
        a: "HyperText Makeup Language",
        b: "HyperTest Markup Language",
        c: "HightText Markup Language",
        d: "HyperText Markup Language",
        correct: "d"
    },
    {
        question: "Which is not the part of India?",
        a: "Kerala",
        b: "Assam",
        c: "Jammu and Kashmir",
        d: "Dhaka",
        correct: "d"
    },
    {
        question: "Which is not related to OOPS?",
        a: "Inheritence",
        b: "Bugs",
        c: "Class",
        d: "Abstract",
        correct: "b"
    }
]

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswer();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerHTML = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;

    // currentQuiz++;
}

function getSelected() {


    let answer = undefined;

    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    })

    return answer;
}

function deselectAnswer() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    })
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;

        if (currentQuiz < quizData.length) {

            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You Answered correctly at ${score}/${quizData.length} questions.</h2> <button onClick="location.reload()"> Reload </button>`;
        }
    }
})