function BgVideo({ videoUrl }) {
  const style = {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100vw",
    height: "100vh",
    objectFit: "cover",
    zIndex: "-99999",
  };

  return (
    <video loop={true} autoPlay="autoPlay" style={style} muted>
      <source src={videoUrl} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

export default BgVideo;
