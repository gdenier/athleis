CREATE TABLE IF NOT EXISTS "profiles" (
	id uuid not null references auth.users on delete cascade,
  created_at timestamp with time zone not null default now(),
  updated_at timestamp with time zone not null default now(),
  deleted_at timestamp with time zone default null,
  server_created_at timestamp with time zone not null default now(),
  last_modified_at timestamp with time zone not null default now(),
  primary key (id)
);

alter table public.profiles enable row level security;

create policy "Profiles are viewable by users who created them."
  on profiles for select
  using ( auth.uid() = id );

create policy "Users can insert their own profile."
  on profiles for insert
  with check ( auth.uid() = id );

create policy "Users can update own profile."
  on profiles for update
  using ( auth.uid() = id );

-- inserts a row into public.profiles
create function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (
    id,
    created_at,
    updated_at,
    server_created_at,
    last_modified_at)
  values (
    new.id, 
    now(), 
    now(),
    now(),
    now() + interval '1 microsecond'
  );
  return new;
end;
$$;

-- trigger the function every time a user is created
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();


ALTER TABLE IF EXISTS "trainings" RENAME COLUMN user_id TO profile_id;
ALTER TABLE "trainings"	ADD CONSTRAINT "trainings_profile_id_profiles_id_fk" FOREIGN KEY ("profile_id") REFERENCES "profiles"("id") ON DELETE cascade ON UPDATE no action 