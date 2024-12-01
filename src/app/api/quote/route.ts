import { NextRequest, NextResponse } from 'next/server';
const brevo = require('@getbrevo/brevo');

export async function POST(request: NextRequest) {
  try {
    const { firstname, lastname, phone, email, message, getInTouch } =
      await request.json();

    let apiInstance = new brevo.TransactionalEmailsApi();
    let apiKey = apiInstance.authentications['apiKey'];
    apiKey.apiKey = process.env.BREVO_API_KEY;

    if (!firstname || !lastname || !email) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis.' },
        { status: 400 }
      );
    }

    const data = await apiInstance.sendTransacEmail({
      to: [{ email, firstname: `${firstname} ${lastname}` }],
      templateId: 2,
      params: {
        firstname: `${firstname} ${lastname}`,
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
