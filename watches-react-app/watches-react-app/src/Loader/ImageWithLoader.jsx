import React, { useState } from "react";

const spinnerStyle = {
  width: 40,
  height: 40,
  border: "4px solid #eee",
  borderTop: "4px solid #333",
  borderRadius: "50%",
  animation: "spin 1s linear infinite",
};

const ImageWithLoader = ({ src, alt, className, ...imgProps }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {!loaded && <div style={spinnerStyle} />}
      <img
        {...imgProps}
        src={src}
        alt={alt}
        className={className}
        onLoad={() => setLoaded(true)}
        style={{
          display: loaded ? "block" : "none",
          maxWidth: "100%",
          maxHeight: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  );
};

export default ImageWithLoader;
