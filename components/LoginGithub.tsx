"use client";

import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";

import React from "react";
import { login } from "@/actions/auth";

const LoginGithub = ({ disabled }: { disabled: boolean }) => {
  return (
    <Button
      onClick={() => login("github")}
      variant="outline"
      type="button"
      className="w-full"
      disabled={disabled}
    >
      <FaGithub className="mr-2 h-4 w-4" />
      Login with GitHub
    </Button>
  );
};

export default LoginGithub;
