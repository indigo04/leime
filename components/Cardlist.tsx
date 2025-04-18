"use client";

import memesFromServer from "./../memes.json";
import CardItem from "./Carditem";

import { Meme } from "@/types/meme";

export default function Cardlist() {
  const data = localStorage.getItem("memes");
  let memes;

  if (data) {
    memes = JSON.parse(data);
  } else {
    memes = memesFromServer;
    localStorage.setItem("memes", JSON.stringify(memes));
  }

  return (
    <main className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      {memes.map((meme: Meme) => (
        <CardItem key={meme.id} meme={meme} />
      ))}
    </main>
  );
}
