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
        "case_id": "prenatalRad_guided_1"
      }
    })
    .promise();
  } catch (err) {
    statusCode = 400;
    body = err.message;
  } finally {
    body = JSON.stringify(body);
  }
  console.log("got data",body);

  return {
    statusCode,
    body,
    headers
  };
};