import { useState, useEffect } from "react";

export default function CommentsPage() {
  const [comment, setComment] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:8080/comments");

      const data = await response.json();
      console.log(data);
      setComment(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <h1>Comments</h1>
      {comment.map((item) => (
        <div key={item.id}>
          <h1>{item.guest_name}</h1>
          <p>{item.feedback}</p>
          <p>{item.rating}</p>
          {/* date was displaying with a time stamp setting the date toLocaleDateString() takes away the timestamp on rendering */}
          <p>{new Date(item.feedback_date).toLocaleDateString()}</p>
        </div>
      ))}
      {/* could have some conditional redndeing  */}
    </>
  );
}
