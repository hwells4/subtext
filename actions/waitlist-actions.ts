'use server';

import { db } from '@/db/db';
import {
  InsertWaitlistEntry,
  SelectWaitlistEntry,
  waitlistEntriesTable,
} from '@/db/schema/waitlist-entries-schema';
import { ActionState } from '@/types';
import { eq } from 'drizzle-orm';

export async function createWaitlistEntryAction(
  entry: Omit<InsertWaitlistEntry, 'id' | 'createdAt' | 'updatedAt'>,
): Promise<ActionState<SelectWaitlistEntry>> {
  try {
    const existingEntry = await db.query.waitlistEntries.findFirst({
      where: (table, { eq }) => eq(table.email, entry.email),
    });

    if (existingEntry) {
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

    const [newEntry] = await db
      .insert(waitlistEntriesTable)
      .values(entry)
      .returning();

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