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
      TableName: "qfpcr_data",
      Key: {
        "case_id": event.queryStringParameters.case_id
      }
    })
    .promise();
  } catch (err) {
    statusCode = 400;
    body = err.message;
  } finally {
    
    body = JSON.stringify(body);
  }
  return {
    statusCode,
    body,
    headers
  };
};