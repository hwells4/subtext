'use server';

import { db } from '@/db/db';
import {
  InsertWaitlistEntry,
  SelectWaitlistEntry,
  waitlistEntriesTable,
} from '@/db/schema/waitlist-entries-schema';
import { ActionState } from '@/types';
import { eq } from 'drizzle-orm';
import { sendWaitlistConfirmationEmail } from '@/actions/email-actions';

export async function createWaitlistEntryAction(
  entry: Omit<InsertWaitlistEntry, 'id' | 'createdAt' | 'updatedAt'>,
): Promise<ActionState<SelectWaitlistEntry>> {
  try {
    console.log('Starting waitlist entry creation process for:', entry.email);
    
    const existingEntry = await db.query.waitlistEntries.findFirst({
      where: (table, { eq }) => eq(table.email, entry.email),
    });

    if (existingEntry) {
      console.log('Found existing entry, updating information');
      const [updatedEntry] = await db
        .update(waitlistEntriesTable)
        .set({
          name: entry.name,
          howHeard: entry.howHeard,
          howHeardOtherDetail: entry.howHeardOtherDetail,
          applyForBeta: entry.applyForBeta,
          updatedAt: new Date(),
        })
        .where(eq(waitlistEntriesTable.email, entry.email))
        .returning();
      
      return {
        isSuccess: true,
        message: 'Your waitlist information has been updated.',
        data: updatedEntry,
      };
    }

    console.log('No existing entry found, creating new entry');
    const [newEntry] = await db
      .insert(waitlistEntriesTable)
      .values(entry)
      .returning();

    console.log('Database entry created successfully');

    // Send confirmation email
    console.log('Attempting to send confirmation email');
    const emailResult = await sendWaitlistConfirmationEmail(entry.email, entry.name || undefined);
    console.log('Email sending result:', emailResult);

    if (!emailResult.success) {
      let message = 'Successfully joined the waitlist!';
      
      if (process.env.NODE_ENV !== 'production') {
        message += ' (Note: In test mode, emails are only sent to your verified email address.)';
      } else {
        message += ' (Note: Welcome email could not be sent at this time.)';
      }
      
      console.log('Email failed to send:', emailResult.message);
      return {
        isSuccess: true,
        message,
        data: newEntry,
      };
    }

    return {
      isSuccess: true,
      message: 'Successfully joined the waitlist!',
      data: newEntry,
    };
  } catch (error) {
    console.error('Error creating waitlist entry:', error);
    if (error instanceof Error && error.message.includes('duplicate key value violates unique constraint')) {
        return { isSuccess: false, message: 'This email address is already on our waitlist.' };
    }
    return { isSuccess: false, message: 'Failed to join the waitlist. Please try again.' };
  }
} 