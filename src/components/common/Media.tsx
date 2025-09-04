
interface MediaProps {
  videoSrc : string;
  preview  : string;
  autoPlay? : boolean;

}

const Media: React.FC<MediaProps> = ({ videoSrc, preview, autoPlay = false }) => {
  // La imagen de Preview no se ve.. esta en public
  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <video
        src={videoSrc}
        poster={preview} // ayuda a mostrar la preview hasta que el video cargue
        preload="auto" // carga solo lo mínimo para empezar
        autoPlay={autoPlay}
        muted
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  );
};

export default Media;
