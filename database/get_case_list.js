const AWS = require("aws-sdk");

const dynamo = new AWS.DynamoDB();

exports.handler = async (event, context) => {
  let body;
  let statusCode = 200;
  const headers = {
    "Content-Type": "application/json"
  };

  try {
    body = await dynamo
    .query({
      TableName: "qfpcr_data",
      IndexName:"category-case_type-index",
      ProjectionExpression: "case_id,case_name",
      KeyConditionExpression: "case_type = :t and category = :c",
      ExpressionAttributeValues: {
        ':t': {S: 'prenatalrad'},
        ':c' : {S: 'practice'}
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