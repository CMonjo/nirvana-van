import { NextRequest, NextResponse } from 'next/server';
const brevo = require('@getbrevo/brevo');
import * as config from '@/config';

export async function POST(request: NextRequest) {
  try {
    const { firstname, lastname, phone, email, message, subject, locale } =
      await request.json();

    let apiInstance = new brevo.TransactionalEmailsApi();
    let apiKey = apiInstance.authentications['apiKey'];
    apiKey.apiKey = process.env.BREVO_API_KEY;
    let sendSmtpEmail = new brevo.SendSmtpEmail();

    if (!firstname || !lastname || !email || !message || !subject) {
      return NextResponse.json({ error: 'missingFields' }, { status: 400 });
    }

    sendSmtpEmail.subject = `Nouveau message de ${firstname} ${lastname?.toUpperCase()} (${email})`;
    sendSmtpEmail.htmlContent = `
        <p>Nouvelle demande de contac.</p>
        <p><strong>Contact :</strong> ${firstname} ${lastname?.toUpperCase()} (${email})</p>
        <p><strong>Téléphone :</strong> ${phone || 'Non renseigné'}</p>
        <p><strong>Sujet :</strong> ${subject}</p>
        <p><strong>Message :</strong> ${message}</p>
        <p><strong>Langue utilisée:</strong> ${locale}</p>
      `;
    sendSmtpEmail.sender = {
      name: 'Nouveau message de contact',
      email: config.mailContact,
    };
    sendSmtpEmail.to = [{ email: config.mailContact, name: 'Nirvana Van' }];
    sendSmtpEmail.bcc = [
      { email: 'monjocamille@gmail.com', name: 'Camille MONJO' },
    ];
    sendSmtpEmail.replyTo = {
      email: email,
      name: firstname + ' ' + lastname?.toUpperCase(),
    };

    await apiInstance.sendTransacEmail(sendSmtpEmail);
    return NextResponse.json({ message: 'messageSent' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: null }, { status: 500 });
  }
}
