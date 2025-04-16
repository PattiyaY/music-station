"use client";

import { useEffect, useRef, useState } from "react";

export default function AudioController() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false); // Start as false until play succeeds

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const tryPlay = async () => {
        try {
          await audio.play();
          setIsPlaying(true);
        } catch (error) {
          if (error) {
            console.log("Audio play failed:", error);
          }
          const onInteraction = () => {
            audio
              .play()
              .then(() => setIsPlaying(true))
              .catch(() => {});
            document.removeEventListener("click", onInteraction);
          };
          document.addEventListener("click", onInteraction);
        }
      };

      tryPlay();
    }
  }, []);

  const togglePlayback = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/sounds/bg_music.mp3" type="audio/mpeg" />
      </audio>

      <button
        onClick={togglePlayback}
        className="fixed bottom-4 right-4 z-50 px-4 py-2 rounded-full bg-stone-500 text-white cursor-pointer text-base"
      >
        {isPlaying ? "Pause Background Music" : "Play Background Music"}
      </button>
    </>
  );
}
