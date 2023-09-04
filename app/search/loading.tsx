"use client";

import Box from "@/components/Box";
import { BeatLoader } from "react-spinners";

const Loading = () => {
  return (
    <Box className="flex items-center justify-center h-full">
      <BeatLoader color="#22c55e" size={20} />
    </Box>
  );
};

export default Loading;
