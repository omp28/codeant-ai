import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  const [username, setUsername] = useState<string>("utkarshdhairyapanwar");

  const handleUsernameChange = (newUsername: string) => {
    setUsername(newUsername);
  };

  return (
    <Routes>
      <Route path="/login" element={<div>Login Page</div>} />
      <Route
        path="/"
        element={
          <div>
            Home Page - {username}
            <button onClick={() => handleUsernameChange("test")}>
              Change Username
            </button>
          </div>
        }
      />
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
}

export default App;
