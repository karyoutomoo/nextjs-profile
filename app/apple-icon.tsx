import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/**
 * Generates the iOS home-screen icon: the "F" monogram on the portfolio's
 * base background colour. Mirrors the artwork in app/icon.svg.
 */
export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#111827",
        color: "#ffffff",
        fontSize: 116,
        fontWeight: 700,
        fontFamily: "Helvetica, Arial, sans-serif",
        letterSpacing: -4,
      }}
    >
      F
    </div>,
    size,
  );
}
