# Reflection

## MVP

- I started off wanting to have an mvp done by Friday.
- I used my Week 4 assignment as a template.
- I had a hotel were guests could add feedback.
- Using a React client I made the form inputs for this including a rating and date this time.
- My endpoints in the server were very similar to my week 4 assignment.
  - I had a POST endpoint to add the form inputs to the database with a SQL query.
  - I had a get GET endpoint to add all the form inputs (guest_name, feedback, feedback_date and rating) with a SQL query to the CommentsPage from the database.
- I had 3 pages (components); HomePage, FeedbackPage- with the Form for the user to input their data, and CommentsPage - were all the comments from previous guests were rendered using .map().
- My database in Supabase had one table with all the inputs from the form and I seeded this firstly from the SQL editor in Supabase and then with test data in the form directly to check my endpoints all worked. I checked my endpoints in Thuderclient as well to see if they worked.
- At this point I felt I had an mvp. There was still styling to do and some conditional rendering of the form inputs. The rating could go below 10 and above 10 so this needed some logic too.
- The feedback_date also displayed a time stamp and this needed to be removed.

## Next steps - stretch goals

- In order to try relational databases I needed to create at least two tables in my database.

- Conditional rendering of the form inputs.

- Query Strings to order posts by rating or date.

- Styling of app.
