"use server"

import { Resend } from 'resend';
import WaitlistEmail from '@/components/emails/waitlist-email';
import { renderAsync } from '@react-email/render';

const resend = new Resend(process.env.RESEND_API_KEY);
const WAITLIST_AUDIENCE_ID = process.env.RESEND_WAITLIST_AUDIENCE_ID || '';
// Get the authorized test email or use a default
const AUTHORIZED_TEST_EMAIL = process.env.RESEND_AUTHORIZED_EMAIL || 'harrisondwells@gmail.com';

export async function generateWaitlistEmailHtml(name: string): Promise<string> {
  const nameToUse = name || 'there';
  return await renderAsync(WaitlistEmail({ name: nameToUse }));
}

export async function sendWaitlistConfirmationEmail(email: string, name?: string): Promise<{ success: boolean; message?: string }> {
  console.log('Starting email send process to:', email);
  
  try {
    // Log environment variables (without exposing full API key)
    console.log('API Key exists:', !!process.env.RESEND_API_KEY);
    console.log('Audience ID exists:', !!WAITLIST_AUDIENCE_ID);
    console.log('Using audience ID:', WAITLIST_AUDIENCE_ID || 'None provided');
    
    const nameToUse = name || email.split('@')[0];
    console.log('Using name:', nameToUse);
    
    // Add contact to the Resend audience - this is optional and will fail gracefully
    if (WAITLIST_AUDIENCE_ID) {
      try {
        console.log('Attempting to add contact to audience...');
        const contactResult = await resend.contacts.create({
          email: email,
          firstName: nameToUse,
          unsubscribed: false,
          audienceId: WAITLIST_AUDIENCE_ID,
        });
        
        if (contactResult.error) {
          console.log('Failed to add contact to audience:', contactResult.error.message);
          // Continue with email sending even if audience management fails
        } else {
          console.log('Contact added successfully to audience');
        }
      } catch (contactError) {
        console.error('Error adding contact to Resend audience:', contactError);
        // Continue with email sending even if audience management fails
      }
    }
    
    // Use React Email to render your component to HTML
    console.log('Rendering email HTML...');
    const html = await renderAsync(
      WaitlistEmail({ name: nameToUse })
    );
    
    console.log('Sending email...');
    
    // For testing: only send to verified email address if in test mode
    const emailTo = process.env.NODE_ENV === 'production' ? email : AUTHORIZED_TEST_EMAIL;
    if (process.env.NODE_ENV !== 'production' && email !== AUTHORIZED_TEST_EMAIL) {
      console.log(`Test mode: Redirecting email to ${AUTHORIZED_TEST_EMAIL} instead of ${email}`);
    }
    
    const emailResult = await resend.emails.send({
      from: 'Subtext <onboarding@resend.dev>',
      to: emailTo,
      subject: 'Welcome to the Subtext Waitlist',
      html
    });
    
    if (emailResult.error) {
      console.error('Email sending failed:', emailResult.error.message);
      return { 
        success: false, 
        message: `Email sending failed: ${emailResult.error.message}` 
      };
    }
    
    console.log('Email sent successfully:', emailResult.data);
    return { success: true };
  } catch (error) {
    console.error('Detailed error sending email:', error);
    if (error instanceof Error) {
      console.error('Error message:', error.message);
      console.error('Error name:', error.name);
      console.error('Error stack:', error.stack);
    }
    return { 
      success: false,
      message: error instanceof Error ? error.message : 'Unknown error sending email'
    };
  }
} 