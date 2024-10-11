import { useState } from "react";

export default function Form() {
  const [formValues, setFormValues] = useState({
    guest_name: "",
    feedback: "",
    feedback_date: "",
    rating: "",
  });

  async function handleSubmit(event) {
    event.preventDefault();
    console.log("The form values are", formValues);
    const response = await fetch("http://localhost:8080/add-comment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    });
    const data = await response.json();
    console.log(data);
  }

  function handleInputChange(event) {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="guest_name">Guest Name</label>
        <input
          type="text"
          id="guest_name"
          name="guest_name"
          value={formValues.guest_namename}
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="feedback">Feedback</label>
        <input
          type="text"
          id="feedback"
          name="feedback"
          value={formValues.feedback}
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="feedback_date">Today&apos;s Date</label>
        <input
          type="date"
          id="feedback_date"
          name="feedback_date"
          value={formValues.feedback_date}
          onChange={handleInputChange}
        />
        {/* I need some logic here as the rating can go below 1 and above 10 */}
        <br />
        <label htmlFor="rating">Rate Hotel Flamingo out of 10</label>
        <input
          type="number"
          id="rating"
          name="rating"
          value={formValues.rating}
          onChange={handleInputChange}
        />
        <p>Current guest name is: {formValues.guest_name}</p>
        <p>Current feedback is: {formValues.feedback}</p>
        <p>Current date is: {formValues.date} </p>
        <p>Current rating is: {formValues.rating} </p>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
