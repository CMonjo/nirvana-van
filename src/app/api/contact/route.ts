import { NextRequest, NextResponse } from 'next/server';
const brevo = require('@getbrevo/brevo');

export async function POST(request: NextRequest) {
  try {
    const { firstname, lastname, phone, email, message } = await request.json();

    let apiInstance = new brevo.TransactionalEmailsApi();
    let apiKey = apiInstance.authentications['apiKey'];
    apiKey.apiKey = process.env.BREVO_API_KEY;
    let sendSmtpEmail = new brevo.SendSmtpEmail();

    if (!firstname || !lastname || !email || !message) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis.' },
        { status: 400 }
      );
    }

    sendSmtpEmail.subject = `Nouveau message de ${name} (${email})`;
    sendSmtpEmail.htmlContent = `
        <p>Vous avez reçu un nouveau message de contact :</p>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Message :</strong> ${message}</p>
      `;
    sendSmtpEmail.sender = {
      name: name,
      email: 'contact@nirvana-van.com',
    };
    sendSmtpEmail.to = [
      { email: 'contact@nirvana-van.com', name: 'Nirvana Van' },
    ];
    sendSmtpEmail.replyTo = {
      email: email,
      name: name,
    };

    await apiInstance.sendTransacEmail(sendSmtpEmail);
    return NextResponse.json(
      { message: 'Email envoyé avec succès.' },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);
    return NextResponse.json(
      { error: "Une erreur est survenue lors de l'envoi de l'email." },
      { status: 500 }
    );
  }
}