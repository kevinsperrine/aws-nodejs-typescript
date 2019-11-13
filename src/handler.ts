import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';

export const hello: APIGatewayProxyHandler = async (event, context) => {
  return {
    body: JSON.stringify(
      {
        input: event,
        message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
      },
      null,
      2
    ),
    statusCode: 200,
  };
};
