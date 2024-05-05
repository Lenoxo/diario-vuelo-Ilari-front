import axios from "axios";
import { baseUrl } from "./baseUrl";
import { DiaryEntry } from "./types";
import { useState } from "react";
import { Diary } from "./components/Diary";

function App() {
  const [diaries, setDiaries] = useState<DiaryEntry[]>([]);

  axios
    .get<DiaryEntry[]>(`${baseUrl}/api/diaries`)
    .then((response) => setDiaries(response.data));
  return (
    <>
      <h1>Diary of Ilari</h1>
      <h2>Diary Entries</h2>
      {diaries.map((diary) => {
        return <Diary key={diary.id} diaryData={diary} />;
      })}
    </>
  );
}

export default App;
