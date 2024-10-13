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
      <div className="sort">
        <h1>Comments</h1>
        <p>Sort by rating:</p>
        <select value={searchParams.get("sort") || ""} onChange={handleChange}>
          <option value="">Select...</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
      {sortedComments.map((item) => (
        <div className="comment" key={item.id}>
          <div className="rating-date">
            {/* date was displaying with a time stamp setting the date toLocaleDateString() takes away the timestamp on rendering */}
            <div>{new Date(item.feedback_date).toLocaleDateString()}</div>
            <div>Rating: {item.rating}/10</div>
          </div>
          <h1>{item.guest_name}</h1>

          <p>&quot;{item.feedback}&quot;</p>
        </div>
      ))}
    </div>
  );
}
