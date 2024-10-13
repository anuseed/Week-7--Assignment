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

  - created two table one for guest and one for comments - currently functionality is still the same but intend to use guest seperatley in some way - maybe a login of sorts if I have time.

- Conditional rendering of the form inputs.

  - I learnt that you shouldn't be asking the user to input the date especially if you know the date. Basically any data from the user should always be checked in the server rather than trusting the user to input the correct data. I added conditional rendering in the server to stop the user from inputing a value less than 1 and greater than 10 - (rating < 1 || rating > 10) - in the rating input. The server then sets a json message which I read in the client and display to the user in an error div.
  - In the same vein I used the server to input the date - new Date() - into the database rather than the client/user inputing it.

- Query Strings to order posts by rating or date.
  This was very tricky. I intially used the code from the query strings workshop as is but then had trouble attaching the value of the rating to the output. I googled and asked for help on this one. I am hoping that a working example helps me to figure it out on my own next time.

- Styling of app.
  - This took so much longer than I anticipated. Creating divs to make containers for each items rendered through map() and making sure which were parents and which children made styling very tricky. I used :root instead of body to style the background intially and this gave a lot of issues. Changing it to body helped a lot. I syled the website desktop first as I assumed that is what most people would use for a hotel website but added some media queries for mobile. It's not perfect but will do. I learnt about opacity in rgb which was nice. Still finding position tricky and grid.
