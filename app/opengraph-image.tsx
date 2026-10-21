import { ImageResponse } from "next/og";

export const alt = "Kubri Media - Your bridge to technical audiences.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#020617",
          position: "relative",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Ambient indigo glow */}
        <div
          style={{
            position: "absolute",
            top: -200,
            left: "50%",
            transform: "translateX(-50%)",
            width: 1400,
            height: 900,
            background:
              "radial-gradient(circle, rgba(99,102,241,0.35) 0%, rgba(99,102,241,0.08) 40%, transparent 70%)",
            filter: "blur(80px)",
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "0 80px",
            position: "relative",
            zIndex: 10,
          }}
        >
          <div
            style={{
              fontSize: 28,
              letterSpacing: "0.3em",
              color: "#818cf8",
              textTransform: "uppercase",
              marginBottom: 32,
              fontWeight: 500,
              display: "flex",
            }}
          >
            Kubri Media
          </div>

          <div
            style={{
              fontSize: 84,
              fontWeight: 700,
              color: "#ffffff",
              textAlign: "center",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              display: "flex",
            }}
          >
            Your bridge to technical audiences.
          </div>

          <div
            style={{
              marginTop: 32,
              fontSize: 30,
              color: "#94a3b8",
              textAlign: "center",
              maxWidth: 900,
              lineHeight: 1.4,
              display: "flex",
            }}
          >
            Technical creator partnerships for DevTools and B2B SaaS.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}