import React from "react";
import AuthPlaceholder from "../components/auth/AuthPlaceholder";
import AuthForm from "../components/auth/AuthForm";

const Auth: React.FC = () => {
  return (
    <section className="flex justify-center items-center">
      <AuthPlaceholder />
      <AuthForm />
    </section>
  );
};

export default Auth;
