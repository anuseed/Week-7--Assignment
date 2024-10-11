// Used Supabase initially to create tables and seed data
import { db } from "./server.js";

db.query(`CREATE TABLE IF NOT EXISTS comments (
    id SERIAL PRIMARY KEY,
    guest_name VARCHAR(255),
    feedback TEXT,
    feedback_date DATE,
    rating INT
  );`);

db.query(
  `INSERT INTO comments (guest_name, feedback, feedback_date, rating) VALUES ('First Guest', 'Had such a lovely stay at Hotel Flamingo. The staff were exemplary', '2024-10-08', 8);`
);

db.query(
  `INSERT INTO comments (guest_name, feedback, feedback_date, rating) VALUES ('Second Guest', 'Loved waking up to Flamingoes!', '2024-09-08', 7);`
);
