import React, { useEffect } from "react";
import { useAuth } from "../contexts/auth-context";
import { useNavigate } from "react-router-dom";
import AuthenticationPage from "./AuthenticationPage";

const SignInPage = () => {
  const { userInfo } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!userInfo.email) navigate("/sign-up");
    else navigate("/");
  }, []);
  return <AuthenticationPage></AuthenticationPage>;
};

export default SignInPage;
