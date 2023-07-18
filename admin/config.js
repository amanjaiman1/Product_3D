var admin = require("firebase-admin");
require("dotenv").config();

admin.initializeApp({
  credential: admin.credential.cert({
    type: process.env.FIREBASE_TYPE,
    privateKeyID: process.env.FIREBASE_PRIVATE_KEY_ID,
    authUri: process.env.FIREABSE_AUTH_URI,
    tokenUri: process.env.FIREABSE_TOKEN_URI,
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    // replace `\` and `n` character pairs w/ single `\n` character
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  }),
});

module.exports = admin;
