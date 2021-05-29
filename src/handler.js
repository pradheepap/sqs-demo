"use strict";
const axios = require("axios");
const slackEndpoint = process.env.slackUrl;

module.exports.processQueue = async (event) => {
  return {
    message: "Go Serverless v1.0! Your function executed successfully!",
    event,
  };
};

module.exports.processWebhook = async (event) => {
  console.log(`event ... ${JSON.parse(event)}`)
  const body = JSON.parse(event.body);
  const { repository, sender } = body;
  const repo = 'repository.name';
  const stars = 'repository.stargazers_count';
  const username = 'sender.login';
  const url = 'sender.html_url';

  console.log(`body ... ${body}`)

  const message = {
    attachments: [
      {
        pretext: `There is a new Github event for _${repo}_ !`,
        text: [
          `_${repo}_* now has *${stars}* stars!`,
          `Your new :star: was made by <${url}|${username}>.`,
        ].join("\n"),
        footer: "Serverless App",
        footer_icon:
          "https://platform.slack-edge.com/img/default_application_icon.png",
      },
    ],
  };

  const data = JSON.stringify(message);

  const config = {
    method: "post",
    url: slackEndpoint,
    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "done" }),
  };
};
