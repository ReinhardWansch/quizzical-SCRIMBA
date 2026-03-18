import { nanoid } from "nanoid";
import he from "he";


const BASE_URL = "https://opentdb.com/api.php";
const requestOptions = {
  method: "GET",
  redirect: "follow"
};

const questionsAmount= 5;
const questionsType= 'multiple';

async function fetchQuestions(amount, type) {
  return fetch(`${BASE_URL}?amount=${amount}&type=${type}`, requestOptions)
    .then((response) => response.json())
    .catch((error) => console.error(error));
}

async function getQuestions() {
  const questionsFetched = await fetchQuestions(questionsAmount, questionsType);
  return questionsFetched.results.map(questionI => 
    transformQuestion(questionI)
  );
}





/*##########*/
/*## UTIL ##*/
/*##########*/

function transformAnswer(answerText) {
  return ({
    id: nanoid(),
    answerText
  });
}

function transformQuestion(question) {
  const correctAnswer= transformAnswer(question.correctAnswer);
  const incorrectAnswers= question.incorrect_answers.map(answerI => 
    transformAnswer(answerI)
  );
  const answers= [...incorrectAnswers, correctAnswer];
  answers.sort(() => Math.random() - 0.5);
  return ({
    questionText: question.question,
    correctAnswerID: correctAnswer.id,
    answers
  });
}




/*###########*/
/*## DEBUG ##*/
/*###########*/

console.log(await getQuestions()); ///DEBUG
// console.log(transformAnswer("Ich bin eine Antwort")); ///DEBUG