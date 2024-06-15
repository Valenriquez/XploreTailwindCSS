CREATE TABLE IF NOT EXISTS "favorites" (
	"id" serial PRIMARY KEY NOT NULL,
	"character_id" integer NOT NULL,
	"created" timestamp DEFAULT now() NOT NULL
);
