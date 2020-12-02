// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * Counter1 will store the memory of the closure, counter2 will reset each time.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * Counter1 has the closure because the function is nested inside.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * 
 * Counter1 is better because it stores memory. Counter2 is more global and resets.
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){

    score = Math.floor(Math.random() * 3)
    return score;

}

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(cb, number){
    let score = {
      "Home": 0,
      "Away": 0
    }

    for (let i = 0; i < number; i++){
      score.Home += cb()
      score.Away += cb()
    }

    return score
}

console.log(finalScore(inning, 9))

/* function finalScore(cb,innings) {
  /*Code Here*/

/* finalScore(inning,9) */

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */

function getScore() {
  let inn = 1
  return function(score) {
    let postfix = 'st'
    if(inn == 2) postfix = 'nd'
    if(inn == 3) postfix = 'rd'
    if(inn > 3) postfix = 'th'
    console.log(`${inn++}${postfix} inning: ${score.away} - ${score.home}`)
  }
}

function scoreboard(getInningScore, inning, num) {
      const score = {
        home : 0,
        away : 0
      };

      let logScore = getInningScore()
         
      for (let i = 0; i < num; i++){
        score.home += inning();
        score.away += inning();

        logScore(score)
      }

      console.log(`Final Score: ${score.away} - ${score.home}`)
}



scoreboard(getScore, inning, 9)



/* function scoreboard(cb1,cb2,innings) {
  /* CODE HERE */

/* scoreboard(getInningScore,inning,9) */
