"use client";
import { useToast } from "@/hooks/use-toast";
import { actionFunction } from "@/utils/types";
import React, { useActionState, useEffect } from "react";
const initalState = {
  message: "",
};
const FormContainer = ({
  action,
  children,
}: {
  action: actionFunction;
  children: React.ReactNode;
}) => {
  const [state, formAction] = useActionState(action, initalState);
  const { toast } = useToast();
  useEffect(() => {
    if (state?.message) {
      toast({ description: state.message });
    }
  }, [state, toast]);
  return <form action={formAction}>{children}</form>;
};

export default FormContainer;
