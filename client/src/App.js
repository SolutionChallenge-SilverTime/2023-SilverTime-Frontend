import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login/Login";
import Join from "./Pages/Join/Join";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
        </Routes>        
      </div>
    </BrowserRouter> 
  );
}

export default App;