import axios from "axios";
import { baseUrl } from "./baseUrl";
import { NonSensitiveDiaryEntry } from "./types";
import { useState } from "react";
import { Diary } from "./components/Diary";
import { DiaryForm } from "./components/DiaryForm/DiaryForm";

function App() {
  const [diaries, setDiaries] = useState<NonSensitiveDiaryEntry[]>([]);

  axios
    .get<NonSensitiveDiaryEntry[]>(`${baseUrl}/api/diaries`)
    .then((response) => setDiaries(response.data));
  return (
    <>
      <h1>Diary of Ilari</h1>
      <DiaryForm />
      <h2>Diary Entries</h2>
      {diaries.reverse().map((diary) => {
        return <Diary key={diary.id} diaryData={diary} />;
      })}
    </>
  );
}

export default App;
