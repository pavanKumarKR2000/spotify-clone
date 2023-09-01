import useLoadImage from "@/hooks/useLoadImage";
import { Song } from "@/types";
import React from "react";

interface SongItemProps {
  onClick: (id: string) => void;
  data: Song;
}

const SongItem: React.FC<SongItemProps> = ({ onClick, data }) => {
  const imagePath = useLoadImage(data);

  return (
    <div
      onClick={() => onClick(data.id)}
      className="relative group flex flex-col items-center justify-center rounded-md overflow-hidden gap-y-4 bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 transition p-3"
    >
      <div className="relative aspect-square w-full h-full rounded-md overflow-hidden"></div>
    </div>
  );
};

export default SongItem;
