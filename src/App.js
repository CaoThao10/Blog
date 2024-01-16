import React from "react";
import "./styles/index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/auth-context";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/sign-up" element={<SignUpPage></SignUpPage>} />
          <Route path="/sign-in" element={<SignInPage></SignInPage>} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
