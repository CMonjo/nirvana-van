import { NextRequest, NextResponse } from 'next/server';
const brevo = require('@getbrevo/brevo');
import * as config from '@/config';

export async function POST(request: NextRequest) {
  try {
    const {
      startDate,
      endDate,
      firstname,
      lastname,
      phone,
      email,
      message,
      locale,
    } = await request.json();

    let apiInstance = new brevo.TransactionalEmailsApi();
    let apiKey = apiInstance.authentications['apiKey'];
    apiKey.apiKey = process.env.BREVO_API_KEY;
    let sendSmtpEmail = new brevo.SendSmtpEmail();

    if (!firstname || !lastname || !email || !startDate || !endDate) {
      return NextResponse.json({ error: 'missingFields' }, { status: 400 });
    }

    const daysDate =
      new Date(endDate).getTime() - new Date(startDate).getTime();
    const days = Math.ceil(daysDate / (1000 * 60 * 60 * 24));
    const startDateFormatted = new Date(startDate).toLocaleDateString('fr-FR', {
      weekday: 'long',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
    const endDateFormatted = new Date(endDate).toLocaleDateString('fr-FR', {
      weekday: 'long',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });

    sendSmtpEmail.subject = `Demande de ${firstname} ${lastname?.toUpperCase()}`;
    sendSmtpEmail.htmlContent = `
        <p><strong>Contact:</strong> ${firstname} ${lastname?.toUpperCase()} (${email})</p>
        <p><strong>Téléphone :</strong> ${phone || 'Non renseigné'}</p>
        <p><strong>Location du </strong> ${startDateFormatted} <strong>au</strong> ${endDateFormatted} (${days + 1} jours)</p>
        <p><strong>Message :</strong> ${message || 'Aucun message'}</p>
        <p><strong>Langue utilisée:</strong> ${locale}</p>
      `;
    sendSmtpEmail.sender = {
      name: 'Demande de location',
      email: config.mailContact,
    };
    sendSmtpEmail.to = [{ email: config.mailContact, name: 'Nirvana Van' }];
    sendSmtpEmail.replyTo = {
      email: email,
      name: firstname + ' ' + lastname?.toUpperCase(),
    };

    await apiInstance.sendTransacEmail(sendSmtpEmail);
    return NextResponse.json({ message: 'success' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: null }, { status: 500 });
  }
}
