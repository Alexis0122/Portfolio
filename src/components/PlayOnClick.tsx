import { useEffect, useRef } from "react";

const PlayOnClick = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const handleClick = () => {
      if (audioRef.current) {
        audioRef.current.volume = 0.1;
        audioRef.current.play().catch((err) => {
          console.warn("No se pudo reproducir el audio automáticamente:", err);
        });
      }
    };

    // Espera la primera interacción
    window.addEventListener("click", handleClick, { once: true });

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <audio ref={audioRef} src="/public/Eta Ñema.mp3" preload="auto" />
  );
};

export default PlayOnClick;