# Planning

## Wireframe

- What does my app look like from my user's perspective?
  ![First Wireframe](../Week7-Assignment/client/public/images/First-Wireframe.png)

## Plan your database schema

- What data do I need to store?
  - I need to store a guests name, feedback, date of the feedback and rating out of 10
- Based on the data how many tables do I need to oraganise my date efficiently?
  -For a mvp I will only have one table called comments
  - Stretch goal would be to add 2 more tables one for ratings and one for dates so that I can sort the comments by either of those
- What is the relationship between them if you have more than one table?
  - Stretch goal the relationship will be one to many ?
- How do I connect the tables - foreign keys, junction tables.
- ** Set up you tables in a database in Supabase **
  - create a project (database) DONE
  - use sql editor to create your tables and insert seed data DONE
    - you can also add these to your seed.js later

## Setup your server

DONE with two endpoints get and post

## Setup the client

replace local url with render url at the end

## connect to github and render

Render server = https://week-7-assignment-server.onrender.com
Render client = https://week-7-assignment-r7r8.onrender.com
github = https://github.com/anuseed/Week-7--Assignment
