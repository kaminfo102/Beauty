import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, service, message } = body;

    // Create transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD, // Use App Password, not regular password
      },
    });

    // Service names mapping
    const serviceNames: { [key: string]: string } = {
      laser: 'لیزر موهای زائد',
      nutrition: 'مشاور تغذیه و سلامت',
      body: 'دستگاه لاغری و تناسب اندام',
      injection: 'تزریق ژل و فیلر',
      other: 'سایر',
    };

    const serviceName = serviceNames[service] || service;

    // Email template
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.RECEIVER_EMAIL || process.env.GMAIL_USER,
      subject: `درخواست رزرو نوبت - ${name}`,
      html: `
        <!DOCTYPE html>
        <html dir="rtl" lang="fa">
        <head>
          <meta charset="UTF-8">
          <style>
            body {
              font-family: 'Vazirmatn', Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              background-color: #f5f5f5;
              padding: 20px;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              background: white;
              border-radius: 16px;
              overflow: hidden;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            .header {
              background: linear-gradient(135deg, #e11d48 0%, #ec4899 100%);
              color: white;
              padding: 30px;
              text-align: center;
            }
            .header h1 {
              margin: 0;
              font-size: 24px;
            }
            .content {
              padding: 30px;
            }
            .info-row {
              display: flex;
              padding: 15px 0;
              border-bottom: 1px solid #f0f0f0;
            }
            .info-row:last-child {
              border-bottom: none;
            }
            .label {
              font-weight: bold;
              color: #e11d48;
              width: 150px;
              flex-shrink: 0;
            }
            .value {
              color: #333;
              flex: 1;
            }
            .message-box {
              background: #f9fafb;
              border-right: 4px solid #e11d48;
              padding: 15px;
              margin-top: 20px;
              border-radius: 8px;
            }
            .footer {
              background: #f9fafb;
              padding: 20px;
              text-align: center;
              color: #666;
              font-size: 12px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>درخواست رزرو نوبت جدید</h1>
            </div>
            <div class="content">
              <div class="info-row">
                <div class="label">نام و نام خانوادگی:</div>
                <div class="value">${name}</div>
              </div>
              <div class="info-row">
                <div class="label">شماره تماس:</div>
                <div class="value">${phone}</div>
              </div>
              <div class="info-row">
                <div class="label">خدمات مورد نظر:</div>
                <div class="value">${serviceName}</div>
              </div>
              ${message ? `
              <div class="message-box">
                <div class="label" style="margin-bottom: 10px;">پیام:</div>
                <div class="value">${message.replace(/\n/g, '<br>')}</div>
              </div>
              ` : ''}
            </div>
            <div class="footer">
              <p>این ایمیل به صورت خودکار از وبسایت کلینیک زیبایی نیولایف ارسال شده است.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: 'ایمیل با موفقیت ارسال شد' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, message: 'خطا در ارسال ایمیل' },
      { status: 500 }
    );
  }
}

