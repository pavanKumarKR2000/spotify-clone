"use client";

import React from "react";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { useRouter } from "next/navigation";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Button from "./Button";
import useAuthModal from "@/hooks/useAuthModal";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useUser } from "@/hooks/useUser";
import { FaUserAlt } from "react-icons/fa";
import { toast } from "react-hot-toast";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const router = useRouter();
  const { onOpen } = useAuthModal();
  const supabaseClient = useSupabaseClient();
  const { user } = useUser();

  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut();

    //reset any playing songs
    router.refresh();

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Successfully logged out");
    }
  };

  return (
    <header
      className={twMerge(
        "h-fit bg-gradient-to-b from-emerald-800 p-6",
        className
      )}
    >
      <div className="w-full mb-4 flex items-center justify-between">
        {/** column-1 (desktop view)  */}
        <div className="hidden md:flex gap-x-2 items-center">
          <button
            onClick={() => router.back()}
            className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition"
          >
            <RxCaretLeft className="text-white" size={30} />
          </button>
          <button
            onClick={() => router.forward()}
            className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition"
          >
            <RxCaretRight className="text-white" size={30} />
          </button>
        </div>
        {/** column-2 (mobile view)  */}
        <div className="flex md:hidden gap-x-2 items-center">
          <button className="rounded-full bg-white p-2 flex items-center justify-center hover:opacity-75 transition">
            <HiHome className="text-black" size={20} />
          </button>
          <button className="rounded-full bg-white p-2 flex items-center justify-center hover:opacity-75 transition">
            <BiSearch className="text-black" size={20} />
          </button>
        </div>
        {/** column-3 */}

        <div className="flex items-center justify-between gap-x-4">
          {user ? (
            <>
              <div>
                <Button className="bg-white px-6 py-2" onClick={handleLogout}>
                  Log out
                </Button>
              </div>
              <div>
                <Button
                  className="bg-white"
                  onClick={() => router.push("/account")}
                >
                  <FaUserAlt />
                </Button>
              </div>
            </>
          ) : (
            <>
              <div>
                <Button onClick={onOpen} className="px-6 py-2">
                  Sign up
                </Button>
              </div>
              <div>
                <Button onClick={onOpen} className="bg-white px-6 py-2">
                  Log in
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
      {children}
    </header>
  );
};

export default Header;
