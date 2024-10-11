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
    const commentsData = await db.query(`SELECT * FROM comments; `);
    console.log(commentsDataData);
    res.status(200).json(commentsData.rows);
  } catch (error) {
    console.error("Unable to get comments", error);
    res.status(500).json({ success: false });
  }
});

app.post("/add-comment", async (req, res) => {
  try {
    const { guest_name, feedback, feedback_date, rating } = req.body;
    const newComment = await db.query(
      `
          INSERT INTO comments (guest_name, feedback, feedback_date, rating)
          VALUES ($1, $2, $3, $4);
          `,
      [guest_name, feedback, feedback_date, rating]
    );
    res.status(200).json(newComment.rows);
  } catch (error) {
    console.error("Unable to add comment", error);
    res.status(500).json({ success: false });
  }
});
