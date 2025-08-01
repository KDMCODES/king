const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonElement = document.getElementById('answer-button');

let shuffledQuestions, currentQuestionIdex;
let quizScore = 0;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIdex++;
    setnextQuestion();
});

function startGame() {
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIdex = 0;
    questionContainerElement.classList.remove('hide');
    setnextQuestion();
    quizScore = 0;
    resetScoreDisplay();
}

function setnextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIdex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answer.forEach((answer) => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonElement.appendChild(button);
    });
}

function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerButtonElement.firstChild) {
        answerButtonElement.removeChild(answerButtonElement.firstChild);
    }
}


function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;

    setStatusClass(document.body, correct);
    Array.from(answerButtonElement.children).forEach((button) => {
        setStatusClass(button, button.dataset.correct);
    });
    if (shuffledQuestions.length > currentQuestionIdex + 1) {
        nextButton.classList.remove("hide");
    } else {
        startButton.innerText = "Restart";
        startButton.classList.remove("hide");
    }
    if (selectedButton.dataset.correct) {
        quizScore++;
    }
    updateScoreDisplay();
}

function updateScoreDisplay() {
    document.getElementById('right-answer').innerText = 'Correct: ' + quizScore;
    document.getElementById('wrong-answer').innerText = 'Wrong: ' + (currentQuestionIdex + 1 - quizScore);
}

