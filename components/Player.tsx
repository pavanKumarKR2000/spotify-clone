"use client";

import useGetSongById from "@/hooks/useGetSongById";
import useLoadSongUrl from "@/hooks/useLoadSongUrl";
import usePlayer from "@/hooks/usePlayer";
import React from "react";

const Player = () => {
  const { activeId } = usePlayer();
  const { isLoading, song } = useGetSongById(activeId);
  const songUrl = useLoadSongUrl(song!);

  if (!song || !songUrl || !activeId) {
    return null;
  }

  return (
    <div className="fixed bottom-0 w-full h-[80px] py-2 bg-black px-4">
      Player
    </div>
  );
};

export default Player;
