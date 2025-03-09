import React from "react";
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";

const AuthButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button
      disabled={pending}
      type="submit"
      className={`w-full ${pending ? "bg-zinc-700" : "bg-primary"}`}
    >
      {pending ? "Loading..." : "Login"}
    </Button>
  );
};

export default AuthButton;
