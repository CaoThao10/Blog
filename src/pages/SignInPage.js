import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/auth-context";
import { NavLink, useNavigate } from "react-router-dom";
import AuthenticationPage from "./AuthenticationPage";
import { useForm } from "react-hook-form";
import Field from "../components/field/Field";
import Label from "../components/lable/Label";
import Input from "../components/input/Input";
// import IconEyeOpen from "../components/icon/IconEyeOpen";
// import IconEyeClose from "../components/icon/IconEyeClose";
import Button from "../components/button/Button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase-config";
import InputTogglePass from "../components/input/InputTogglePass";

const schema = yup.object({
  email: yup
    .string()
    .email("Please enter valid email address")
    .required("Please enter your email address"),
  password: yup
    .string()
    .min(8, "Your password must be at least 8 characters or greater")
    .required("Please enter your password"),
});

const SignInPage = () => {
  // const [togglePassword, setTogglePassword] = useState(false);
  const {
    handleSubmit,
    control,
    formState: { isValid, isSubmitting, errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const arrErroes = Object.values(errors);
    if (arrErroes.length > 0) {
      toast.error(arrErroes[0]?.message, {
        pauseOnHover: false,
        delay: 0,
      });
    }
  }, [errors]);
  const { userInfo } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Login Page";
    if (userInfo?.email) navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo]);
  const handleSignIn = async (values) => {
    if (!isValid) return;
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
      navigate("/");
    } catch (error) {
      if (error.message.includes("wrong-password"))
        toast.error("It seems your password was wrong");
    }
  };

  return (
    <AuthenticationPage>
      <form className="form" onSubmit={handleSubmit(handleSignIn)}>
        <Field>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            name="email"
            placeholder="Enter your email address"
            control={control}
          ></Input>
        </Field>
        <Field>
          <Label htmlFor="password">Password</Label>
          <InputTogglePass control={control}></InputTogglePass>
        </Field>
        <div className="have-account">
          Do not have an account? <NavLink to={"/sign-up"}>Register</NavLink>
        </div>
        <Button type="submit" disabled={isSubmitting} isLoading={isSubmitting}>
          Sign in
        </Button>
      </form>
    </AuthenticationPage>
  );
};

export default SignInPage;
