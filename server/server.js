import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pg from "pg";

const app = express();

app.use(express.json());

app.use(cors());

dotenv.config();

const dbConnectionString = process.env.DATABASE_URL;
export const db = new pg.Pool({ connectionString: dbConnectionString });

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`);
});

app.get("/", (req, res) => {
  res.json({
    message: "You are looking at my root route. How roude!",
  });
});

app.get("/comments", async (req, res) => {
  try {
    const commentsData = await db.query(`SELECT 
  comments.feedback, comments.feedback_date, comments.rating, guests.guest_name 
FROM comments
JOIN guests ON comments.guest_id = guests.id; `);
    console.log(commentsData);
    res.status(200).json(commentsData.rows);
  } catch (error) {
    console.error("Unable to get comments", error);
    res.status(500).json({ success: false });
  }
});

app.post("/add-comment", async (req, res) => {
  try {
    const { guest_name, feedback, rating } = req.body;
    if (rating < 1 || rating > 10) {
      // this is a problem
      res
        .status(422)
        .json({ success: false, message: "Rating must be between 1 and 10" });
      return;
    }
    const newGuest = await db.query(
      `INSERT INTO guests (guest_name) 
VALUES ($1) RETURNING id;`,
      [guest_name]
    );
    const newComment = await db.query(
      `
          INSERT INTO comments ( feedback, feedback_date, rating, guest_id)
          VALUES ( $1, $2, $3, $4);
          `,
      [feedback, new Date(), rating, newGuest.rows[0].id]
    );
    res.status(200).json(newComment.rows);
  } catch (error) {
    console.error("Unable to add comment", error);
    res.status(500).json({ success: false });
  }
});
