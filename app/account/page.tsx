"use client";

import { useUser } from "@/hooks/useUser";
import React from "react";

const AccountPage = () => {
  const { user } = useUser();

  console.log("user", user);

  if (!user) {
    return null;
  }

  return (
    <div className=" flex justify-center items-center h-full">
      <div className="bg-[#171717] p-4 flex flex-col items-center gap-y-4 text-xl rounded-lg">
        <p>
          <span className="text-[#7e7e7e]">Email</span>{" "}
          <span className="font-semibold">{user.email}</span>{" "}
        </p>
        <p>
          <span className="text-[#7e7e7e]">Phone Number</span>{" "}
          <span className="font-semibold">{user.phone || "NA"}</span>
        </p>
      </div>
    </div>
  );
};

export default AccountPage;
