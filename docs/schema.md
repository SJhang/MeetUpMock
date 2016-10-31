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
location_id  | integer   | not null, foreign key (references locations), indexed
organizer_id | integer   | not null, foreign key (references users), indexed
creation_date| date      | not null
image        | string    | not null

## events
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
description | text      | not null
start_date  | date      | not null
end_date    | date      | not null
location_lat| float     | not null
location_lng| float     | not null
group_id    | integer   | not null, foreign key (references users), indexed

## RSVPs
column name | data type | details
------------|-----------|------------------------
id          | integer   | not null, primary key
attendee_id | integer   | not null, foreign key (references users), indexed
event_id    | integer   | not null, foreign key (references events), indexed
attending   | boolean   | default false

## locations
column name | data type | details
------------|-----------|------------------------
id          | integer   | not null, primary key
city        | string    | not null
state       | string    | not null

## reviews
column name | data type | details
------------|-----------|------------------------
id          | integer   | not null, primary key
body        | text      | not null
reviewer_id | integer   | not null
group_id    | integer   | not null
