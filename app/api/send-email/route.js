// api/send-email/route.js
// file for sending emails
import sendEmail from "./email";
const ADMIN_EMAIL = "bschoolland@gmail.com";

async function POST(request) {
  const body = await request.json();
  const { name, email, message } = body;
  try {
    console.log("Attempting to send email from name: ", name, " email: ", email)
    // TODO: send the email
    let subject = `New Schoolland Construction message from ${name}`;
    let body = `Their email is: ${email}\n\nThey said: ${message}`;
    if(await sendEmail(ADMIN_EMAIL, subject, body) === 'success'){
      console.log("Email sent successfully");
      const data = { message: "Email sent successfully" };
      return new Response(JSON.stringify(data), {
        headers: {
          "Content-Type": "application/json",
        },
        status: 200,
      });
    }
    else{
      console.log("Error sending email");
      // if the email fails to send, give the user the email to reach out to directly
      const data = { message: `Sorry, our contact form is currently down.  Please reach out directly to schoollandinc@yahoo.com`};
      return new Response(JSON.stringify(data), {
        headers: {
          "Content-Type": "application/json",
        },
        status: 500,
      });
    }
    
  } catch (err) {
    console.log(err);
    const data = { message: "Internal server error" };
    return new Response(JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 500,
    });
  }
}

export { POST };