import { NextRequest, NextResponse } from 'next/server';
const brevo = require('@getbrevo/brevo');
import * as envConfig from '@/config';

const style = `<style>
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
      </style>`;

function generateCustomerHTML(
  product: string,
  firstname: string,
  lastname: string,
  email: string,
  getInTouch: boolean,
  phone?: string,
  message?: string
): string {
  return `
        ${style}
        <p>Nouvelle configuration pour ${product} générée.</p>
        <p><strong>Contact :</strong> ${firstname} ${lastname}</p>
        <p><strong>Téléphone :</strong> ${phone ? phone : 'Non renseigné'}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Message :</strong> ${message ? message : 'Aucun message spécifique'}</p>
        <p><strong>Souhaite être recontacté :</strong> ${getInTouch ? 'Oui' : 'Non'}</p
      `;
}

function generateConfigHTML(data: any[]): string {
  return `
      ${style}
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

    //For customer
    await apiInstance.sendTransacEmail({
      to: [{ email, firstname: `${firstname} ${lastname}` }],
      templateId: 2,
      params: {
        subject: mailSubject,
        mailMessage,
        product,
        total,
        html: generateConfigHTML(config),
      },
    });

    //For us
    apiInstance.sendTransacEmail({
      to: [{ email: envConfig.mailContact, name: 'Nirvana Van' }],
      bcc: [{ email: 'monjocamille@gmail.com', name: 'Camille MONJO' }],
      templateId: 2,
      subject: 'Nouvelle configuration générée pour ' + product,
      params: {
        internal: true,
        subject: mailSubject,
        mailMessage,
        product,
        total,
        customer: generateCustomerHTML(
          product,
          firstname,
          lastname,
          email,
          getInTouch,
          phone,
          message
        ),
        html: generateConfigHTML(config),
      },
    });

    return NextResponse.json({ message: 'success' }, { status: 200 });
  } catch (error) {
    console.log('Error sending email', error);
    return NextResponse.json({ error: null }, { status: 500 });
  }
}
