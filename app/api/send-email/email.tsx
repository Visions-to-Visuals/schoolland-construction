import AWS from "aws-sdk";
AWS.config.update({
  region: "us-west-2",
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});
console.log('AWS_ACCESS_KEY_ID:', process.env.AWS_ACCESS_KEY_ID)
const ses = new AWS.SES();

const sendEmail = async (toAddress: any, subject: any, body: any) => {
  let dataString =
    `From: communityalis@gmail.com\n` +
    `To: ${toAddress}\n` +
    `Subject: ${subject}\n` +
    `MIME-Version: 1.0\n` +
    `Content-Type: multipart/mixed; boundary="NextPart"\n\n` +
    `--NextPart\n` +
    `Content-Type: text/plain\n\n` +
    `${body}\n\n`;
    

  dataString += `--NextPart--`;

  const params = {
    RawMessage: {
      Data: Buffer.from(dataString, "utf-8"),
    },
    Destinations: [toAddress],
    Source: "communityalis@gmail.com",
  };

  try {
    console.log("Sending email with subject:", subject);
    const data = await ses.sendRawEmail(params).promise();
    console.log("Email sent successfully:", data.MessageId);
    return('success')
  } catch (err) {
    console.error("Error sending email:", err);
    return(err)
  }
};

export default sendEmail;
