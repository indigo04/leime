"use client";

import { useEffect, useState } from "react";

import memesFromServer from "./../memes.json";
import CardItem from "./Carditem";

import { Meme } from "@/types/meme";

export default function Cardlist() {
  const [memes, setMemes] = useState<Meme[]>([]);

  useEffect(() => {
    const data = window.localStorage.getItem("memes");

    if (data) {
      setMemes(JSON.parse(data));
      localStorage.setItem("memes", data);
    } else {
      setMemes(memesFromServer);
      localStorage.setItem("memes", JSON.stringify(memesFromServer));
    }
  }, []);

  return (
    <main className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      {memes.map((meme: Meme) => (
        <CardItem key={meme.id} meme={meme} />
      ))}
    </main>
  );
}
