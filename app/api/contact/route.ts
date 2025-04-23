import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { name, email, mobile, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const emailContent = `
    <h2>📥 New Enquiry Received!</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Mobile:</strong> ${mobile}</p>
    <p><strong>Message:</strong><br/>${message}</p>
  `;

  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "🔥 New Enquiry from Unity Exporter Website!",
      html: emailContent,
      priority: 'high',
      headers: {
        'X-Priority': '1 (Highest)',
        'X-MSMail-Priority': 'High',
        'Importance': 'High',
      },
    });
  
    console.log('Email sent successfully:', info);
  
    return new Response(JSON.stringify({ message: 'Message sent successfully' }), { status: 200 });
  } catch (error) {
    console.error('Failed to send message:', error);
  
    if (error instanceof Error) {
      return new Response(JSON.stringify({ message: 'Failed to send message', error: error.message }), { status: 500 });
    } else {
      return new Response(JSON.stringify({ message: 'Failed to send message', error: String(error) }), { status: 500 });
    }
    
  }
  
}
