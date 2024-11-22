import { NextRequest, NextResponse } from 'next/server';
const brevo = require('@getbrevo/brevo');

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    let apiInstance = new brevo.TransactionalEmailsApi();
    let apiKey = apiInstance.authentications['apiKey'];
    apiKey.apiKey = process.env.BREVO_API_KEY;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis.' },
        { status: 400 }
      );
    }

    const data = await apiInstance.sendTransacEmail({
      to: [{ email, name }],
      templateId: 2,
      params: {
        name,
      },
    });
    console.log('API called successfully');

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
