-- training
create or replace function create_training(
  training_id uuid,
  training_title character varying,
  training_user_id uuid,
  training_created_at timestamp with time zone,
  training_updated_at timestamp with time zone
) returns uuid
as $$
declare new_id uuid;
begin
  insert into trainings (
    id,
    title,
    user_id,
    created_at,
    updated_at,
    server_created_at,
    last_modified_at
  )
  values (
    training_id,
    training_title,
    training_user_id,
    training_created_at,
    training_updated_at,
    now(),
    now() + interval '1 microsecond'
  )
  returning id into new_id;
  return new_id;
end; $$ language plpgsql;

create or replace function update_training(
  training_id uuid,
  training_title character varying,
  training_updated_at timestamp with time zone
) returns uuid
as $$ begin
  update trainings 
  set
    title = training_title,
    updated_at = training_updated_at,
    last_modified_at = now()
  where id = training_id;
  return training_id;
end; $$ language plpgsql;

-- training_steps
create or replace function create_training_step(
  training_step_id uuid,
  training_step_order integer,
  training_step_training_id uuid,
  training_step_created_at timestamp with time zone,
  training_step_updated_at timestamp with time zone
) returns uuid
as $$
declare new_id uuid;
begin
  insert into trainings_steps (
    id,
    "order",
    training_id,
    created_at,
    updated_at,
    server_created_at,
    last_modified_at
  )
  values (
    training_step_id,
    training_step_order,
    training_step_training_id,
    training_created_at,
    training_updated_at,
    now(),
    now() + interval '1 microsecond'
  )
  returning id into new_id;
  return new_id;
end; $$ language plpgsql;

create or replace function update_training_step(
  training_step_id uuid,
  training_step_order integer,
  training_updated_at timestamp with time zone
) returns uuid
as $$ begin
  update trainings_steps
  set
    "order" = training_step_order,
    updated_at = training_updated_at,
    last_modified_at = now()
  where id = training_step_id;
  return training_step_id;
end; $$ language plpgsql;

-- training_superset
create or replace function create_training_superset(
  training_superset_id uuid,
  training_superset_rest integer,
  training_superset_interval_rest integer,
  training_superset_nb_round integer,
  training_superset_training_step_id uuid,
  training_superset_created_at timestamp with time zone,
  training_superset_updated_at timestamp with time zone
) returns uuid
as $$
declare new_id uuid;
begin
  insert into trainings_supersets (
    id,
    rest,
    interval_rest,
    nb_round,
    training_step_id,
    created_at,
    updated_at,
    server_created_at,
    last_modified_at
  )
  values (
    training_superset_id,
    training_superset_rest,
    training_superset_interval_rest,
    training_superset_nb_round,
    training_superset_training_step_id,
    training_superset_created_at,
    training_superset_updated_at,
    now(),
    now() + interval '1 microsecond'
  )
  returning id into new_id;
  return new_id;
end; $$ language plpgsql;

create or replace function update_training_superset(
  training_superset_id uuid,
  training_superset_rest integer,
  training_superset_interval_rest integer,
  training_superset_nb_round integer,
  training_superset_updated_at timestamp with time zone
) returns uuid
as $$ begin
  update trainings_supersets
  set
    rest = training_superset_rest,
    interval_rest = training_superset_interval_rest,
    nb_round = training_superset_nb_round,
    updated_at = training_superset_updated_at,
    last_modified_at = now()
  where id = training_superset_id;
  return training_superset_id;
end; $$ language plpgsql;

-- training_exercice
create or replace function create_training_exercice(
  training_exercice_id uuid,
  training_exercice_order integer,
  training_exercice_exercice_id uuid,
  training_exercice_superset_id uuid,
  training_exercice_training_step_id uuid,
  training_exercice_created_at timestamp with time zone,
  training_exercice_updated_at timestamp with time zone
) returns uuid
as $$
declare new_id uuid;
begin
  insert into trainings_exercices (
    id,
    "order",
    exercice_id,
    superset_id,
    training_step_id,
    created_at,
    updated_at,
    server_created_at,
    last_modified_at
  )
  values (
    training_exercice_id,
    training_exercice_order,
    training_exercice_exercice_id,
    training_exercice_superset_id,
    training_exercice_training_step_id,
    training_exercice_created_at,
    training_exercice_updated_at,
    now(),
    now() + interval '1 microsecond'
  )
  returning id into new_id;
  return new_id;
end; $$ language plpgsql;

create or replace function update_training_exercice(
  training_exercice_id uuid,
  training_exercice_order integer,
  training_exercice_updated_at timestamp with time zone
) returns uuid
as $$ begin
  update trainings_exercices
  set
    "order" = training_exercice_order,
    updated_at = training_exercice_updated_at,
    last_modified_at = now()
  where id = training_exercice_id;
  return training_exercice_id;
end; $$ language plpgsql;

-- training
create or replace function create_training_exercice_serie(
  training_exercice_serie_id uuid,
  training_exercice_serie_weight real,
  training_exercice_serie_repetition integer,
  training_exercice_serie_time integer,
  training_exercice_serie_rest integer,
  training_exercice_serie_order integer,
  training_exercice_serie_training_exercice_id uuid,
  training_exercice_serie_created_at timestamp with time zone,
  training_exercice_serie_updated_at timestamp with time zone
) returns uuid
as $$
declare new_id uuid;
begin
  insert into trainings_exercices_series (
    id,
    weight,
    repetition,
    time,
    rest,
    "order",
    training_exercice_id,
    created_at,
    updated_at,
    server_created_at,
    last_modified_at
  )
  values (
    training_exercice_serie_id,
    training_exercice_serie_weight,
    training_exercice_serie_repetition,
    training_exercice_serie_time,
    training_exercice_serie_rest,
    training_exercice_serie_order,
    training_exercice_serie_training_exercice_id,
    training_exercice_serie_created_at,
    training_exercice_serie_updated_at,
    now(),
    now() + interval '1 microsecond'
  )
  returning id into new_id;
  return new_id;
end; $$ language plpgsql;

create or replace function update_training_exercice_serie(
  training_exercice_serie_id uuid,
  training_exercice_serie_weight real,
  training_exercice_serie_repetition integer,
  training_exercice_serie_time integer,
  training_exercice_serie_rest integer,
  training_exercice_serie_order integer,
  training_exercice_serie_updated_at timestamp with time zone
) returns uuid
as $$
declare new_id uuid;
begin
  update trainings_exercices_series 
  set
    weight = training_exercice_serie_weight,
    repetition = training_exercice_serie_repetition,
    time = training_exercice_serie_time,
    rest = training_exercice_serie_rest,
    "order" = training_exercice_serie_order,
    updated_at = training_exercice_serie_updated_at,
    last_modified_at = now()
  where id = training_exercice_serie_id;
  return training_exercice_serie_id;
end; $$ language plpgsql;

