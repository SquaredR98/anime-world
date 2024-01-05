import Image from "next/image";
import { HiOutlineSquare2Stack } from "react-icons/hi2";
import { MotionDiv } from "@/components/MotionDiv";
import { TiStarOutline } from "react-icons/ti";

export interface AnimeProp {
  id: string;
  name: string;
  image: {
    original: string;
  };
  kind: string;
  episodes: number;
  episodes_aired: number;
  score: string;
}

interface Prop {
  anime: AnimeProp;
  index: number;
}

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

function AnimeCard({ anime, index }: Prop) {
  return (
    <MotionDiv
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ delay: index * 0.25, ease: "easeInOut", duration: 0.5 }}
      viewport={{ amount: 0 }}
      className="max-w-sm rounded relative w-full"
    >
      <div className="relative w-full h-[60vh] md:h-96 group overflow-hidden">
        <Image
          src={`https://shikimori.one${anime.image.original}`}
          alt={anime.name}
          fill
          className="object-cover group-hover:scale-110 transition ease-in-out duration-500"
        />
        <div className="py-4 flex flex-col gap-3 absolute bottom-0 left-0 right-0 z-[9999] bg-black/70 backdrop-blur-lg px-2 group">
          <div className="flex justify-between items-center gap-1">
            <h2 className="text-white text-xl line-clamp-1 w-full group-hover:text-shadow-lg">
              {anime.name}
            </h2>
            <div className="py-1 px-2 bg-[#161921] rounded-sm">
              <p className="text-white text-sm capitalize">{anime.kind}</p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div className="flex flex-row gap-1 items-center">
              <HiOutlineSquare2Stack className="text-xl" />
              <p className="text-base text-white">
                {anime.episodes || anime.episodes_aired}
              </p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <TiStarOutline className="text-xl text-[#FFAD49]" />
              <p className="text-base font-bold text-[#FFAD49]">
                {anime.score}
              </p>
            </div>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
}

export default AnimeCard;
