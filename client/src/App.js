import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login/Login";
import Main from "./Pages/Main/Main";

import ClassCategory from "./Pages/Class/ClassCategory/ClassCategory";
import RecommendClass from "./Pages/RecommendClass/RecommendClass";
import Chatbot from "./Pages/Chatbot/Chatbot";
import NoteSend from "./Pages/Note/NoteSend";
import NoteList from "./Pages/Note/NoteList";
import NoteDetail from "./Pages/Note/NoteDetail";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/main" element={<Main />} />
          <Route path="/classCategory" element={<ClassCategory />} />
          <Route path="/aiClass" element={<RecommendClass />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/noteSend" element={<NoteSend />} />
          <Route path="/noteList" element={<NoteList />} />
          <Route path="/noteDetail" element={<NoteDetail />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
