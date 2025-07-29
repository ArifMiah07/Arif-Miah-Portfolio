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
  const [infoIsShowing, setInfoIsShowing] = useState(false);
  // const audioIsPlaying = true;

  // handle audio player on off toggle
  const handleAudioPlaying = () => {
    setAudioIsPlaying(!audioIsPlaying);
  };

  // handle show info based on the audio on off toggle
  const handleInfoShowing = () => {
    setInfoIsShowing(!infoIsShowing);
    // if(audioIsPlaying) setInfoIsShowing(!false);
  };

  // handle audio player

  return (
    <div className="w-full h-full">
      {/* floating audio player --> toggle between play and pause mode */}
      <div
        onClick={handleAudioPlaying}
        className="relative bg-green-500 border border-green-400 rounded-full flex items-center justify-center">
        {audioIsPlaying ? <CirclePlay /> : <CirclePause />}
      </div>
      <div
        className={` ${
          audioIsPlaying
            ? "rounded-full hidden"
            : " visible absolute -top-5 -right-2"
        } `}>
        <span
          onClick={handleInfoShowing}
          className="relative text-sm text-purple-600">
          <Info />
        </span>

        {infoIsShowing && (
          <section className="w-[60vw] md:w-[20vw] h-[30vh] flex flex-col items-center justify-between p-2 gap-2 bg-amber-100 absolute -top-60 right-4">
            {/* <h1>this is audio player</h1> */}
            <Image
              src={"/icons/meow.png"}
              alt="meow meow"
              width={50}
              height={50}></Image>

            <div>
              <dl>
                <dt>source</dt>
                <dd>leadwave - cosmic dream</dd>
                <dd> dreamscape</dd>
                {/* <dt>Milk</dt>
                <dd>- white cold drink</dd> */}
              </dl>
              {/* <p>leadwave - cosmic dream</p>
              <p> dreamscape</p>
              <span>source</span> */}
            </div>

            <div className="w-full border border-amber-400 flex items-center justify-evenly gap-2 p-2 ">
              <ChevronLeft />
              <p>2:03</p>
              {/* <span>{audioIsPlaying ? <CirclePlay /> : <CirclePause />}</span> */}
              <ChevronRight />
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

/**
 * 
 * 
 * 
 * Mix - scizzie - aquatic ambience
Mixes are playlists YouTube makes for you
insensible - empathy
dreamscape
my head is empty, miranda rain - a way out
dreamscape
øneheart - her eyes
dreamscape
analog_mannequin - milk cassette x.mp3
dreamscape
thenian - you left me on suicide sunday
dreamscape
alvedon - retire (final)
dreamscape
magic
Medasin
futureville - backrooms
dreamscape
leadwave - gone is gone
dreamscape
leadwave - memories
dreamscape
my head is empty, miranda rain - ur my safe place
dreamscape
far.north - escapism
dreamscape
houle, wishfülness - these tears
dreamscape
antent, øneheart, suffershade - floating time
dreamscape
nuages - closer (slowed down)
dreamscape
mylesxiety - it will be alright
dreamscape
øneheart - strain
dreamscape
my head is empty, miranda rain - let me go
dreamscape
antent - pulse
dreamscape
haunted tape - i'd do it all over again
dreamscape
antent - touch
dreamscape
øneheart, orchid mantis - sleepy eyes
dreamscape
antent, øneheart - cold air
dreamscape
1:53
ghxsted. - ethereal.
dreamscape
1:42
futureville - realization
dreamscape
▶
2:03
leadwave - cosmic dream
dreamscape

 */
