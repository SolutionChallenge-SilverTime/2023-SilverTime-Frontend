import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login/Login";
import Join from "./Pages/Join/Join";
import Main from "./Pages/Main/Main";
import NoteSend from "./Pages/Note/NoteSend";
import NoteDetail from "./Pages/Note/NoteDetail";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/main" element={<Main />} />
          <Route path="/noteSend" element={<NoteSend />} />
          <Route path="/noteDetail" element={<NoteDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
