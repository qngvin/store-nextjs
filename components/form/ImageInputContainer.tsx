"use client";
import { actionFunction } from "@/utils/types";
import React, { useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import FormContainer from "./FormContainer";
import ImageInput from "./ImageInput";
import { SubmitButton } from "./Buttons";
type ImageInputContainerProps = {
  image: string;
  name: string;
  action: actionFunction;
  text: string;
  children?: React.ReactNode;
};

const ImageInputContainer = (props: ImageInputContainerProps) => {
  console.log("objecasasts", props);
  const [isUpdateFormVisible, setUpdateFormVisible] = useState(false);
  return (
    <div className="mb-8">
      <Image
        src={props.image}
        width={200}
        height={200}
        className="rounded object-cover mb-4 w-[200px] h-[200px]"
        alt={props.name}
        priority
      />
      <Button
        variant="outline"
        size="sm"
        onClick={() => setUpdateFormVisible((prev) => !prev)}
      >
        {props.text}
      </Button>
      {isUpdateFormVisible && (
        <div className="max-w-md mt-4">
          <FormContainer action={props.action}>
            {props.children}
            <ImageInput />
            <SubmitButton size="sm" />
          </FormContainer>
        </div>
      )}
    </div>
  );
};

export default ImageInputContainer;
