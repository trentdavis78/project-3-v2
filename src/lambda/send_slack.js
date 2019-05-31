import fetch from "node-fetch";

exports.handler = async (event, context) => {
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }
  const body = JSON.parse(event.body);

  // When the method is POST, the name will no longer be in the event’s
  // queryStringParameters – it’ll be in the event body encoded as a queryString
//   const name = event.body.name || "World";

  // Send greeting to Slack
  return fetch("https://hooks.slack.com/services/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", {
    headers: {
      "content-type": "application/json"
    },
    method: "POST",
    body: JSON.stringify({ text: `${body.name} says hello!` })
  })
    .then(() => ({
      statusCode: 200,
      body: `Hello, ${name}! Your greeting has been sent to Slack`
    }))
    .catch(error => ({
      statusCode: 422,
      body: `Oops! Something went wrong. ${error}`
    }));
};

