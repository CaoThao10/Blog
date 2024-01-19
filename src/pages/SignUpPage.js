import React, { Children, useEffect, useState } from "react";
import styled from "styled-components";
import Label from "../components/lable/Label";
import Input from "../components/input/Input";
import { useForm } from "react-hook-form";
import Field from "../components/field/Field";
import IconEyeClose from "../components/icon/IconEyeClose";
import IconEyeOpen from "../components/icon/IconEyeOpen";
import Button from "../components/button/Button";
// import LoadingSpinner from "../components/loading/LoadingSpinner";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase-config";
import { NavLink, useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import AuthenticationPage from "./AuthenticationPage";

const scheme = yup.object({
  fullname: yup.string().required("Please enter your fullname"),
  email: yup
    .string()
    .email("Please enter valid email address")
    .required("Please enter your email addres"),
  password: yup
    .string()
    .min(8, "Your password be at least 8 charactres or greater")
    .required("Please enter your password"),
});

const SignUpPage = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    watch,
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(scheme),
  });

  const [togglePassword, setTogglePassword] = useState(false);
  const handleSignUp = async (values) => {
    console.log(values);
    if (!isValid) return;
    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve();
    //   }, 5000);
    // });
    const user = await createUserWithEmailAndPassword(
      auth,
      values.email,
      values.password
    );
    await updateProfile(auth.currentUser, {
      displayName: values.fullname,
    });
    const db = getFirestore();

    const colRef = collection(db, "users");
    addDoc(colRef, {
      name: values.fullname,
      email: values.email,
      password: values.password,
    });
    toast.success("Create user successfuly!");
    navigate("/");
  };

  useEffect(() => {
    console.log(Object.values(errors));
    const arrErroes = Object.values(errors);
    if (arrErroes.length > 0) {
      toast.error(arrErroes[0]?.message, {
        pauseOnHover: false,
      });
    }
  }, [errors]);
  useEffect(() => {
    document.title = "Register Page";
  });
  return (
    <AuthenticationPage>
      <form className="form" onSubmit={handleSubmit(handleSignUp)}>
        <Field>
          <Label htmlFor="fullname">Fullname</Label>
          <Input
            type="text"
            // id="fullname"
            name="fullname"
            // className="input"
            placeholder="Enter your fullname"
            control={control}
          />
        </Field>
        <Field>
          <Label htmlFor="email">Email address</Label>
          <Input
            type="email"
            // id="fullname"
            name="email"
            // className="input"
            placeholder="Enter your emaill"
            control={control}
          />
        </Field>
        <Field>
          <Label htmlFor="password">Email password</Label>
          <Input
            type={togglePassword ? "text" : "password"}
            // id="fullname"
            name="password"
            // className="input"
            placeholder="Enter your password"
            control={control}
          >
            {!togglePassword ? (
              <IconEyeClose
                className="icon-input"
                onClick={() => setTogglePassword(true)}
              ></IconEyeClose>
            ) : (
              <IconEyeOpen
                className="icon-input"
                onClick={() => setTogglePassword(false)}
              ></IconEyeOpen>
            )}
          </Input>
        </Field>
        <div className="have-account">
          You already have an account? <NavLink to={"/sign-in"}>Login</NavLink>
        </div>
        <Button type="submit" disabled={isSubmitting} isLoading={isSubmitting}>
          Sign up
        </Button>
      </form>
    </AuthenticationPage>
  );
};

export default SignUpPage;
