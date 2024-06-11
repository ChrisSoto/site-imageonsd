/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// https://cloud.google.com/functions/docs/writing/write-http-functions#handling_cors_requests

const {initializeApp} = require("firebase-admin/app");
const {onRequest} = require("firebase-functions/v2/https");
const {getFirestore} = require("firebase-admin/firestore");

initializeApp();

exports.addContact = onRequest(
    {cors: ["https://dev.imageonsd.com"]},
    async (request, response) => {
      const {name, email, phone, details} = request.body;
      const writeResult = await getFirestore()
          .collection("contacts")
          .add({name, email, phone, details});
      response.json({result: `Message written with ID: ${writeResult.id}`});
    });
