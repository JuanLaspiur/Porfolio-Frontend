import { useState } from "react";

interface MediaProps {
  videoSrc: string;
  preview: string;
  className?: string; // 👈 opcional
}

const Media: React.FC<MediaProps> = ({ videoSrc, preview, className }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <video
      src={videoSrc}
      muted
      autoPlay
      loop
      playsInline
      poster={preview}
      onCanPlayThrough={() => setLoaded(true)}
      className={className}
      style={{
        opacity: loaded ? 1 : 0,
        transition: "opacity 0.4s ease",
      }}
    />
  );
};

export default Media;
