const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

exports.helloPubSub = functions.pubsub.topic("Rlab12").onPublish((message) => {
  const data = message.json;
  console.log("Your pub sub is trigered");
  console.log(data);
});
