// Used Supabase initially to create tables and seed data
import { db } from "./server.js";

db.query(`CREATE TABLE IF NOT EXISTS guests (
    id SERIAL PRIMARY KEY,
    guest_name VARCHAR(255) NOT NULL
);`);

db.query(`CREATE TABLE IF NOT EXISTS comments (
    id SERIAL PRIMARY KEY,
    feedback VARCHAR(255) NOT NULL,
    feedback_date DATE NOT NULL,
    rating INT NOT NULL,
    guest_id INTEGER REFERENCES guests(id)
  );`);

// db.query(`INSERT INTO guests (guest_name)
// VALUES ('Lily') RETURNING id;`);

// db.query(
//   `INSERT INTO comments (feedback, feedback_date, rating, guest_id)
// VALUES ('Had a lovely stay', '2024-10-08', 8, 1);`
// );

db.query(`INSERT INTO guests (guest_name) 
VALUES ('Jack') RETURNING id;`);

// db.query(
//   `INSERT INTO comments (feedback, feedback_date, rating, guest_id)
// VALUES ('MEH', '2024-10-10', 5, 2);`
// );