function resetScoreDisplay() {
    document.getElementById('right-answer').innerText = '';
    document.getElementById('wrong-answer').innerText = '';
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add("correct");
    } else {
        element.classList.add("wrong");
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

const questions = [
    {
        question: 'human trafficing can be called______',
        answer: [
            { text: 'transportation', correct: false },
            { text: 'gentleness', correct: false },
            { text: 'slavery', correct: true },
            { text: 'human business', correct: false },
        ],
    },
    {
        question: 'What is the name of the newly elected president of Nigeria?',
        answer: [
            { text: 'Babagida', correct: false },
            { text: 'Bola Ahmed Tunubu', correct: true },
            { text: 'Peter Obi', correct: false },
            { text: 'Muhammed Danjuma', correct: false },
        ],
    },
    {
        question: 'One of the obstacles for achieving goal is____',
        answer: [
            { text: 'Road block', correct: false },
            { text: 'Low self-esteem', correct: true },
            { text: 'Obedience', correct: false },
            { text: 'Blindness', correct: false },
        ],
    },
    {
        question: 'Many abducted young girls end up in_____as victims',
        answer: [
            { text: 'Prostitution', correct: true },
            { text: 'Bakery', correct: false },
            { text: 'Business', correct: false },
            { text: 'hawking', correct: false },
        ],
    },
    {
        question: 'Human trafficking is the trade in_____',
        answer: [
            { text: 'Drug', correct: false },
            { text: 'Humans', correct: true },
            { text: 'Animals', correct: false },
            { text: 'Herbs', correct: false },
        ],
    },
    {
        question: 'Human trafficking mostly have ____ as victims',
        answer: [
            { text: 'Ladies and Gentlemen', correct: false },
            { text: 'Grandmas and Babies', correct: false },
            { text: 'Women, Children and Adolescent ', correct: true },
            { text: 'Teachers and Doctors', correct: false },
        ],
    },
    {
        question: '_____ exist where there is love',
        answer: [
            { text: 'Sorrow', correct: false },
            { text: 'Happiness', correct: true },
            { text: 'Tears', correct: false },
            { text: 'All of the above', correct: false },
        ],
    },
    {
        question: 'Which arm of government could make laws to curb trafficking of children and women?',
        answer: [
            { text: 'Executive', correct: false },
            { text: 'Judiciary', correct: false },
            { text: 'Legislature', correct: true },
            { text: 'Press', correct: false },
        ],
    },
    {
    question: '_____is a strong feeling of affection',
        answer: [
            { text: 'Love', correct: true },
            { text: 'Trust', correct: false },
            { text: 'Integrity', correct: false },
            { text: 'Human emotion', correct: false },
        ],
    },
    {
        question: 'Those beliefs that are capable of endangering the life and well being of the people are refered to as____',
        answer: [
            { text: 'Human emotion', correct: false },
            { text: 'African Traditional Religion', correct: false },
            { text: 'Harmful Traditional Practices', correct: true },
            { text: 'Wicked Traditions', correct: false },
        ],
    },
    {
        question: 'All these are preventive measures against Children and Women trafficking except',
        answer: [
            { text: 'Public Enlightenment', correct: false },
            { text: 'Education', correct: false },
            { text: 'Limitation', correct: true },
            { text: 'Legislation', correct: false },
        ],
    },
    {
        question: '_____ is a factor responsible for human trafficking',
        answer: [
            { text: 'illiteracy', correct: true },
            { text: 'Literacy', correct: false },
            { text: 'Deceny', correct: false },
            { text: 'Literature', correct: false },
        ],
    },
    {
        question: 'Psychomotor domain deals with the study of ___',
        answer: [
            { text: 'A city or town, especially its addministration', correct: false },
            { text: 'The human mind, especially affecting the behaviour', correct: false },
            { text: 'Physical movement, coordination and the use of motor skills', correct: true },
            { text: 'The belief in the worship of a supernatural being', correct: false },
        ],
    },
    {
        question: '_____ are achievements or desired results a person aims to get with effort',
        answer: [
            { text: 'Promises', correct: false },
            { text: 'Decisions', correct: false },
            { text: 'Goals', correct: true },
            { text: 'Goal setting', correct: false },
        ],
    },
    {
        question: '_____is the way of expressing love',
        answer: [
            { text: 'Showing hostility', correct: false },
            { text: 'Showing respect', correct: true },
            { text: 'Fighting', correct: false },
            { text: 'Partiality', correct: false },
        ],
    },
    {
        question: 'In the acronym (SMART), R stands for ____',
        answer: [
            { text: 'Register', correct: false },
            { text: 'Re-establish', correct: false },
            { text: 'Result', correct: false },
            { text: 'Realistic', correct: true },
        ],
    },
    {
        question: '_____ is the behavioural pattern shown towards things, place and people',
        answer: [
            { text: 'Skills', correct: false },
            { text: 'Concept', correct: false },
            { text: 'Values', correct: false },
            { text: 'Attitude', correct: true },
        ],
    },
     {
        question: 'Women who are taking from a pareticular country by taffickers could be used for',
        answer: [
            { text: 'Prostitution', correct: true },
            { text: 'Drug trafficking', correct: false },
            { text: 'Terrorism', correct: false },
            { text: 'None of the above', correct: false },
        ],
    },
    {
        question: 'Facts can be defined as ?',
        answer: [
            { text: 'Information that are inaccurate', correct: false },
            { text: 'Knowledge or information that are based on real occurence', correct: true },
            { text: 'Information that is valueless', correct: false },
            { text: 'General ideas gotten and retained in the mind from experience, reasoning and imagination', correct: false },
        ],
    },
    {
        question: 'One of this is an example of short term goal',
        answer: [
            { text: 'Becoming a doctor in the next ten years', correct: false },
            { text: 'Cleaning the whole house on saturday', correct: false },
            { text: 'To obtain two scholarship awards in two years', correct: true },
            { text: 'To travel abroad for university degree', correct: false },
        ],
    },
    {
        question: 'The following are importance of goal setting except',
        answer: [
            { text: 'It helps us to lose focus', correct: true },
            { text: 'It serves as motivation', correct: false },
            { text: 'It gives individual a plan to work towards to', correct: false },
            { text: 'Goal setting help us to evaluate ourselves as a person', correct: false },
        ],
    },{
        question: 'All conflict are resolved through dialogue. This is an example of _____',
        answer: [
            { text: 'Abstract peace', correct: false },
            { text: 'Negative peace', correct: false },
            { text: 'Positive peace', correct: true },
            { text: 'Copnstructive peace', correct: false },
        ],
    },
    {
        question: 'How can one tolerate others by',
        answer: [
            { text: 'Reporting them to an educator', correct: true },
            { text: 'Over looking thier short comings', correct: false },
            { text: 'looking down on them', correct: false },
            { text: 'Retaliation', correct: false },
        ],
    },
    {
        question: 'One of the following is not an example of harmful traditional practices',
        answer: [
            { text: 'Female genital mutilation', correct: false },
            { text: 'Stoning or Flogging of women', correct: false },
            { text: 'Bride kidnapping', correct: false },
            { text: 'Male circumcision', correct: true },
        ],
    },
    {
        question: 'One of this is a type of peace',
        answer: [
            { text: 'Constitutional peace', correct: false },
            { text: 'Positive peace', correct: true },
            { text: 'Conflict peace', correct: false },
            { text: 'Group peace', correct: false },
        ],
    },
    {
        question: 'Family can be classified based on',
        answer: [
            { text: 'Wealth', correct: false },
            { text: 'Size and structure', correct: true },
            { text: 'Locality', correct: false },
            { text: 'Amiration', correct: false },
        ],
    },
    {
        question: 'Extended family provides all except',
        answer: [
            { text: 'Cultural identity', correct: false },
            { text: 'Support and encouragement for parents', correct: false },
            { text: 'Serves as a child role model', correct: false },
            { text: 'Exposure to a wealthy environment', correct: true },
        ],
    },
    {
        question: 'Which of the following deals with retention and memory',
        answer: [
            { text: 'Psychomotor component', correct: false },
            { text: 'Cognitive component', correct: true },
            { text: 'Affective component', correct: false },
            { text: 'Educative component', correct: false },
        ],
    },
    {
        question: 'The following are consequences of Human trafficking except',
        answer: [
            { text: 'Productivity', correct: true },
            { text: 'Sexual violence', correct: false },
            { text: 'Loss of human resources', correct: false },
            { text: 'Life of crime addiction', correct: false },
        ],
    },
    {
        question: 'Early marriage, nutritional taboos and widowhood practices are all',
        answer: [
            { text: 'Embezzllement of funds', correct: false },
            { text: 'Harmful traditional practices', correct: true },
            { text: 'Human trafficking activities', correct: false },
            { text: 'Crimes', correct: false },
        ],
    },
        {
            question: 'There are _____ types of peace',
            answer: [
                { text: '5', correct: false },
                { text: '3', correct: false},
                { text: '6', correct: false },
                { text: '2', correct: true },
            ],
        },
        {
            question: 'Setting a time limit for every goal help one to be more',
            answer: [
                { text: 'Wealthy', correct: false },
                { text: 'Focused', correct: true },
                { text: 'Distracted', correct: false },
                { text: 'Attractive', correct: false },
            ],
        },
        {
            question: 'To set a goal is to have aparticular ____ in mind',
            answer: [
                { text: 'Person', correct: false },
                { text: 'Purpose', correct: true },
                { text: 'Power', correct: false },
                { text: 'Preference', correct: false },
            ],
        },
        {
            question: 'Human emotion is the expression of our ____ ',
            answer: [
                { text: 'Words', correct: false },
                { text: 'Disapointment', correct: false },
                { text: 'Language', correct: false },
                { text: 'Feelings', correct: true },
            ],
        },
        {
            question: 'One of this is not a type of emotion',
            answer: [
                { text: 'Anxiety', correct: false },
                { text: 'Sorrow', correct: false },
                { text: 'Sleeping', correct: true },
                { text: 'Fear', correct: false },
            ],
        },
        {
            question: 'Behaviours that enhance a loving relationship include the following except',
            answer: [
                { text: 'Thoughtlessness', correct: true },
                { text: 'Tolerance', correct: false },
                { text: 'Mutual respect', correct: false },
                { text: 'Remembering important days', correct: false },
            ],
        },
        {
            question: 'All but one are factors that influence discision making',
            answer: [
                { text: 'Hair style', correct: true },
                { text: 'Religious belifs', correct: false },
                { text: 'Value', correct: false },
                { text: 'Personal', correct: false },
            ],
        },
        {
            question: 'There are ____ types of decision making',
            answer: [
                { text: '5', correct: false },
                { text: '4', correct: false },
                { text: '3', correct: false },
                { text: '2', correct: true },
            ],
        },
        {
            question: 'One way to make the right decision is to____',
            answer: [
                { text: 'Ignore the impact on others', correct: false },
                { text: 'Seek the life of others', correct: false },
                { text: 'Define the problem', correct: true },
                { text: 'Evaluate the income', correct: false },
            ],
        },
        {
            question: '____ could be defined as a choice made between alternatives',
            answer: [
                { text: 'Action', correct: false },
                { text: 'Desicion making', correct: true },
                { text: 'Goal setting', correct: false },
                { text: 'Love', correct: false },
            ],
        },
        {
            question: 'These are various ways traffickers often operate except',
            answer: [
                { text: 'Using violence or threatening the person or their family', correct: false },
                { text: 'Harming ordepriving the person of basic necessities such as food and sleep', correct: false },
                { text: 'Limiting freedom of movement', correct: false },
                { text: 'Allowing victims to attend religious services', correct: true },
            ],
        },
        {
            question: 'Peace can be promoted through ____ ',
            answer: [
                { text: 'Conditions', correct: false },
                { text: 'Conflicts', correct: false },
                { text: 'Justice league', correct: false },
                { text: 'Forgiveness', correct: true },
            ],
        },
        {
            question: 'Extended family of a child provides ____ and ____ support ',
            answer: [
                { text: 'Political, Economical', correct: false },
                { text: 'Wealth, Commendation', correct: false },
                { text: 'Cartoon, Yoruba movies', correct: false },
                { text: 'Physical, Emotional', correct: true },
            ],
        },
        {
            question: '____ are those who does not blow up the fault of their fellow human beings but tolerates them',
            answer: [
                { text: 'Shameless people', correct: false },
                { text: 'Educated people', correct: false },
                { text: 'Peaceful people', correct: true },
                { text: 'Uncultured people', correct: false },
            ],
        },
        {
            question: '____ is a state of friendliness that is devoid of anger, abscence of war or violence',
            answer: [
                { text: 'Comotions', correct: false },
                { text: 'Conflicts', correct: false },
                { text: 'Peace', correct: true },
                { text: 'Friendship', correct: false },
            ],
        },
         {
            question: 'Children whose parent may be alive but due to some reasons are taken care of by other parents are ____ family',
            answer: [
                { text: 'step', correct: false },
                { text: 'Foster', correct: false },
                { text: 'Nuclear', correct: false },
                { text: 'Adoptive', correct: true },
            ],
        }, 
        {
            question: 'When did nigeria gain independence ',
            answer: [
                { text: '1900', correct: false },
                { text: '1960', correct: true },
                { text: '1959', correct: false },
                { text: '1970', correct: false },
            ],
        },
        {
            question: 'Living peacefully with people of different religion is called religious ____ ',
            answer: [
                { text: 'Difference', correct: true },
                { text: 'Intolerance', correct: false },
                { text: 'Tolerance', correct: false },
                { text: 'Faith', correct: false },
            ],
        },
        {
            question: 'Choose from the following one that is not a characteristics of a good goal ',
            answer: [
                { text: 'Achievable', correct: false },
                { text: 'Realistics', correct: false },
                { text: 'Measurable', correct: false },
                { text: 'No time limit', correct: true },
            ],
        },
        {
            question: 'When something is true or as existed or happened, is learnt in social studies, this is an example of ____ ',
            answer: [
                { text: 'Values', correct: false },
                { text: 'Facts', correct: true },
                { text: 'Concepts', correct: false },
                { text: 'Attitude', correct: false },
            ],
        },
        {
            question: 'Who was our formal president of nigeria ',
            answer: [
                { text: 'Muhamed Bhuari', correct: true },
                { text: 'Bola Tinubu', correct: false },
                { text: 'Jonatan', correct: false },
                { text: 'Taiwo', correct: false },
            ],
        },
       
       
       
       
       
       
       

]; 
