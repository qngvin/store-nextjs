"use client";
import { useToast } from "@/hooks/use-toast";
import { SignOutButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const SignOutLink = () => {
  const { toast } = useToast();
  const handleLogout = () => {
    toast({ description: "Logout Successful" });
  };
  return (
    <SignOutButton>
      <Link
        href="/"
        className="capitalize w-full text-left"
        onClick={handleLogout}
      >
        logout
      </Link>
    </SignOutButton>
  );
};

export default SignOutLink;
