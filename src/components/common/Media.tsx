
interface MediaProps {
  videoSrc: string;
  preview: string;

}

const Media: React.FC<MediaProps> = ({ videoSrc, preview }) => {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
   
      {/* Video */}
      <video
        src={videoSrc}
        poster={preview} // ayuda a mostrar la preview hasta que el video cargue
        controls
        preload="metadata" // carga solo lo mínimo para empezar
        autoPlay={true}
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
