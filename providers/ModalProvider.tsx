"use client";

import Modal from "@/components/Modal";
import { useEffect, useState } from "react";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Modal
      title="hello my name is pavan"
      isOpen
      description="test"
      onChange={() => {}}
    >
      modal
    </Modal>
  );
};

export default ModalProvider;
