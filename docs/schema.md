# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
profile_img     | string    | default null
password_digest | string    | not null
session_token   | string    | not null, indexed, unique


## groups
column name  | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
name         | string    | not null, indexed, unique
description  | text      | not null
city         | string    | not null
state        | string    | not null
organizer_id | integer   | not null, foreign key (references users), indexed
image        | string    | not null

## events
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
description | text      | not null
date        | timestamp | not null
lat         | float     | not null
lng         | float     | not null
group_id    | integer   | not null, foreign key (references users), indexed

## memberships(join table)
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
member_id   | integer   | not null, foreign key (references users), indexed
group_id    | integer   | not null, foreign key (references groups), indexed

## RSVP(join table)
column name | data type | details
------------|-----------|------------------------
id          | integer   | not null, primary key
attendee_id | integer   | not null, foreign key (references users), indexed
event_id    | integer   | not null, foreign key (references events), indexed

## Bonus:reviews
column name | data type | details
------------|-----------|------------------------
id          | integer   | not null, primary key
body        | text      | not null
reviewer_id | integer   | not null
group_id    | integer   | not null
