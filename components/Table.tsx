"use client";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@heroui/table";
import { useDisclosure } from "@heroui/react";
import { useEffect, useState } from "react";

import memesFromServer from "./../memes.json";
import EditButton from "./Button";
import ModalWindow from "./Modal";

import { Meme } from "@/types/meme";

export default function MemeTable() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [activeMeme, setActiveMeme] = useState<Meme | null>(null);
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
    <main>
      {memes[0] && (
        <Table
          aria-label="Example static collection table"
          className="overflow-x-scroll md:overflow-hidden"
        >
          <TableHeader>
            <TableColumn>ID</TableColumn>
            <TableColumn>TITLE</TableColumn>
            <TableColumn>IMAGE</TableColumn>
            <TableColumn>LIKES</TableColumn>
            <TableColumn>ACTIONS</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key={memes[0].id}>
              <TableCell>{memes[0].id}</TableCell>
              <TableCell>{memes[0].title}</TableCell>
              <TableCell>{memes[0].image}</TableCell>
              <TableCell>{memes[0].likes}</TableCell>
              <TableCell>
                <EditButton
                  meme={memes[0]}
                  setActiveMeme={setActiveMeme}
                  onOpen={onOpen}
                />
              </TableCell>
            </TableRow>
            <TableRow key={memes[1].id}>
              <TableCell>{memes[1].id}</TableCell>
              <TableCell>{memes[1].title}</TableCell>
              <TableCell>{memes[1].image}</TableCell>
              <TableCell>{memes[1].likes}</TableCell>
              <TableCell>
                <EditButton
                  meme={memes[1]}
                  setActiveMeme={setActiveMeme}
                  onOpen={onOpen}
                />
              </TableCell>
            </TableRow>
            <TableRow key={memes[2].id}>
              <TableCell>{memes[2].id}</TableCell>
              <TableCell>{memes[2].title}</TableCell>
              <TableCell>{memes[2].image}</TableCell>
              <TableCell>{memes[2].likes}</TableCell>
              <TableCell>
                <EditButton
                  meme={memes[2]}
                  setActiveMeme={setActiveMeme}
                  onOpen={onOpen}
                />
              </TableCell>
            </TableRow>
            <TableRow key={memes[3].id}>
              <TableCell>{memes[3].id}</TableCell>
              <TableCell>{memes[3].title}</TableCell>
              <TableCell>{memes[3].image}</TableCell>
              <TableCell>{memes[3].likes}</TableCell>
              <TableCell>
                <EditButton
                  meme={memes[3]}
                  setActiveMeme={setActiveMeme}
                  onOpen={onOpen}
                />
              </TableCell>
            </TableRow>
            <TableRow key={memes[4].id}>
              <TableCell>{memes[4].id}</TableCell>
              <TableCell>{memes[4].title}</TableCell>
              <TableCell>{memes[4].image}</TableCell>
              <TableCell>{memes[4].likes}</TableCell>
              <TableCell>
                <EditButton
                  meme={memes[4]}
                  setActiveMeme={setActiveMeme}
                  onOpen={onOpen}
                />
              </TableCell>
            </TableRow>
            <TableRow key={memes[5].id}>
              <TableCell>{memes[5].id}</TableCell>
              <TableCell>{memes[5].title}</TableCell>
              <TableCell>{memes[5].image}</TableCell>
              <TableCell>{memes[5].likes}</TableCell>
              <TableCell>
                <EditButton
                  meme={memes[5]}
                  setActiveMeme={setActiveMeme}
                  onOpen={onOpen}
                />
              </TableCell>
            </TableRow>
            <TableRow key={memes[6].id}>
              <TableCell>{memes[6].id}</TableCell>
              <TableCell>{memes[6].title}</TableCell>
              <TableCell>{memes[6].image}</TableCell>
              <TableCell>{memes[6].likes}</TableCell>
              <TableCell>
                <EditButton
                  meme={memes[6]}
                  setActiveMeme={setActiveMeme}
                  onOpen={onOpen}
                />
              </TableCell>
            </TableRow>
            <TableRow key={memes[7].id}>
              <TableCell>{memes[7].id}</TableCell>
              <TableCell>{memes[7].title}</TableCell>
              <TableCell>{memes[7].image}</TableCell>
              <TableCell>{memes[7].likes}</TableCell>
              <TableCell>
                <EditButton
                  meme={memes[7]}
                  setActiveMeme={setActiveMeme}
                  onOpen={onOpen}
                />
              </TableCell>
            </TableRow>
            <TableRow key={memes[8].id}>
              <TableCell>{memes[8].id}</TableCell>
              <TableCell>{memes[8].title}</TableCell>
              <TableCell>{memes[8].image}</TableCell>
              <TableCell>{memes[8].likes}</TableCell>
              <TableCell>
                <EditButton
                  meme={memes[8]}
                  setActiveMeme={setActiveMeme}
                  onOpen={onOpen}
                />
              </TableCell>
            </TableRow>
            <TableRow key={memes[9].id}>
              <TableCell>{memes[9].id}</TableCell>
              <TableCell>{memes[9].title}</TableCell>
              <TableCell>{memes[9].image}</TableCell>
              <TableCell>{memes[9].likes}</TableCell>
              <TableCell>
                <EditButton
                  meme={memes[9]}
                  setActiveMeme={setActiveMeme}
                  onOpen={onOpen}
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      )}

      {activeMeme && (
        <ModalWindow
          activeMeme={activeMeme}
          isOpen={isOpen}
          memes={memes}
          setActiveMeme={setActiveMeme}
          onOpenChange={onOpenChange}
        />
      )}
    </main>
  );
}
