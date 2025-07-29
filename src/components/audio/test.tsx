

"use client";

import {
  ChevronLeft,
  ChevronRight,
  CirclePause,
  CirclePlay,
  Info,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function AudioPlayer() {
  const [audioIsPlaying, setAudioIsPlaying] = useState(false);
  const [infoIsShowing, setInfoIsShowing] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Toggle play/pause manually
  const handleAudioPlaying = () => {
    if (!audioRef.current) return;

    if (audioIsPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setAudioIsPlaying(!audioIsPlaying);
  };

  // Toggle info panel
  const handleInfoShowing = () => {
    setInfoIsShowing(!infoIsShowing);
  };

  // Auto play on first interaction
  useEffect(() => {
    const startAudio = () => {
      if (audioRef.current && !hasInteracted) {
        audioRef.current.volume = 0.5;
        audioRef.current.play().then(() => {
          setAudioIsPlaying(true);
        }).catch((err) => {
          console.warn("Autoplay blocked:", err.message);
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
      {/* Play/Pause Floating Button */}
      <div
        onClick={handleAudioPlaying}
        className="cursor-pointer fixed bottom-6 left-6 z-50 bg-green-500 border border-green-400 rounded-full flex items-center justify-center p-3 shadow-md hover:bg-green-600 transition-all duration-300"
      >
        {audioIsPlaying ? <CirclePause /> : <CirclePlay />}
      </div>

      {/* Info Button & Panel */}
      <div className={`${audioIsPlaying ? "absolute -top-5 -right-2 " : "hidden"}`}>
        <span
          onClick={handleInfoShowing}
          className="cursor-pointer relative text-sm text-purple-600"
        >
          <Info />
        </span>

        {infoIsShowing && (
          <section className="w-[60vw] md:w-[20vw] h-[40vh] md:h-[36vh] flex flex-col items-center justify-between p-2 gap-2 bg-amber-100 absolute -top-56 md:-top-56 right-4 z-10 border border-amber-400 rounded-lg shadow-lg">
            <Image
              src={"/icons/meow.png"}
              alt="meow meow"
              width={80}
              height={80}
            />
            <div>
              <dl>
                <dt><strong>Source - </strong></dt>
                <dd>leadwave - cosmic dream</dd>
                <dd>dreamscape</dd>
              </dl>
            </div>

            <div className="w-full border border-amber-400 flex items-center justify-evenly gap-2 p-2 bg-white rounded">
              <ChevronLeft />
              <p>2:03</p>
              <ChevronRight />
            </div>
          </section>
        )}
      </div>

      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
      >
        <source
          src="/audios/scizzie-aquatic-ambience.mp3"
        //   src="/audios/antent-ill-be-your-reason-slowed.mp3"
          type="audio/mpeg"
        />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}