import nodemailer from 'nodemailer';

export interface dataClient{
  service: string;
  nameClient: string;
  emailClient: string;
  observation: string;
}

export async function Send({service, nameClient, emailClient, observation}: dataClient){
  console.log("aaaaaa")
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: import.meta.env.EMAIL, // generated ethereal user
      pass: import.meta.env.PASSWORD, // generated ethereal password
    },
  });

  // send mail with defined transport object
    await transporter.sendMail({
      from: '"Mensagem do cliente" <contato@2core.com.br>', // sender address
      to: import.meta.env.EMAIL, // list of receivers
      subject: "Novo pedido de contato", // Subject line
      text: "teste", // plain text body
      html: `<h3>${service}</h3> <p>${nameClient}</p> <p>${emailClient}</p> <p>${observation}</p>`
  });
}