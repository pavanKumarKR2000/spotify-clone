"use client";

import useGetSongById from "@/hooks/useGetSongById";
import useLoadSongUrl from "@/hooks/useLoadSongUrl";
import usePlayer from "@/hooks/usePlayer";
import React from "react";
import PlayerContent from "./PlayerContent";

const Player = () => {
  const { activeId } = usePlayer();
  const { isLoading, song } = useGetSongById(activeId);
  const songUrl = useLoadSongUrl(song!);

  if (!song || !songUrl || !activeId) {
    return null;
  }

  return (
    <div className="fixed bottom-0 w-full h-[80px] py-2 bg-black px-4">
      <PlayerContent key={songUrl} song={song} songUrl={songUrl} />
    </div>
  );
};

export default Player;
