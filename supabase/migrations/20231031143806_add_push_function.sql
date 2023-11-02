create or replace function push(changes jsonb) returns void
as $$
declare new_training jsonb;
declare updated_training jsonb;
declare new_step jsonb;
declare updated_step jsonb;
declare new_superset jsonb;
declare updated_superset jsonb;
declare new_exercice jsonb;
declare updated_exercice jsonb;
declare new_serie jsonb;
declare updated_serie jsonb;
begin
  -- EXERCICE
  -- create
  for
    new_exercice 
    in select jsonb_array_elements((changes->'exercices'->'created')) 
  loop 
    perform create_exercice(
      (new_exercice->>'id')::uuid,
      (new_exercice->>'name'),
      epoch_to_timestamp(new_exercice->>'created_at'),
      epoch_to_timestamp(new_exercice->>'updated_at')
    );
  end loop;
  -- delete
  with deleted_exercices as (
    select jsonb_array_elements_text(changes->'exercices'->'deleted')::uuid as deleted
  )
  update exercices
  set deleted_at = now(), last_modified_at = now()
  from deleted_exercices
  where exercices.id = deleted_exercices.deleted;
  -- update
  for
    updated_exercice 
    in select jsonb_array_elements((changes->'exercices'->'updated'))
  loop
    perform update_exercice(
      (updated_exercice->>'id')::uuid,
      (updated_exercice->>'name'),
      epoch_to_timestamp(updated_exercice->>'updated_at')
    );
  end loop;

  -- TRAINING
  -- create
  for
    new_training
    in select jsonb_array_elements((changes->'trainings'->'created')) 
  loop 
    perform create_training(
      (new_exercice->>'id')::uuid,
      (new_exercice->>'title'),
      (new_exercice->>'user_id')::uuid,
      epoch_to_timestamp(new_exercice->>'created_at'),
      epoch_to_timestamp(new_exercice->>'updated_at')
    );
  end loop;
  -- delete
  with deleted_trainings as (
    select jsonb_array_elements_text(changes->'trainings'->'deleted')::uuid as deleted
  )
  update trainings
  set deleted_at = now(), last_modified_at = now()
  from deleted_trainings
  where trainings.id = deleted_trainings.deleted;
  -- update
  for
    updated_training
    in select jsonb_array_elements((changes->'trainings'->'updated'))
  loop
    perform update_training(
      (updated_training->>'id')::uuid,
      (updated_training->>'title'),
      epoch_to_timestamp(updated_training->>'updated_at')
    );
  end loop;

  -- TRAINING_STEPS
  -- create
  for
    new_step
    in select jsonb_array_elements((changes->'trainings_steps'->'created')) 
  loop 
    perform create_training_step(
      (new_step->>'id')::uuid,
      (new_step->>'order'),
      (new_step->>'training_id')::uuid,
      epoch_to_timestamp(new_step->>'created_at'),
      epoch_to_timestamp(new_step->>'updated_at')
    );
  end loop;
  -- delete
  with steps as (
    select jsonb_array_elements_text(changes->'trainings_steps'->'deleted')::uuid as deleted
  )
  update trainings_steps
  set deleted_at = now(), last_modified_at = now()
  from steps
  where trainings_steps.id = steps.deleted;
  -- update
  for
    updated_step 
    in select jsonb_array_elements((changes->'trainings_steps'->'updated'))
  loop
    perform update_training_step(
      (updated_step->>'id')::uuid,
      (updated_step->>'order'),
      epoch_to_timestamp(updated_step->>'updated_at')
    );
  end loop;
  
  -- TRAINING_SUPERSETS
  -- create
  for
    new_superset
    in select jsonb_array_elements((changes->'trainings_supersets'->'created')) 
  loop 
    perform create_training_superset(
      (new_superset->>'id')::uuid,
      (new_superset->>'rest'),
      (new_superset->>'interval_rest'),
      (new_superset->>'nb_round'),
      (new_superset->>'training_step_id')::uuid,
      epoch_to_timestamp(new_superset->>'created_at'),
      epoch_to_timestamp(new_superset->>'updated_at')
    );
  end loop;
  -- delete
  with deleted_supersets as (
    select jsonb_array_elements_text(changes->'trainings_supersets'->'deleted')::uuid as deleted
  )
  update trainings_supersets
  set deleted_at = now(), last_modified_at = now()
  from deleted_supersets
  where trainings_supersets.id = deleted_supersets.deleted;
  -- update
  for
    updated_superset 
    in select jsonb_array_elements((changes->'trainings_supersets'->'updated'))
  loop
    perform update_training_superset(
      (updated_superset->>'id')::uuid,
      (updated_superset->>'rest'),
      (updated_superset->>'interval_rest'),
      (updated_superset->>'nb_round'),
      epoch_to_timestamp(updated_superset->>'updated_at')
    );
  end loop;

  -- TRAINING_EXERCICES
  -- create
  for
    new_exercice 
    in select jsonb_array_elements((changes->'trainings_exercices'->'created')) 
  loop 
    perform create_training_exercice(
      (new_exercice->>'id')::uuid,
      (new_exercice->>'order'),
      (new_exercice->>'exercice_id')::uuid,
      (new_exercice->>'superset_id')::uuid,
      (new_exercice->>'training_step_id')::uuid,
      epoch_to_timestamp(new_exercice->>'created_at'),
      epoch_to_timestamp(new_exercice->>'updated_at')
    );
  end loop;
  -- delete
  with deleted_exercices as (
    select jsonb_array_elements_text(changes->'trainings_exercices'->'deleted')::uuid as deleted
  )
  update trainings_exercices
  set deleted_at = now(), last_modified_at = now()
  from deleted_exercices
  where trainings_exercices.id = deleted_exercices.deleted;
  -- update
  for
    updated_exercice 
    in select jsonb_array_elements((changes->'trainings_exercices'->'updated'))
  loop
    perform update_training_exercice(
      (updated_exercice->>'id')::uuid,
      (updated_exercice->>'order'),
      epoch_to_timestamp(updated_exercice->>'updated_at')
    );
  end loop;

  -- TRAINING_EXERCICES_SERIES
  -- create
  for
    new_serie
    in select jsonb_array_elements((changes->'trainings_exercices_series'->'created')) 
  loop 
    perform create_training_exercice_serie(
      (new_serie->>'id')::uuid,
      (new_serie->>'weight'),
      (new_serie->>'repetition'),
      (new_serie->>'time'),
      (new_serie->>'rest'),
      (new_serie->>'order'),
      (new_serie->>'training_exercice_id')::uuid,
      epoch_to_timestamp(new_serie->>'created_at'),
      epoch_to_timestamp(new_serie->>'updated_at')
    );
  end loop;
  -- delete
  with deleted_series as (
    select jsonb_array_elements_text(changes->'trainings_exercices_series'->'deleted')::uuid as deleted
  )
  update trainings_exercices_series
  set deleted_at = now(), last_modified_at = now()
  from deleted_series
  where trainings_exercices_series.id = deleted_series.deleted;
  -- update
  for
    updated_serie
    in select jsonb_array_elements((changes->'trainings_exercices_series'->'updated'))
  loop
    perform update_training_exercice_serie(
      (updated_serie->>'id')::uuid,
      (updated_serie->>'weight'),
      (updated_serie->>'repetition'),
      (updated_serie->>'time'),
      (updated_serie->>'rest'),
      (updated_serie->>'order'),
      epoch_to_timestamp(updated_serie->>'updated_at')
    );
  end loop;
end; $$ language plpgsql;
