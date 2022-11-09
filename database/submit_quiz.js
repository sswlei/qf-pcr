const AWS = require("aws-sdk");

const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event, context) => {
  let body;
  let statusCode = 200;
  const headers = {
    "Content-Type": "application/json",
    'Access-Control-Allow-Origin': '*'
  };

  try {
    body = await dynamo
    .get({
      TableName: "qfpcr_quiz_data",
      Key: {
        "quiz_id": "quiz_1"
      }
    })
    .promise();
  } catch (err) {
    statusCode = 400;
    body = err.message;
  } finally {
      let answers = getAnswers(body.Item, JSON.parse(event.body));
    body = JSON.stringify(answers);
  }

  return {
    statusCode,
    body,
    headers
  };
};
function getAnswers(quiz_data,userAnswerData){
  var answerList=[];
  for (var index in quiz_data.mcq_questions){
    let choices = quiz_data.mcq_questions[index].choices;
    for (var j in userAnswerData.mcq_questions){
      if (quiz_data.mcq_questions[index].title == userAnswerData.mcq_questions[j].title){
        answerList.push({
          title:quiz_data.mcq_questions[index].title, 
          answer:choices[quiz_data.mcq_questions[index].answer],
          correct:choices[quiz_data.mcq_questions[index].answer] == userAnswerData.mcq_questions[j].answer,
          feedback:quiz_data.mcq_questions[index].feedback
      })
      }

    }
 }
  for (var index in quiz_data.tf_questions){
    for (var j in userAnswerData.tf_questions){
      if (quiz_data.tf_questions[index].title == userAnswerData.tf_questions[j].title){
        answerList.push({
          title:quiz_data.tf_questions[index].title, 
          answer:quiz_data.tf_questions[index].answer,
          correct:quiz_data.tf_questions[index].answer == userAnswerData.tf_questions[j].answer,
          feedback:quiz_data.tf_questions[index].feedback

        })
      }
          
    }
  }
  return answerList;
}