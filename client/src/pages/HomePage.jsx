import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="welcome">
      <p>We hope you enjoyed your stay at Hotel Flamingo!</p>
      <p> We would love your feedback for 10% off your next stay!</p>
      <button>
        <Link className="feedback-button" to="/feedback">
          Feedback
        </Link>
      </button>
    </div>
  );
}
