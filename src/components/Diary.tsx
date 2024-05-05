import { DiaryEntry } from "../types";

export function Diary({ diaryData }: { diaryData: DiaryEntry }) {
  return (
    <article>
      <h3>{diaryData.date}</h3>
      <p>
        <b>Weather: </b>
        {diaryData.weather}
      </p>

      <p>
        <b>Visibility: </b>
        {diaryData.visibility}
      </p>
      {diaryData.comment && <i>{diaryData.comment}</i>}
    </article>
  );
}
