"use client";
import { Button } from "@heroui/react";

import { Meme } from "@/types/meme";

type Props = {
  meme: Meme;
  onOpen: () => void;
  setActiveMeme: (meme: Meme) => void;
};

export default function EditButton({ meme, onOpen, setActiveMeme }: Props) {
  const ToggleButton = () => {
    setActiveMeme(meme);
    onOpen();
  };

  return <Button onPress={ToggleButton}>Edit</Button>;
}
