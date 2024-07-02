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
    {cors: ["https://imageonsd.com", "https://dev.imageonsd.com", "https://staging.imageonsd.com", "http://localhost:8080"]},
    async (request, response) => {
      const {name, email, phone, details} = request.body;
      if (email == null || phone == null) {
        response.json({error: "Missing required fields"});
        return;
      }
      const writeResult = await getFirestore()
          .collection("contacts")
          .add({
            to: "imageonprintingservice@gmail.com, admin@imageonsd.com",
            message: {
              subject: `Lead from Site: ${name}`,
              body: `Name: ${name}\n
                Phone: ${phone}\n
                Details: ${details}\n
                Email: ${email}`,
              html: `<p>Name: ${name}</p><br>
                <p>Email: <a href="mailto:${email}">${email}</a></p><br>
                <p>Phone: <a href="tel:${phone}">${phone}</a></p><br>
                <p>Details: ${details}</p>`,
            },
          });
      response.json({result: `Message written with ID: ${writeResult.id}`});
    });
