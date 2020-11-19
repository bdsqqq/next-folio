export const Img = ({
  src,
  aspectRatio = 16 / 9,
  className = "",
  alt = "",
}) => {
  return (
    <div
      style={{
        paddingBottom: `${(1 / aspectRatio) * 100}%`,
        position: "relative",
      }}
    >
      <div style={{ position: "absolute" }}>
        <img src={src} className={`${className} fullCover`} alt={alt} />
      </div>
    </div>
  );
};
