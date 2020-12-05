const readlineSync = require('readline-sync');
const chalk = require('chalk');

var score = 0;

function check_answer(a, index) {
    if (index == a) {
        console.log(chalk.green("Congrats, Right Answer!\n"));
        score += 1;
    } else {
        console.log(chalk.red("Sorry, Wrong Answer :(\n"));
    }
}

var user_scores = [{
        name: "Malavika",
        score: 10
    },
    {
        name: "User1",
        score: 9
    },
    {
        name: "Tanay Pratap",
        score: 9
    }

]

var questions = [{
        q: "Which house does Luna Lovegood belong to?",
        options: ["Ravenclaw", "Gryffindor", "HufflePuff", "Slytherin"],
        a: 0
    },
    {
        q: "Albus Dumbledore has the patronus of a",
        options: ["Phoenix", "Goat", "Otter"],
        a: 0
    },
    {
        q: "What's the name given to non-magic folk in magical households",
        options: ["Squib", "Muggle", "Half-blood"],
        a: 0
    },

    {
        q: "Who among the following is a registered animagus?",
        options: ["Sirius Black", "James Potter", "Minerva McGonagall"],
        a: 2
    },


    {
        q: "Which of the following is a deathly hallow?",
        options: ["Amortentia", "The Elder Wand", "Bezoar"],
        a: 1
    },

    {
        q: "Who killed Bellatrix Lestrange?",
        options: ["Hermione Granger", "Molly Weasley", "Ginny Weasley"],
        a: 1
    },


    {
        q: "Who among the following died in the Battle of Hogwarts?",
        options: ["Fred", "George"],
        a: 0
    },

    {
        q: "The Potions Professor, who invited Harry to his 'special' club?",
        options: ["Horace Slughorn", "Remus Lupin", "Albus Dumbledore"],
        a: 0
    },

    {
        q: "Who is the keeper of Keys and Grounds at Hogwarts?",
        options: ["Mr. Finch", "Rubeus Hagrid"],
        a: 1
    },

    {
        q: "The world isn't split into good people and death eaters. Who said this?",
        options: ["Albus Dumbledore", "Sirius Black"],
        a: 1
    },

];

console.log(chalk.underline.bold.bgCyan("Harry Potter Quiz \n\n"));

var user = readlineSync.question("Hello! Please enter your name!\n");


console.log(chalk.cyanBright("\n\nWelcome, " + user + '!'));
console.log(chalk.italic.cyanBright("\nHere are your questions. Good luck! \n\n"));


for (let i = 0; i < questions.length; i++) {
    console.log(questions[i].q)
    index = readlineSync.keyInSelect(questions[i].options, "Enter options ");
    check_answer(questions[i].a, index);
}

console.log(chalk.cyanBright("Your total score is " + score + "/10."));

if (score == 10) {
    console.log(chalk.bgCyan.bold("\nCongratulations! You reached the high score!\n"));
}

console.log(chalk.underline("Other Top Scorers"));
for (let i = 0; i < user_scores.length; i++) {
    console.log(user_scores[i].name, " : ", user_scores[i].score);
}