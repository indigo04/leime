"use client";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Image,
} from "@heroui/react";
import { ChangeEvent, useRef, useState } from "react";

import { Meme } from "@/types/meme";

type Props = {
  activeMeme: Meme;
  isOpen: boolean;
  memes: Meme[];
  setActiveMeme: (meme: Meme | null) => void;
  onOpenChange: () => void;
};

export default function ModalWindow({
  activeMeme,
  isOpen,
  memes,
  setActiveMeme,
  onOpenChange,
}: Props) {
  const [title, setTitle] = useState(activeMeme.title);
  const [image, setImage] = useState(activeMeme.image);
  const [likes, setLikes] = useState(activeMeme.likes);
  const [titleError, setTitleError] = useState(false);
  const [imageError, setImageError] = useState(false);
  const oldTitle = useRef(activeMeme.title);
  const oldImage = useRef(activeMeme.image);

  const ToggleValue = (event: ChangeEvent<HTMLInputElement>, value: string) => {
    const array = memes;

    if (value === "title") {
      const i = array.findIndex(
        (el: Meme) =>
          el.id === activeMeme.id &&
          el.title === title &&
          el.image === image &&
          el.likes === likes,
      );

      if (event.target.value.length < 3 || event.target.value.length > 100) {
        setTitleError(true);
        setTitle(event.target.value);
      } else {
        const newElement = {
          id: activeMeme.id,
          title: event.target.value,
          image,
          likes,
        };

        setTitleError(false);
        array[i] = newElement;
        setTitle(event.target.value);
      }
    } else if (value === "image") {
      const i = array.findIndex(
        (el: Meme) =>
          el.id === activeMeme.id &&
          el.title === title &&
          el.image === image &&
          el.likes === likes,
      );

      const pattern = /^https?:\/\/.*\.jpg$/;

      if (!pattern.test(event.target.value)) {
        setImageError(true);
        setImage(event.target.value);
      } else {
        const newElement = {
          id: activeMeme.id,
          title,
          image: event.target.value,
          likes,
        };

        setImageError(false);
        array[i] = newElement;
        setImage(event.target.value);
      }
    } else if (value === "likes") {
      const i = array.findIndex(
        (el: Meme) =>
          el.id === activeMeme.id &&
          el.title === title &&
          el.image === image &&
          el.likes === likes,
      );
      const newElement = {
        id: activeMeme.id,
        title,
        image,
        likes: +event.target.value,
      };

      array[i] = newElement;
      setLikes(+event.target.value);
    }

    window.localStorage.setItem("memes", JSON.stringify(array));
  };

  const ResetTitle = () => {
    const array = memes;
    const el = array.find((el: Meme) => el.id === activeMeme.id);

    setTitle(oldTitle.current);
    const newElement = {
      id: activeMeme.id,
      title: oldTitle.current,
      image,
      likes,
    };

    if (el) {
      array[el.id] = newElement;
    }

    window.localStorage.setItem("memes", JSON.stringify(array));
  };

  const ResetImage = () => {
    const array = memes;
    const el = array.find((el: Meme) => el.id === activeMeme.id);

    setImage(oldImage.current);
    const newElement = {
      id: activeMeme.id,
      title,
      image: oldImage.current,
      likes,
    };

    if (el) {
      array[el.id] = newElement;
    }

    window.localStorage.setItem("memes", JSON.stringify(array));
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={() => {
          onOpenChange();
          setActiveMeme(null);
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
              <ModalBody>
                <Image
                  alt="Card background"
                  className="object-contain bg-center"
                  height={300}
                  src={image ? image : "image"}
                  width={300}
                />
                <label htmlFor="id">Id</label>
                <input
                  disabled
                  id="id"
                  name="id"
                  type="text"
                  value={activeMeme.id}
                />
                <label htmlFor="title">Title</label>
                <input
                  required
                  id="title"
                  maxLength={100}
                  minLength={3}
                  name="title"
                  type="text"
                  value={title}
                  onBlur={() => (titleError ? ResetTitle() : 0)}
                  onChange={(event) => ToggleValue(event, "title")}
                />
                {titleError && (
                  <p className="text-red-600 font-bold">
                    Title must be in range 3 - 100*
                  </p>
                )}
                <label htmlFor="image">Image</label>
                <input
                  id="image"
                  name="image"
                  value={image}
                  onBlur={() => (imageError ? ResetImage() : 0)}
                  onChange={(event) => ToggleValue(event, "image")}
                />
                {imageError && (
                  <p className="text-red-600 font-bold">
                    Invalid Url or format is not jpg.
                  </p>
                )}

                <label htmlFor="likes">Likes</label>
                <input
                  id="likes"
                  maxLength={2}
                  name="likes"
                  type="text"
                  value={likes}
                  onChange={(event) => ToggleValue(event, "likes")}
                />
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  onPress={() => {
                    onClose();
                    setActiveMeme(null);
                  }}
                >
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
