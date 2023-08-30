"use client";

import React, { useEffect } from "react";
import Modal from "./Modal";
import {
  useSessionContext,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import useAuthModal from "@/hooks/useAuthModal";

const AuthModal = () => {
  const supabaseClient = useSupabaseClient();
  const { session } = useSessionContext();
  const router = useRouter();

  const { isOpen, onClose } = useAuthModal();

  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  useEffect(() => {
    if (session) {
      onClose();
      router.refresh();
    }
  }, [session, onClose, router]);

  return (
    <Modal
      title="Welcome back"
      description="Login to your account"
      isOpen={isOpen}
      onChange={onChange}
    >
      <Auth
        theme="dark"
        providers={["github"]}
        magicLink
        supabaseClient={supabaseClient}
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: { brand: "#404040", brandAccent: "#22c55e" },
              fonts: {
                bodyFontFamily: "Outfit,sans-serif",
                buttonFontFamily: "Outfit,sans-serif",
                inputFontFamily: "Outfit,sans-serif",
                labelFontFamily: "Outfit,sans-serif",
              },
            },
          },
        }}
      />
    </Modal>
  );
};

export default AuthModal;
