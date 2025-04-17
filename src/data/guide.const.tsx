import type { StaticImageData } from "next/image";
import insert from "../../public/images/insert_cassette.jpeg";
import compactCassette from "../../public/images/compact_cassette.jpeg";
import stop from "../../public/images/pause.jpeg";
import play from "../../public/images/play.jpeg";
import nextSong from "../../public/images/next_song.jpeg";
import previousSong from "../../public/images/previous_song.jpeg";
import cassettePlayer from "../../public/images/cassette_player.jpeg";

type Guide = {
  title: string;
  subtitle?: string;
  description?: string;
  image?: StaticImageData[];
};

export const guide: Guide[] = [
  {
    title: "Music Station",
    subtitle: "90s Thai Music",
    description:
      "Where you can listen to 90s Thai music here and play with some cute features",
    image: [compactCassette],
  },
  {
    title: "Step 1",
    subtitle: "How to use Music Station",
    description: "Start with insert the compact cassette into the player",
    image: [insert],
  },
  {
    title: "Step 2",
    subtitle: "Pause & Play the music",
    description:
      "Press the play button to start and Pause button to stop listening",
    image: [stop, play],
  },
  {
    title: "Step 3",
    subtitle: "Play next song & previous song",
    description: "Press the next or previous button to play the next song",
    image: [previousSong, nextSong],
  },
  {
    title: "Let's play some music!",
    description: "Hope you enjoy the music :)",
    image: [cassettePlayer],
  },
];
