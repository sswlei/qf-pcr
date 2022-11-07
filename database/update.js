const AWS = require('aws-sdk');
const dynamodbClient = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event, context, callback) => {

    AWS.config.update({
        region:  "us-west-2",
    });


      await dynamodbClient.update({
        TableName: 'qfpcr_data',
        Key:{
          'case_id': 'prenatalRad_guided_1'
        },
        UpdateExpression:"SET #markers.#marker_id.questions[0].answer = :answer",
        ExpressionAttributeNames:{
          '#markers': 'markers',
          '#marker_id': 'DXS6803'
        },
        ExpressionAttributeValues:{
          ':answer': 'chx',
        }
      }
      
      ).promise()
    .then((data) => {
        console.info('successfully update to dynamodb', data)
    })
    .catch((err) => {
        console.info('failed adding data dynamodb', err)
    });

};