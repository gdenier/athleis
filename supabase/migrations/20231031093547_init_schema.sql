CREATE TABLE IF NOT EXISTS "exercices" (
	"id" "uuid" PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(256) NOT NULL UNIQUE,
	"primer" text NOT NULL,
	"steps" text,
	"tips" text
);
CREATE TABLE IF NOT EXISTS "trainings" (
	"id" "uuid" PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" varchar(256) NOT NULL,
	"user_id" "uuid" NOT NULL
);
CREATE TABLE IF NOT EXISTS "trainings_steps" (
	"id" "uuid" PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"order" integer NOT NULL,
	"training_id" "uuid" NOT NULL,
	CONSTRAINT "trainings_steps_training_id_trainings_id_fk" FOREIGN KEY ("training_id") REFERENCES "trainings"("id") ON DELETE cascade ON UPDATE no action
);
CREATE TABLE IF NOT EXISTS "trainings_supersets" (
	"id" "uuid" PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"rest" integer NOT NULL,
	"interval_rest" integer NOT NULL,
	"nb_round" integer DEFAULT 1 NOT NULL,
	"training_step_id" "uuid" NOT NULL,
	CONSTRAINT "trainings_supersets_training_step_id_trainings_steps_id_fk" FOREIGN KEY ("training_step_id") REFERENCES "trainings_steps"("id") ON DELETE cascade ON UPDATE no action
);
CREATE TABLE IF NOT EXISTS "trainings_exercices" (
	"id" "uuid" PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"order" integer,
	"exercice_id" "uuid" NOT NULL,
	"superset_id" "uuid",
	"training_step_id" "uuid",
	CONSTRAINT "trainings_exercices_exercice_id_exercices_id_fk" FOREIGN KEY ("exercice_id") REFERENCES "exercices"("id") ON DELETE set null ON UPDATE no action,
	CONSTRAINT "trainings_exercices_superset_id_trainings_supersets_id_fk" FOREIGN KEY ("superset_id") REFERENCES "trainings_supersets"("id") ON DELETE cascade ON UPDATE no action,
	CONSTRAINT "trainings_exercices_training_step_id_trainings_steps_id_fk" FOREIGN KEY ("training_step_id") REFERENCES "trainings_steps"("id") ON DELETE cascade ON UPDATE no action
);
CREATE TABLE IF NOT EXISTS "trainings_exercices_series" (
	"id" "uuid" PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"weight" real,
	"repetition" integer,
	"time" integer,
	"rest" integer,
	"order" integer NOT NULL,
	"training_exercice_id" "uuid" NOT NULL,
	CONSTRAINT "trainings_exercices_series_training_exercice_id_trainings_exercices_id_fk" FOREIGN KEY ("training_exercice_id") REFERENCES "trainings_exercices"("id") ON DELETE cascade ON UPDATE no action
);
CREATE TABLE IF NOT EXISTS "medias" (
	"id" "uuid" PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"path" varchar(256) NOT NULL UNIQUE
);
CREATE TABLE IF NOT EXISTS "media_exercices" (
	"id" "uuid" PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"exercice_id" "uuid" NOT NULL,
	"media_id" "uuid" NOT NULL,
  	CONSTRAINT "media_exercices_exercice_id_exercices_id_fk" FOREIGN KEY ("exercice_id") REFERENCES "exercices"("id") ON DELETE cascade ON UPDATE no action,
	CONSTRAINT "media_exercices_media_id_medias_id_fk" FOREIGN KEY ("media_id") REFERENCES "medias"("id") ON DELETE cascade ON UPDATE no action
);
ALTER TABLE "media_exercices" ADD UNIQUE ("exercice_id", "media_id");
