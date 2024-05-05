import axios from "axios";
import { baseUrl } from "../../baseUrl";
import "./styles.css";

export function DiaryForm() {
  function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;

    const date = form.date.value;
    const visibility = form.visibility.value;
    const weather = form.weather.value;
    const comment = form.comment.value;

    axios
      .post(`${baseUrl}/api/diaries`, { date, visibility, weather, comment })
      .then(() => alert("Added new entry in the diary"));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add entry</h2>

      <label htmlFor="date">Date</label>
      <input type="date" id="date" />

      <label htmlFor="weather">Weather</label>
      <select name="weather" id="weather">
        <option value="sunny">sunny</option>
        <option value="rainy">rainy</option>
        <option value="cloudy">cloudy</option>
        <option value="windy">windy</option>
        <option value="stormy">stormy</option>
      </select>

      <label htmlFor="visibility">Visibility</label>
      <select name="visibility" id="visibility">
        <option value="great">great</option>
        <option value="good">good</option>
        <option value="ok">ok</option>
        <option value="poor">poor</option>
      </select>

      <label htmlFor="comment">Comment</label>
      <input type="text" id="comment" />

      <button type="submit">Save entry</button>
    </form>
  );
}
