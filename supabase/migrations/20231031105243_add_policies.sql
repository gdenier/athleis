CREATE SCHEMA IF NOT EXISTS private;

ALTER TABLE "exercices" enable ROW level security;
CREATE policy "exercices are viewable by everyone" ON "exercices" FOR SELECT TO authenticated USING (TRUE);
CREATE policy "exercices cannot be created" ON "exercices" FOR INSERT TO authenticated WITH CHECK (FALSE);
CREATE policy "exercices cannot be updated" ON "exercices" FOR UPDATE TO authenticated USING (FALSE);
CREATE policy "exercices cannot be deleted" ON "exercices" FOR DELETE TO authenticated USING (FALSE);

ALTER TABLE "trainings" enable ROW level security;
CREATE policy "trainings are viewable by the owner" ON "trainings" FOR SELECT TO authenticated USING (auth.uid () = user_id);
CREATE policy "owner can insert his training" ON "trainings" FOR INSERT TO authenticated WITH CHECK (auth.uid () = user_id);
CREATE policy "owner can update his training" ON "trainings" FOR UPDATE TO authenticated USING (auth.uid () = user_id);
CREATE policy "owner can delete his training" ON "trainings" FOR DELETE TO authenticated USING (auth.uid () = user_id);
CREATE index userid ON "trainings" USING btree (user_id);

create function private.stepBelongTraining()
returns boolean
language plpgsql
security definer -- will run as the creator
as $$
begin
  return exists ( 
    SELECT 1 
      FROM "trainings" 
      WHERE 
        auth.uid() = "trainings"."user_id"
        AND "trainings"."id" = training_id 
  );
end;
$$;

ALTER TABLE "trainings_steps" enable ROW level security;
CREATE policy "trainings_steps are not requestable" ON "trainings_steps" FOR SELECT TO authenticated USING (FALSE);
CREATE policy "training owner can insert steps" ON "trainings_steps" FOR INSERT TO authenticated WITH CHECK (private.stepBelongTraining());
CREATE policy "owner can update his training" ON "trainings_steps" FOR UPDATE TO authenticated USING (private.stepBelongTraining());
CREATE policy "owner can delete his training" ON "trainings_steps" FOR DELETE TO authenticated USING (private.stepBelongTraining());

create function private.supersetBelongTraining()
returns boolean
language plpgsql
security definer -- will run as the creator
as $$
begin
  return exists ( 
    SELECT 1 
      FROM "trainings" 
        INNER JOIN "trainings_steps" ON "trainings"."id" = "trainings_steps"."training_id" 
      WHERE
        auth.uid() = "trainings"."user_id" 
        AND "trainings_steps"."id" = training_step_id
  );
end;
$$;
ALTER TABLE "trainings_supersets" enable ROW level security;
CREATE policy "trainings_supersets are not requestable" ON "trainings_supersets" FOR SELECT TO authenticated USING (FALSE);
CREATE policy "training owner can insert superset" ON "trainings_supersets" FOR INSERT TO authenticated WITH CHECK (private.supersetBelongTraining());
CREATE policy "owner can update his superset" ON "trainings_supersets" FOR UPDATE TO authenticated USING (private.supersetBelongTraining());
CREATE policy "owner can delete his superset" ON "trainings_supersets" FOR DELETE TO authenticated USING (private.supersetBelongTraining());

create function private.exerciceBelongTraining()
returns boolean
language plpgsql
security definer -- will run as the creator
as $$
begin
  return exists ( 
    SELECT 1 
      FROM "trainings" 
        INNER JOIN "trainings_steps" ON "trainings"."id" = "trainings_steps"."training_id" 
        INNER JOIN "trainings_supersets" ON "trainings_steps"."id" = "trainings_supersets"."training_step_id" 
      WHERE
        auth.uid() = "trainings"."user_id" 
        AND (
          "trainings_steps"."id" = training_step_id 
          OR "trainings_supersets"."id" = superset_id
        )
  );
end;
$$;
ALTER TABLE "trainings_exercices" enable ROW level security;
CREATE policy "trainings_exercices are not requestable" ON "trainings_exercices" FOR SELECT TO authenticated USING (FALSE);
CREATE policy "training owner can insert exercice" ON "trainings_exercices" FOR INSERT TO authenticated WITH CHECK (private.exerciceBelongTraining());
CREATE policy "owner can update his exercice" ON "trainings_exercices" FOR UPDATE TO authenticated USING (private.exerciceBelongTraining());
CREATE policy "owner can delete his exercice" ON "trainings_exercices" FOR DELETE TO authenticated USING (private.exerciceBelongTraining());

create function private.serieBelongTraining()
returns boolean
language plpgsql
security definer -- will run as the creator
as $$
begin
  return exists ( 
    SELECT 1 
      FROM "trainings" 
        INNER JOIN "trainings_steps" ON "trainings"."id" = "trainings_steps"."training_id" 
        INNER JOIN "trainings_supersets" ON "trainings_steps"."id" = "trainings_supersets"."training_step_id" 
        INNER JOIN "trainings_exercices" ON (
          "trainings_steps"."id" = "trainings_exercices"."training_step_id"
          OR "trainings_supersets"."id" = "trainings_exercices"."superset_id"
        )
      WHERE
        auth.uid() = "trainings"."user_id" 
        AND "trainings_exercices"."id" = training_exercice_id 
  );
end;
$$;
ALTER TABLE "trainings_exercices_series" enable ROW level security;
CREATE policy "trainings_exercices are not requestable" ON "trainings_exercices_series" FOR SELECT TO authenticated USING (FALSE);
CREATE policy "training owner can insert exercice" ON "trainings_exercices_series" FOR INSERT TO authenticated WITH CHECK (private.serieBelongTraining());
CREATE policy "owner can update his exercice" ON "trainings_exercices_series" FOR UPDATE TO authenticated USING (private.serieBelongTraining());
CREATE policy "owner can delete his exercice" ON "trainings_exercices_series" FOR DELETE TO authenticated USING (private.serieBelongTraining());
