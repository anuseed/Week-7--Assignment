import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <p>
        We hope you enjoyed your stay at hotel Flamingo! We would love your
        feedback for 10% off your next stay!
      </p>

      <button>
        <Link to="/feedback">Feedback</Link>
      </button>
    </>
  );
}
