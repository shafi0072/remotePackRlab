const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
const admin = require("firebase-admin");
admin.initializeApp();
const db = admin.firestore();
exports.helloPubSub = functions.pubsub.topic("Rlab12").onPublish((message) => {
  const data = message.json;
  db.collection("pubsub").add(data);
  console.log("Your pub sub is trigered");
  console.log(data);
});
