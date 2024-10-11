import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <h1>Hotel Flamingo</h1>
      <h2>Stay in Paradise</h2>
      <Link to="/homepage">Home</Link>
      <br />
      <Link to="/feedback">Feedback</Link>
      <br />
      <Link to="/comments">Comments</Link>
    </>
  );
}
