"use client";

import {
  ChevronLeft,
  ChevronRight,
  CirclePause,
  CirclePlay,
  Info,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type TSound = {
  src: string;
  title: string;
  channel: string;
  channelUrl?: string;
  duration?: string;
  url?: string;
};

const sound1: TSound = {
  src: "/audios/antent-ill-be-your-reason-slowed.mp3",
  title: "antent - i'll be your reason (slowed + reverb)",
  channel: "dreamscape",
  channelUrl: "https://www.youtube.com/@dreamscape..",
  duration: "2:36",
  url: "https://youtu.be/BWJBgDx9WfU?si=sZeKLOjczG9YuDsq",
};

export default function AudioPlayer() {
  const [audioIsPlaying, setAudioIsPlaying] = useState(false);
  const [infoIsShowing, setInfoIsShowing] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  //   const [count, setCount] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  //   const handle audio list

  // const handleAudioList = ()=>{
  //     //
  // }

  // handle audio player --> on off toggle
  const handleAudioPlaying = () => {
    if (!audioRef.current) return;

    if (audioIsPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setAudioIsPlaying(!audioIsPlaying);
  };

  // handle show info based on the audio on off toggle
  const handleInfoShowing = () => {
    setInfoIsShowing(!infoIsShowing);
  };

  // handle auto play on first interaction
  useEffect(() => {
    const startAudio = () => {
      if (audioRef.current && !hasInteracted) {
        audioRef.current.volume = 0.1;
        audioRef.current
          .play()
          .then(() => {
            setAudioIsPlaying(true);
          })
          .catch((err) => {
            console.warn("AutoPlay Blocked", err.message);
          });
        setHasInteracted(true);
        window.removeEventListener("click", startAudio);
      }
    };

    window.addEventListener("click", startAudio);
    return () => window.removeEventListener("click", startAudio);
  }, [hasInteracted]);

  return (
    <div className="w-full h-full">
      {/* floating audio player --> toggle between play and pause mode */}
      <div
        onClick={handleAudioPlaying}
        className="relative bg-green-500 border border-green-400 rounded-full flex items-center justify-center">
        {audioIsPlaying ? <CirclePause /> : <CirclePlay />}
      </div>
      {/* info btn and panel */}
      <div
        className={` ${
          audioIsPlaying
            ? " visible absolute -top-5 -right-2"
            : "rounded-full hidden"
        } `}>
        <span
          onClick={handleInfoShowing}
          className="relative text-sm text-purple-600">
          <Info />
        </span>

        {/* info panel */}
        {infoIsShowing && (
          <section className="rounded-xl w-[60vw] md:w-[24vw] h-[48vh] md:h-[40vh] flex flex-col items-center justify-between p-2 gap-2 bg-amber-100 dark:bg-primary absolute -top-72 md:-top-64 right-4">
            <Image
              src={"/icons/meow.png"}
              alt="meow meow"
              width={80}
              height={80}></Image>

            <div>
              {/* todo: dynamic */}
              <dl>
                <dt>
                  <strong>Credit - </strong>
                </dt>
                <dd>
                  {" "}
                  <Link href={sound1.url ? sound1.url : "url is missing!"}>
                    {sound1.title}
                  </Link>{" "}
                </dd>
                <dd>
                  <Link
                    href={
                      sound1.channelUrl ? sound1.channelUrl : "url is missing!"
                    }>
                    {sound1.channel}
                  </Link>
                </dd>
              </dl>
            </div>

            <div className="w-full bg-amber-50 dark:bg-teal-500 border border-amber-300 dark:border-teal-300 rounded-lg flex items-center justify-evenly gap-2 p-2 ">
              <ChevronLeft />
              {/* todo: dynamic */}
              <p>{sound1.duration}</p>
              <ChevronRight />
            </div>
          </section>
        )}
      </div>

      {/* hidden audio element */}
      <audio ref={audioRef} loop preload="auto">
        <source
          src="/audios/antent-ill-be-your-reason-slowed.mp3"
          // src="/audios/scizzie-aquatic-ambience.mp3"
          type="audio/mpeg"
        />
        Your browser does not support the audio element.
      </audio>
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
