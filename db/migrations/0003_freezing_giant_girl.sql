    -- Drop the existing foreign key constraint
    ALTER TABLE "quotes" DROP CONSTRAINT IF EXISTS "quotes_post_id_posts_post_id_fk";
    --> statement-breakpoint

    -- Alter the column type in the referenced table (posts)
    ALTER TABLE "posts" ALTER COLUMN "post_id" SET DATA TYPE uuid USING "post_id"::uuid;
    --> statement-breakpoint

    -- Alter the column type in the referencing table (quotes)
    ALTER TABLE "quotes" ALTER COLUMN "post_id" SET DATA TYPE uuid USING "post_id"::uuid;
    --> statement-breakpoint

    -- Alter other columns as needed
    ALTER TABLE "quotes" ALTER COLUMN "category" SET DATA TYPE text;
    --> statement-breakpoint
    ALTER TABLE "quotes" ALTER COLUMN "sentiment" SET DATA TYPE text;
    --> statement-breakpoint

    -- Re-add the foreign key constraint
    ALTER TABLE "quotes" ADD CONSTRAINT "quotes_post_id_posts_post_id_fk" FOREIGN KEY ("post_id") REFERENCES "public"."posts"("post_id") ON DELETE cascade ON UPDATE no action;