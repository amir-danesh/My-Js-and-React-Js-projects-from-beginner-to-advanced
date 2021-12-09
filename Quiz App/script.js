const quizData = [
    {
        question: 'How old is Amir?',
        a: '13',
        b: '19',
        c: '23',
        d: '26',
        correct: 'c'
    },
    {
        question: 'What is the most used programming language in 2021?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'JavaScript',
        correct: 'a'
    },
    {
        question: 'Who is the president of Iran?',
        a: 'Rouhani',
        b: 'Ra\'eisi',
        c: 'Trump',
        d: 'Ahmadi Nezhad',
        correct: 'b'
    },
    {
        question: 'What does HTML stand for?',
        a: 'Hypertext markup Language',
        b: 'Cascading style sheet',
        c: 'jason object notation',
        d: 'application programming interface',
        correct: 'a'
    },
    {
        question: 'What year was JavaScript launched?',
        a: '1996',
        b: '1990',
        c: '1993',
        d: 'None of above',
        correct: 'd'
    }
];

const answersEls = document.querySelectorAll('.answer');
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
a_text = document.getElementById("a_text");
b_text = document.getElementById("b_text");
c_text = document.getElementById("c_text");
d_text = document.getElementById("d_text");
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answersEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer
}

function deselectAnswers() {
    answersEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    // Check to see the answer
    const answer = getSelected();

    console.log(answer)

    if (answer) {
        if (answer ===quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        }
        else{
            quiz.innerHTML = `<h2>you answered correctly at ${score}/${quizData.length} questions.</h2><button onclick="location.reload()">Reload</button>`
        }
    }
    
})