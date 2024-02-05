import React from "react";
import "./styles/index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/auth-context";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import DashboardPage from "./pages/DashboardPage";
import DashboardLayout from "./module/dashboard/DashboardLayout";
import PostManage from "./module/post/PostManage";
import PostAddNew from "./module/post/PosAddNew";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>} />
          <Route path="/sign-up" element={<SignUpPage></SignUpPage>} />
          <Route path="/sign-in" element={<SignInPage></SignInPage>} />
          <Route path="*" element={<NotFoundPage></NotFoundPage>} />
          <Route element={<DashboardLayout></DashboardLayout>}>
            <Route
              path="/dashboard"
              element={<DashboardPage></DashboardPage>}
            ></Route>
            <Route
              path="/manage/post"
              element={<PostManage></PostManage>}
            ></Route>
            <Route
              path="/manage/add-post"
              element={<PostAddNew></PostAddNew>}
            ></Route>
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
