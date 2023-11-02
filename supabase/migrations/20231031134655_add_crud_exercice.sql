create or replace function create_exercice(
  exercice_id uuid,
  exercice_name character varying,
  exercice_created_at timestamp with time zone,
  exercice_updated_at timestamp with time zone
) returns uuid
as $$
declare new_id uuid;
begin
  insert into exercices (
    id,
    name,
    created_at,
    updated_at,
    server_created_at,
    last_modified_at
  )
  values (
    exercice_id,
    exercice_name,
    exercice_created_at,
    exercice_updated_at,
    now(),
    now() + interval '1 microsecond'
  )
  returning id into new_id;
  return new_id;
end; $$ language plpgsql;

create or replace function update_exercice(
  exercice_id uuid,
  exercice_name character varying,
  exercice_updated_at timestamp with time zone
) returns uuid
as $$ begin
  update exercices 
  set
    name = exercice_name,
    updated_at = exercice_updated_at,
    last_modified_at = now()
  where id = exercice_id;
  return exercice_id;
end; $$ language plpgsql;