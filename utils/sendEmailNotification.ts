import nodemailer from "nodemailer";

interface sendMyNotificationInterface {
  userName: string;
  tel: string;
  email: string;
  cep: string;
}
async function sendMyNotification({
  userName,
  tel,
  email,
  cep,
}: sendMyNotificationInterface): Promise<void> {
  const transporter = nodemailer.createTransport({
    host: "",
    port: 587,
    secure: false,
    auth: {
      user: "",
      pass: "",
    },
  });
  await transporter.sendMail({
    from: "Marketing <>",
    to: "",
    replyTo: `${email}`,
    subject: "teste local",
    html: `
      <p style="margin-bottom:22px; font-size: 18px" >
        Uma nova pessoa pretende fazer um agendamento.
      </p>
      <p style="margin-bottom:22px; font-size: 18px" >
        <strong>Nome: </strong>${userName}<br/>
        <strong>Email: </strong>${email}<br/>
        <strong>Telefone: </strong>${tel}<br/>
        <strong>CEP: </strong>${cep}<br/>
      </p>
    `,
  });
}
export default sendMyNotification;
