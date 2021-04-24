
const readLineSync = require('readline-sync');
const questions = 
[
  {
    question: "Which is Gaurav's favorite movie? \n",
    options: ["1.Gangs of Wasseypur","2.Ludo", "3.yeh Jawani hai deewani", "4.None of the above"],
    correct: 1,
    answer: "Gangs of Wasseypur"
  },
  {
    question: "What is Raj kumar Rao first movie as a lead actor?\n",
     options: ["1.Ragini MMS","2.Love Sex aur Dhoka","3.Shaitaan","4.Chittagong"],
    correct: 2,
    answer: "Love Sex aur Dhoka"
  },
  {
    question: "In which of the following movies has Nawazuddin Siddiqui is NOT part of? \n",
    options: ["1.Manorama Six Feet Under","2.D-Day", "3.Peepli Live", "4.Kahaani"],
    correct: 2,
    answer: "D-Day"
  },

]


function quiz ()
{ score = 0;
  j = 1;

  for (const i of questions)
  { 
    console.log(`Question ${j}`);
    j++;
    console.log(i.question);
    for (const j of i.options)
      {
        console.log(j);
      }
    const response = readLineSync.question("Enter your answer as 1,2,3,4 \n");

    if (response == i.correct)
    {
      console.log("Whoaa...correct answer! You get 1  point"); 
      score++;
    }
    else
    {
      console.log("Sorry...incorrect answer! You get 0 point");
      console.log(`Correct answer is ${i.answer}`);

    }
    console.log("--------------------");
  }

console.log(`Thanks for playing the quiz!. \n Your total score is ${score}`);
}

console.log("Welcome to the most basic quiz of your life");

const name = readLineSync.question("What is your name?\n");

console.log(`Hello ${name} Wassup! So much free time to play my quiz? \n`);

quiz();


