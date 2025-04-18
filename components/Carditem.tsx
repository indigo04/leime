import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import Link from "next/link";
import { Image } from "@heroui/image";

import { Meme } from "@/types/meme";

type Props = {
  meme: Meme;
};

export default function CardItem({ meme }: Props) {
  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">{meme.title}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2 items-center">
        <Image
          alt="Card background"
          className="object-contain bg-center"
          height={250}
          src={meme.image}
          width={250}
        />
      </CardBody>

      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <Link
          className="text-tiny text-blue-400 uppercase font-bold"
          href={meme.image}
        >
          Link
        </Link>
        <small className="text-default-500">{meme.likes} likes</small>
      </CardFooter>
    </Card>
  );
}
