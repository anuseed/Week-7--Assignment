import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <div className="logo-slogan">
        <h1>Hotel Flamingo</h1>
        <h3>Stay in Paradise</h3>
      </div>

      <Link className="link" to="/">
        Home
      </Link>
      <Link className="link" to="/feedback">
        Feedback
      </Link>
      <Link className="link" to="/comments">
        Comments
      </Link>
    </div>
  );
}
