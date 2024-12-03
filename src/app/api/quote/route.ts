import { getPrice } from '@/utils/price';
import { NextRequest, NextResponse } from 'next/server';
const brevo = require('@getbrevo/brevo');

function generateHTML(data: any[]): string {
  return `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap');
        body {
          font-family: 'Montserrat', sans-serif;
        }
        .divider {
          border: none;
          border-top: 1px solid #F5F5F5;
          margin: 10px 0;
        }
        .title {
          font-weight: 300;
          font-size: 10px;
          display: block;
          margin-bottom: 5px;
        }
        .option {
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          margin-bottom: 5px;
        }
        .option strong {
          font-weight: 500;
        }
        .price {
          font-weight: 400;
        }
      </style>
      ${data
        .map((item) => {
          const optionsContent = item.options
            .map(
              (option: { key: string; price: string }) => `
                <div class="option">
                  <span><strong>${option.key}</strong></span>
                  <span class="price">${option.price}</span>
                </div>
              `
            )
            .join('');
          if (item.name) {
            return `
              <hr class="divider">
              <span class="title">${item.name}</span>
              ${optionsContent}
            `;
          }
          return optionsContent;
        })
        .join('')}
    `;
}
export async function POST(request: NextRequest) {
  try {
    const {
      firstname,
      lastname,
      phone,
      email,
      message,
      getInTouch,
      config,
      total,
      product,
      mailSubject,
      mailMessage,
    } = await request.json();

    let apiInstance = new brevo.TransactionalEmailsApi();
    let apiKey = apiInstance.authentications['apiKey'];
    apiKey.apiKey = process.env.BREVO_API_KEY;

    if (!firstname || !lastname || !email) {
      return NextResponse.json({ error: 'missingFields' }, { status: 400 });
    }

    await apiInstance.sendTransacEmail({
      to: [{ email, firstname: `${firstname} ${lastname}` }],
      templateId: 2,
      params: {
        subject: mailSubject,
        mailMessage,
        product,
        total,
        html: generateHTML(config),
      },
    });

    return NextResponse.json({ message: 'success' }, { status: 200 });
  } catch (error) {
    console.log('Error sending email', error);
    return NextResponse.json({ error: null }, { status: 500 });
  }
}
