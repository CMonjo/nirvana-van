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
      return NextResponse.json({ error: 'missingFields' }, { status: 400 });
    }

    const data = await apiInstance.sendTransacEmail({
      to: [{ email, firstname: `${firstname} ${lastname}` }],
      templateId: 2,
      params: {
        firstname: `${firstname} ${lastname}`,
      },
    });

    return NextResponse.json({ message: 'success' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: null }, { status: 500 });
  }
}
