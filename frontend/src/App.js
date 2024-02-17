import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Chat from "./pages/chat";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/chats" Component={Chat} />
      </Routes>
    </div>
  );
}

export default App;
