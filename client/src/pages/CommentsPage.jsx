import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export default function CommentsPage() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:8080/comments");

      const data = await response.json();
      console.log(data);
      setComments(data);
    }
    fetchData();
  }, []);

  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (event) => {
    setSearchParams({ sort: event.target.value });
  };

  //   I did this with a bit of help from the link and the workshop on query strings, and my husband.
  //   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  //  I used the workshop to do this by copying the code and reworking it, the parameters in the if were very tricky to figure out (but the workshop helped with the sort() method). How to reference the value of rating in comments was also not so easy intially.
  const sortedComments = comments.sort((a, b) => {
    console.log(searchParams);

    if (searchParams.get("sort") === "asc") {
      return a.rating - b.rating;
    }
    if (searchParams.get("sort") === "desc") {
      return b.rating - a.rating;
    }
  });

  return (
    <div className="comments-container">
      <h1>Comments</h1>
      Sort comments by rating:
      <select value={searchParams.get("sort") || ""} onChange={handleChange}>
        <option value="">Select...</option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      {sortedComments.map((item) => (
        <div key={item.id}>
          <h1>{item.guest_name}</h1>
          <p>
            {/* the pre respects a new line when a user presses enter */}
            <pre>{item.feedback}</pre>
          </p>
          <p>{item.rating}</p>
          {/* date was displaying with a time stamp setting the date toLocaleDateString() takes away the timestamp on rendering */}
          <p>{new Date(item.feedback_date).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
}
