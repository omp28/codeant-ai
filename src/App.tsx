import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import SidebarLayout from "./components/Sidebar";

function App() {
  const [username, setUsername] = useState<string>("omp28");

  const handleUsernameChange = (newUsername: string) => {
    setUsername(newUsername);
  };

  return (
    <SidebarLayout onUsernameChange={handleUsernameChange}>
      <Routes>
        <Route path="/login" element={<Auth />} />
        <Route path="/" element={<Home username={username} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </SidebarLayout>
  );
}

export default App;
