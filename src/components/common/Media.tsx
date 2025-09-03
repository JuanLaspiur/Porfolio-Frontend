import { useState } from "react";

interface MediaProps {
  videoSrc: string;
  preview: string;
}

const Media: React.FC<MediaProps> = ({ videoSrc, preview }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      {/* Imagen de preview */}
      {!isLoaded && (
        <img
          src={preview}
          alt="Preview"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      )}

      {/* Video */}
      <video
        src={videoSrc}
        poster={preview} // ayuda a mostrar la preview hasta que el video cargue
        controls
        preload="metadata" // carga solo lo mínimo para empezar
        autoPlay={false}
        muted
        onCanPlay={() => setIsLoaded(true)} // marca que el video ya se puede reproducir
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: isLoaded ? "block" : "none",
        }}
      />
    </div>
  );
};

export default Media;
