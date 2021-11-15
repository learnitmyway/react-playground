// Copied from https://codesandbox.io/s/ynn88nx9x?from-embed=&file=/src/count-context.js
import React from "react";

export default function useRenderCounter() {
  const ref = React.useRef();
  React.useEffect(() => {
    ref.current.textContent = Number(ref.current.textContent || "0") + 1;
  });
  return (
    <span
      style={{
        backgroundColor: "#ccc",
        borderRadius: 4,
        padding: "2px 4px",
        fontSize: "0.8rem",
        margin: "0 6px",
        display: "inline-block"
      }}
      ref={ref}
    />
  );
}
