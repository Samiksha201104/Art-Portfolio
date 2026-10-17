
import { useEffect } from "react";

export default function AudioManager() {
  useEffect(() => {
    const music = new Audio(`${import.meta.env.BASE_URL}audio/bg.mp3`);
    music.loop = true;
    music.volume = 0.12;

    const playMusic = () => {
      if (music.paused) {
        music.play().catch(() => {});
      }
    };

    const playClick = (event) => {
      if (!event.target.closest("a, button")) return;

      const clickSound = new Audio(`${import.meta.env.BASE_URL}audio/click.mp3`);
      clickSound.volume = 0.25;
      clickSound.play().catch(() => {});
    };

    document.addEventListener("pointerdown", playMusic);
    document.addEventListener("click", playClick);

    return () => {
      document.removeEventListener("pointerdown", playMusic);
      document.removeEventListener("click", playClick);
      music.pause();
    };
  }, []);

  return null;
}
