import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

import * as nodemailer from 'nodemailer';
import { google } from 'googleapis';
import { AuthenticationTypeOAuth2 } from 'nodemailer/lib/smtp-connection';
// import SMTPTransport = require('nodemailer/lib/smtp-transport');

admin.initializeApp();

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.helloWorld = functions.https.onRequest((req, res) => {
  res.send('Hello from Firebase!');
});

exports.sendemail = functions.https.onCall(async (data, context) => {
  const OAuth2 = google.auth.OAuth2;
  const APP_NAME = 'Portfolio';
  const clientID =
    '931980061072-iohoqqgjsfq5iomt6tsn7tcr72s6fiue.apps.googleusercontent.com';
  const clientSecret = 'qvwEVEOUuTyll-30B6Q7cuIO';
  const refreshToken =
    '1//04u_OT5fdoSklCgYIARAAGAQSNwF-L9IrFXrlYwkSKXcy_FqeGSOZLXHqIO_2IaJDmelQCXugFK3idQIBFX466z1KCcHK0D7LbIw';

  // Checking attribute.`
  if (!(typeof data.text === 'string') || data.text.length === 0) {
    // Throwing an HttpsError so that the client gets the error details.
    throw new functions.https.HttpsError(
        'invalid-argument',
        'The function must be called with one arguments containing the message text to add.'
    );
  }
  // Checking that the user is authenticated.
  if (!context.auth) {
    // Throwing an HttpsError so that the client gets the error details.
    throw new functions.https.HttpsError(
        'failed-precondition',
        'The function must be called while authenticated.'
    );
  }
  const oauth2Client = new OAuth2(
      clientID, // client Id
      clientSecret, // Client Secret
      'https://developers.google.com/oauthplayground' // Redirect URL
  );

  oauth2Client.setCredentials({
    refresh_token: refreshToken,
  });
  const tokens = await oauth2Client.refreshAccessToken();
  let accessToken = tokens.credentials.access_token;
  if (accessToken == null) accessToken = 'undefined';

  const transportAuth: AuthenticationTypeOAuth2 = {
    type: 'OAuth2',
    user: 'samanthaclarke.work@gmail.com',
    clientId: clientID,
    clientSecret: clientSecret,
    refreshToken: refreshToken,
    accessToken: accessToken,
  };
  const transportOptions = {
    service: 'gmail',
    auth: transportAuth,
  };

  const smtpTransport = nodemailer.createTransport(transportOptions);
  const mailOptions = {
    from: `${APP_NAME} <samanthaclarke@gmail.com>`,
    to: data.text, // sending to email IDs in app request, please check README.md
    subject: `Hello from ${APP_NAME}!`,
    text: `Hi,\n Test email from ${APP_NAME}.`,
  };

  smtpTransport.sendMail(mailOptions, (_error: Error | null, _info: any | null) => {
    if (_error) {
      console.log(_error.message);
      smtpTransport.close();
    }
    return 'mail sent';
  });
});