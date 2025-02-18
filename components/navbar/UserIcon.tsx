import { currentUser } from "@clerk/nextjs/server";
import React from "react";
import { LuUser } from "react-icons/lu";
const UserIcon = async () => {
  const user = await currentUser();
  const profileImage = user?.imageUrl;
  if (profileImage) {
    return (
      <img
        src={profileImage}
        className="w-6 h-6 rounded-full object-cover"
        alt="avt"
      />
    );
  }
  return <LuUser className="w-6 h-6 bg-primary rounded-full text-white" />;
};

export default UserIcon;
