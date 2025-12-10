// functions/index.js
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

// transporter will use Gmail SMTP with credentials stored in functions config
let transporter;

// initialize transporter lazily for reliability
function getTransporter() {
  if (transporter) return transporter;

  const gmailEmail = functions.config().gmail?.email;
  const gmailPass = functions.config().gmail?.password;

  if (!gmailEmail || !gmailPass) {
    console.error("Gmail config not set. Run firebase functions:config:set gmail.email=... gmail.password=...");
    throw new Error("Gmail config missing");
  }

  transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: gmailEmail,
      pass: gmailPass,
    },
  });

  return transporter;
}

// Trigger: when a new document is created in 'messages' collection
exports.sendNewMessageEmail = functions.firestore
  .document("messages/{docId}")
  .onCreate(async (snap, context) => {
    const data = snap.data();

    try {
      const mailOptions = {
        from: `T&S Elite Events <${functions.config().gmail.email}>`, // visible "from" for inbox
        to: "oluwatosinruth111@gmail.com", // your inbox
        subject: `New Inquiry: ${data.type || "Event"} — ${data.name || "No name"}`,
        text: [
          `Name: ${data.name || ""}`,
          `Email: ${data.email || ""}`,
          `Phone: ${data.phone || ""}`,
          `Event Type: ${data.type || ""}`,
          `Event Date: ${data.date || ""}`,
          "",
          "Message:",
          `${data.message || ""}`,
        ].join("\n"),
        html: `
          <h3>New Event Inquiry</h3>
          <p><strong>Name:</strong> ${data.name || ""}</p>
          <p><strong>Email:</strong> ${data.email || ""}</p>
          <p><strong>Phone:</strong> ${data.phone || ""}</p>
          <p><strong>Event Type:</strong> ${data.type || ""}</p>
          <p><strong>Event Date:</strong> ${data.date || ""}</p>
          <h4>Message</h4>
          <p>${(data.message || "").replace(/\n/g, "<br/>")}</p>
          <hr/>
          <small>Message ID: ${context.params.docId}</small>
        `,
      };

      const tr = getTransporter();
      const info = await tr.sendMail(mailOptions);
      console.log("Email sent:", info.response);
      return null;
    } catch (err) {
      console.error("Error sending email:", err);
      return null;
    }
  });
