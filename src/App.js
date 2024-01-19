import React from "react";
import "./styles/index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/auth-context";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>} />
          <Route path="/sign-up" element={<SignUpPage></SignUpPage>} />
          <Route path="/sign-in" element={<SignInPage></SignInPage>} />
          <Route path="*" element={<NotFoundPage></NotFoundPage>} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
