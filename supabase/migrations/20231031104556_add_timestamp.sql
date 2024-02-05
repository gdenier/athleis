ALTER TABLE iF EXISTS "exercices"
  ADD created_at timestamp with time zone not null default now(),
  ADD updated_at timestamp with time zone not null default now(),
  ADD deleted_at timestamp with time zone default null,
  ADD server_created_at timestamp with time zone not null default now(),
  ADD last_modified_at timestamp with time zone not null default now();

ALTER TABLE iF EXISTS "trainings"
  ADD created_at timestamp with time zone not null default now(),
  ADD updated_at timestamp with time zone not null default now(),
  ADD deleted_at timestamp with time zone default null,
  ADD server_created_at timestamp with time zone not null default now(),
  ADD last_modified_at timestamp with time zone not null default now();

ALTER TABLE iF EXISTS "trainings_steps"
  ADD created_at timestamp with time zone not null default now(),
  ADD updated_at timestamp with time zone not null default now(),
  ADD deleted_at timestamp with time zone default null,
  ADD server_created_at timestamp with time zone not null default now(),
  ADD last_modified_at timestamp with time zone not null default now();

ALTER TABLE iF EXISTS "trainings_supersets"
  ADD created_at timestamp with time zone not null default now(),
  ADD updated_at timestamp with time zone not null default now(),
  ADD deleted_at timestamp with time zone default null,
  ADD server_created_at timestamp with time zone not null default now(),
  ADD last_modified_at timestamp with time zone not null default now();

ALTER TABLE iF EXISTS "trainings_exercices"
  ADD created_at timestamp with time zone not null default now(),
  ADD updated_at timestamp with time zone not null default now(),
  ADD deleted_at timestamp with time zone default null,
  ADD server_created_at timestamp with time zone not null default now(),
  ADD last_modified_at timestamp with time zone not null default now();

ALTER TABLE iF EXISTS "trainings_exercices_series"
  ADD created_at timestamp with time zone not null default now(),
  ADD updated_at timestamp with time zone not null default now(),
  ADD deleted_at timestamp with time zone default null,
  ADD server_created_at timestamp with time zone not null default now(),
  ADD last_modified_at timestamp with time zone not null default now();

ALTER TABLE iF EXISTS "media"
  ADD created_at timestamp with time zone not null default now(),
  ADD updated_at timestamp with time zone not null default now(),
  ADD deleted_at timestamp with time zone default null,
  ADD server_created_at timestamp with time zone not null default now(),
  ADD last_modified_at timestamp with time zone not null default now();

ALTER TABLE iF EXISTS "media_exercices"
  ADD created_at timestamp with time zone not null default now(),
  ADD updated_at timestamp with time zone not null default now(),
  ADD deleted_at timestamp with time zone default null,
  ADD server_created_at timestamp with time zone not null default now(),
  ADD last_modified_at timestamp with time zone not null default now();
