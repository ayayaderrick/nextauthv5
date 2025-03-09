"use client";

import { logout } from "@/actions/auth";
import React from "react";
import { Button } from "./ui/button";

const Logout = () => {
  return (
    <Button onClick={() => logout()} variant="outline">
      Logout
    </Button>
  );
};

export default Logout;
