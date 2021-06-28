const functions = require("firebase-functions");


exports.helloPubSub = functions.pubsub.topic("Rlab12").onPublish((message) => {
  const data = message.json;
  console.log("Message is recived");
  console.log(data);
});

