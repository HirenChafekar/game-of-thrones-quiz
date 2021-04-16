var readlineSync = require('readline-sync');
var userName = readlineSync.question('What is your name? ' );
console.log('Hello ' + userName + '! Welcome to Game of Thrones Quiz?');
console.log('-------------LEVEL 1-----------------');
console.log('Answer at least 3 correct questions to go to next level');

var score = 0;

var highscores = [{
  name : 'Rohan',
  score : 5 
},
{
  name : 'Aarti',
  score : 5
}];

function gameofThrones(question,answer){
  var userAns = readlineSync.question(question);
  if(userAns === answer){
    console.log('Right!');
    score++;
  }else{
    console.log('Wrong!');
    score--;
  }
  console.log('Current Score : ', score);
  console.log('--------------------------------------------');
}

var questions = [{
  question : 'Which house did Jon Snow belong to (Starks/Targaryens)? \n',
  answer : 'Starks' 
},
{
  question : "'What is the name of Jon's direwolf?\n ",
  answer : 'Ghost'
},
{
  question : 'A _____ always pays his debt. Fill in the blanks \n',
  answer : 'Lannister'
},
{
  question : 'What do Starks say the most?\n',
  answer : 'Winter is coming'
},
{
  question : 'What is the name of the continent on which most of the action of "Game of Thrones" takes place?\n',
  answer : 'Westeros'
},
{
  question : 'Who was the Lightning Lord?\n',
  answer : 'Beric Dondarrion'
},
{
  question : "Who said 'Dany please!'?\n",
  answer : 'Viserys Targaryen'
}];

for(var i=0;i<5;i++){
  gameofThrones(questions[i].question, questions[i].answer);
}

if(score>=3){
  console.log('--------------LEVEL 2---------------');
  for(var i=5;i<questions.length;i++){
  gameofThrones(questions[i].question, questions[i].answer);
  }
}

var oldMaxScore = 0;
for(var i=0;i<highscores.length;i++){
  if(highscores[i].score>=oldMaxScore){
    oldMaxScore = highscores[i].score;
  }
}


console.log('Highest Scorers : ');
for(var i=0;i<highscores.length;i++){
  console.log(highscores[i]);
}

if(score>=oldMaxScore){
  console.log('You scored the highest! Send me a screenshot to update the list.');
}


