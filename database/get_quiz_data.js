const AWS = require("aws-sdk");

const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event, context) => {
  let body;
  let statusCode = 200;
  const headers = {
    "Content-Type": "application/json"
  };

  try {
    body = await dynamo
    .get({
      TableName: "qfpcr_quiz_data",
      Key: {
        "quiz_id": event.queryStringParameters.quiz_id
      }
    })
    .promise();
  } catch (err) {
    statusCode = 400;
    body = err.message;
  } finally {

    //remove answer from return data
    for (var index in body.Item.mcq_questions){
       delete body.Item.mcq_questions[index]['answer'];
       delete body.Item.mcq_questions[index]['feedback'];

    }
    for (var index in body.Item.tf_questions){
      delete body.Item.tf_questions[index]['answer'];
      delete body.Item.tf_questions[index]['feedback'];

    }
    body = JSON.stringify(body);
  }
  // console.log("test data",body);

  return {
    statusCode,
    body,
    headers
  };
};