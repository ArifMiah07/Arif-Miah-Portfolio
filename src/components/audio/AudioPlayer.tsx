"use client";

import {
  ChevronLeft,
  ChevronRight,
  CirclePause,
  CirclePlay,
  Info,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function AudioPlayer() {
  const [audioIsPlaying, setAudioIsPlaying] = useState(false);
  // const audioIsPlaying = true;

  const handleAudioPlaying = () => {
    setAudioIsPlaying(!audioIsPlaying);
  };

  // handle audio player

  return (
    <div className="w-full h-full">
      {/* floating audio player --> toggle between play and pause mode */}
      <div
        onClick={handleAudioPlaying}
        className="relative bg-green-500 border border-green-400 rounded-full flex items-center justify-center">
        {audioIsPlaying ? <CirclePlay /> :  <CirclePause />}
      </div>
      <div className={` ${audioIsPlaying ? 'rounded-full hidden' : ' visible absolute -top-5 -right-2'} `}>
        <span className="text-sm text-purple-600">
          <Info />
        </span>
      </div>
      <section className="hidden">
        <h1>this is audio player</h1>
        <Image
          src={"/icons/meow.png"}
          alt="meow meow"
          width={50}
          height={50}></Image>

        <div className="flex gap-2 items-center ">
          <ChevronLeft />
          <CirclePlay />
          <CirclePause />
          <ChevronRight />
        </div>
      </section>
    </div>
  );
}
