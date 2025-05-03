import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
emailjs.init("Nfb3TqFV7xh5JS85F");

interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendEmail = async (data: EmailData): Promise<void> => {
  try {
    // Your actual EmailJS credentials
    const serviceId = 'service_2we7o48';  // Your service ID
    const templateId = 'template_ayf2s0m'; // Your template ID
    const publicKey = 'Nfb3TqFV7xh5JS85F';   // Your public key

    // Prepare the template parameters
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      subject: data.subject,
      message: data.message,
    };

    // Send the email using EmailJS
    await emailjs.send(serviceId, templateId, templateParams, publicKey);
    
    console.log('Email sent successfully!');
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email');
  }
};