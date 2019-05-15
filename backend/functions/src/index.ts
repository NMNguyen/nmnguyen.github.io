import * as functions from 'firebase-functions';

const nodemailer = require('nodemailer');
const cors = require('cors')({origin: true});




// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript


// Here is the function list:
// https://console.firebase.google.com/u/0/project/cloudjet-work/functions/list


// https://us-central1-cloudjet-work.cloudfunctions.net/helloWorld
export const helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Cloudjet!");
});


/**
 * Here we're using Sendgrid to send
 * https://sendgrid.com/blog/sending-email-nodemailer-sendgrid/
 */
var sgTransport = require('nodemailer-sendgrid-transport');

var options = {
    auth: {
        //TODO: move to env variable
        api_user: 'app57762236@heroku.com', // SENDGRID_USERNAME
        api_key: 'fexujzj22645'
    }
}
var emailClient = nodemailer.createTransport(sgTransport(options));

// https://us-central1-cloudjet-work.cloudfunctions.net/mailService

// Manual test:
// $ curl -d '{"from":"help@cloudjetkpi.com", "to":"hong@cjs.vn", "subject": "hello", "html":"Dear you!"}' -H "Content-Type: application/json" https://us-central1-cloudjet-work.cloudfunctions.net/mailService
export const mailService = functions.https.onRequest((request, response) => {
    /**
     * HTTP Cloud Function.
     *
     * @param {Object} request Cloud Function request context.
     *                     More info: https://expressjs.com/en/api.html#req
     * @param {Object} response Cloud Function response context.
     *                     More info: https://expressjs.com/en/api.html#res
     */


    cors(request, response, () => {

        const mailOptions = {
            from: '"Cloudjet Potential" <hi@cloudjetpotential.com>',
            to: "hong@cjs.vn",
            subject: "",
        //    text: "",
            html: ""
        };

        mailOptions.from = request.body.from || mailOptions.from;
        mailOptions.to = request.body.to || mailOptions.to;
        mailOptions.subject = request.body.subject || mailOptions.subject;
        mailOptions.html = request.body.html || mailOptions.html;



        // returning result
        return emailClient.sendMail(mailOptions, (erro: any, info: any) => {
            if (erro) {
                return response.send(erro.toString());
            }
            return response.send('Sended');
        });
    });

});
