/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onCall} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const getDatabase = require("firebase-admin/database");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

exports.addContact = onCall((request, response) => {
  return getDatabase().ref("contacts").push(request.body)
    .then(() => {
      response.status(200).send();
    })
    .catch((error) => {
      response.status(500).send(error);
    });
});
