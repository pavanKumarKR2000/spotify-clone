"use client";

import useGetSongById from "@/hooks/useGetSongById";
import usePlayer from "@/hooks/usePlayer";
import React from "react";

const Player = () => {
  const { activeId } = usePlayer();
  const { isLoading, song } = useGetSongById(activeId);

  return <div>Player</div>;
};

export default Player;
