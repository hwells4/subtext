DO $$ BEGIN
 CREATE TYPE "public"."run_status" AS ENUM('running', 'completed', 'failed');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."quote_category" AS ENUM('user_needs', 'user_language', 'feature_signals');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."quote_sentiment" AS ENUM('positive', 'negative', 'neutral');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "runs" (
	"run_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"status" "run_status" NOT NULL,
	"start_time" timestamp with time zone DEFAULT now() NOT NULL,
	"end_time" timestamp with time zone,
	"user_question" text,
	"problem_area" text,
	"target_audience" text,
	"product_type" text,
	"product_name" text,
	"subreddits" text[],
	"posts_analyzed_count" integer DEFAULT 0,
	"quotes_extracted_count" integer DEFAULT 0,
	"error_message" text,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "posts" (
	"post_id" text PRIMARY KEY NOT NULL,
	"subreddit" text NOT NULL,
	"url" text NOT NULL,
	"title" text,
	"body" text,
	"comments" text,
	"created_utc" timestamp with time zone,
	"relevance_score" real,
	"classification_justification" text,
	"run_id" uuid,
	"inserted_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "quotes" (
	"quote_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"post_id" text,
	"run_id" uuid,
	"text" text NOT NULL,
	"category" "quote_category" NOT NULL,
	"context" text,
	"sentiment" "quote_sentiment",
	"theme" text,
	"relevance_score" real,
	"embedding" vector(768),
	"inserted_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "posts" ADD CONSTRAINT "posts_run_id_runs_run_id_fk" FOREIGN KEY ("run_id") REFERENCES "public"."runs"("run_id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "quotes" ADD CONSTRAINT "quotes_post_id_posts_post_id_fk" FOREIGN KEY ("post_id") REFERENCES "public"."posts"("post_id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "quotes" ADD CONSTRAINT "quotes_run_id_runs_run_id_fk" FOREIGN KEY ("run_id") REFERENCES "public"."runs"("run_id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
