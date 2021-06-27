const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

exports.helloPubSub = functions.pubsub.topic("Rlab12").onPublish((message) => {
  // Get the `name` attribute of the PubSub message JSON body.
  const messageBody = message.name?Buffer
      .from(message.name, "base64").toString():null;
  functions.logger.log(`Hello ${messageBody || "World"}!`);
  return null;
});

exports.myFunction = functions.pubsub.topic("Rlab12").onPublish((context) => {
  console.log("The function was triggered at ", context.timestamp);
  console.log("The unique ID for the event is", context.eventId);
});
