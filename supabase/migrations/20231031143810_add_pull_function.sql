create or replace function pull(last_pulled_at bigint default 0) returns jsonb
as $$
declare
  _ts timestamp with time zone;
  _profiles jsonb;
  _exercices jsonb;
  _trainings jsonb;
  _trainings_steps jsonb;
  _trainings_supersets jsonb;
  _trainings_exercices jsonb;
  _trainings_exercices_series jsonb;
begin
  -- timestamp
  _ts := to_timestamp(last_pulled_at / 1000);

  -- profiles
  select jsonb_build_object(
    'created',
    '[]'::jsonb,
    'updated',
    coalesce(
      jsonb_agg(
        jsonb_build_object(
          -- id
          'id',
          p.id,
          -- other properties

          --timestamps
          'created_at',
          timestamp_to_epoch(p.created_at),
          'updated_at',
          timestamp_to_epoch(p.updated_at)
        )
      ) filter (
        where p.deleted_at is null and p.last_modified_at > _ts
      ), 
      '[]'::jsonb
    ),
    'deleted',
    coalesce(
      jsonb_agg(to_jsonb(p.id)) filter (
        where p.deleted_at is not null and p.last_modified_at > _ts
      ),
      '[]'::jsonb
    )
  ) into _profiles from profiles p;

  -- exercices
  select jsonb_build_object(
    'created',
    '[]'::jsonb,
    'updated',
    coalesce(
      jsonb_agg(
        jsonb_build_object(
          -- id
          'id',
          ex.id,
          -- other properties
          'name',
          ex.name,
          -- timestamps
          'created_at',
          timestamp_to_epoch(ex.created_at),
          'updated_at',
          timestamp_to_epoch(ex.updated_at)
        )
      ) filter (
        where ex.deleted_at is null and ex.last_modified_at > _ts
      ),
      '[]'::jsonb
    ),
    'deleted',
    coalesce(
      jsonb_agg(to_jsonb(ex.id)) filter (
        where ex.deleted_at is not null and ex.last_modified_at > _ts
      ),
      '[]'::jsonb
    )
  ) into _exercices from exercices ex;

  -- trainings
  select jsonb_build_object(
    'created',
    '[]'::jsonb,
    'updated',
    coalesce(
      jsonb_agg(
        jsonb_build_object(
          -- id
          'id',
          t.id,
          -- other properties
          'title',
          t.title,
          'profile_id',
          t.profile_id,
          -- timestamps
          'created_at',
          timestamp_to_epoch(t.created_at),
          'updated_at',
          timestamp_to_epoch(t.updated_at)
        )
      ) filter (
        where t.deleted_at is null and t.last_modified_at > _ts
      ),
      '[]'::jsonb
    ),
    'deleted',
    coalesce(
      jsonb_agg(to_jsonb(t.id)) filter (
        where t.deleted_at is not null and t.last_modified_at > _ts
      ),
      '[]'::jsonb
    )
  ) into _trainings from trainings t;

  -- trainings_steps
  select jsonb_build_object(
    'created',
    '[]'::jsonb,
    'updated',
    coalesce(
      jsonb_agg(
        jsonb_build_object(
          -- id
          'id',
          ts.id,
          -- other properties
          'order',
          ts.order,
          'training_id',
          ts.training_id,
          -- timestamps
          'created_at',
          timestamp_to_epoch(ts.created_at),
          'updated_at',
          timestamp_to_epoch(ts.updated_at)
        )
      ) filter (
        where ts.deleted_at is null and ts.last_modified_at > _ts
      ),
      '[]'::jsonb
    ),
    'deleted',
    coalesce(
      jsonb_agg(to_jsonb(ts.id)) filter (
        where ts.deleted_at is not null and ts.last_modified_at > _ts
      ),
      '[]'::jsonb
    )
  ) into _trainings_steps from trainings_steps ts;

  -- trainings_supersets
  select jsonb_build_object(
    'created',
    '[]'::jsonb,
    'updated',
    coalesce(
      jsonb_agg(
        jsonb_build_object(
          -- id
          'id',
          ts.id,
          -- other properties
          'rest',
          ts.rest,
          'interval_rest',
          ts.interval_rest,
          'nb_round',
          ts.nb_round,
          'training_step_id',
          ts.training_step_id,
          -- timestamps
          'created_at',
          timestamp_to_epoch(ts.created_at),
          'updated_at',
          timestamp_to_epoch(ts.updated_at)
        )
      ) filter (
        where ts.deleted_at is null and ts.last_modified_at > _ts
      ),
      '[]'::jsonb
    ),
    'deleted',
    coalesce(
      jsonb_agg(to_jsonb(ts.id)) filter (
        where ts.deleted_at is not null and ts.last_modified_at > _ts
      ),
      '[]'::jsonb
    )
  ) into _trainings_supersets from trainings_supersets ts;

  -- trainings_exercices
  select jsonb_build_object(
    'created',
    '[]'::jsonb,
    'updated',
    coalesce(
      jsonb_agg(
        jsonb_build_object(
          -- id
          'id',
          te.id,
          -- other properties
          'order',
          te.order,
          'exercice_id',
          te.exercice_id,
          'superset_id',
          te.superset_id,
          'training_step_id',
          te.training_step_id,
          -- timestamps
          'created_at',
          timestamp_to_epoch(te.created_at),
          'updated_at',
          timestamp_to_epoch(te.updated_at)
        )
      ) filter (
        where te.deleted_at is null and te.last_modified_at > _ts
      ),
      '[]'::jsonb
    ),
    'deleted',
    coalesce(
      jsonb_agg(to_jsonb(te.id)) filter (
        where te.deleted_at is not null and te.last_modified_at > _ts
      ),
      '[]'::jsonb
    )
  ) into _trainings_exercices from trainings_exercices te;

  -- trainings_exercices_series
  select jsonb_build_object(
    'created',
    '[]'::jsonb,
    'updated',
    coalesce(
      jsonb_agg(
        jsonb_build_object(
          -- id
          'id',
          tes.id,
          -- other properties
          'weight',
          tes.weight,
          'repetition',
          tes.repetition,
          'time',
          tes.time,
          'rest',
          tes.rest,
          'order',
          tes.order,
          'training_exercice_id',
          tes.training_exercice_id,
          -- timestamps
          'created_at',
          timestamp_to_epoch(tes.created_at),
          'updated_at',
          timestamp_to_epoch(tes.updated_at)
        )
      ) filter (
        where tes.deleted_at is null and tes.last_modified_at > _ts
      ),
      '[]'::jsonb
    ),
    'deleted',
    coalesce(
      jsonb_agg(to_jsonb(tes.id)) filter (
        where tes.deleted_at is not null and tes.last_modified_at > _ts
      ),
      '[]'::jsonb
    )
  ) into _trainings_exercices_series from trainings_exercices_series tes;

  return jsonb_build_object(
    'changes',
    jsonb_build_object(
      'profiles',
      _profiles,
      'exercices',
      _exercices,
      'trainings',
      _trainings,
      'trainings_steps',
      _trainings_steps,
      'trainings_supersets',
      _trainings_supersets,
      'trainings_exercices',
      _trainings_exercices,
      'trainings_exercices_series',
      _trainings_exercices_series
    ),
    'timestamp',
    timestamp_to_epoch(now())
);

end; $$ language plpgsql;