import { hello } from './handler';

it('should return an object', async () => {
  const event: any = {
    body: 'hi'!,
  };

  const result = await hello(event, null, null);
  expect(result).toEqual(
    expect.objectContaining({
      body: JSON.stringify(
        {
          input: event,
          message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
        },
        null,
        2
      ),
      statusCode: 200,
    })
  );
});
