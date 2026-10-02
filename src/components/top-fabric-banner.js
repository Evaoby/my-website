"use client";
import { useEffect, useRef, useState } from "react";

export function TopFabricBanner() {
  const canvasRef = useRef(null);
  const videoRef = useRef(null);
  const [hasVideoAsset, setHasVideoAsset] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    // Check if video file exists at /videos/top-fabric-banner.mp4
    const videoTest = document.createElement("video");
    videoTest.src = "/videos/top-fabric-banner.mp4";
    videoTest.oncanplay = () => {
      setHasVideoAsset(true);
    };
    videoTest.onerror = () => {
      setHasVideoAsset(false);
    };
  }, []);

  useEffect(() => {
    // Canvas WebGL / 2D 3D Sculptural Fabric Animation
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let time = 0;
    let speed = 1.0;
    let targetSpeed = 1.0;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const handleScroll = () => {
      if (prefersReducedMotion) {
        targetSpeed = 0;
        return;
      }
      const scrollY = window.scrollY || window.pageYOffset || 0;
      // Fluid movement at top (scrollY === 0), gradually dampens to static settled state as user scrolls past header
      targetSpeed = Math.max(0, 1.0 - scrollY / 90);

      // Handle video pause / playback on scroll if video asset exists
      if (videoRef.current) {
        if (scrollY > 100) {
          if (!videoRef.current.paused) videoRef.current.pause();
        } else {
          if (videoRef.current.paused && !prefersReducedMotion) {
            videoRef.current.play().catch(() => {});
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    let width = (canvas.width = canvas.offsetWidth || window.innerWidth || 1200);
    let height = (canvas.height = canvas.offsetHeight || 300);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth || window.innerWidth || 1200;
      height = canvas.height = canvas.offsetHeight || 300;
    };

    window.addEventListener("resize", handleResize);

    const isMobile = width < 768;
    const cols = Math.floor(Math.min(95, Math.max(40, width / (isMobile ? 10 : 14))));
    const rows = Math.floor(Math.min(48, Math.max(22, height / (isMobile ? 9 : 11))));

    const render = () => {
      // Smooth lerp speed transition
      speed += (targetSpeed - speed) * 0.08;
      if (Math.abs(speed) < 0.001) speed = 0;

      if (!prefersReducedMotion) {
        // Continuous, active 3D fabric movement
        time += 0.016 * speed;
      }

      ctx.clearRect(0, 0, width, height);

      // Editorial paper/fog background gradient
      const bgGrad = ctx.createLinearGradient(0, 0, width, height);
      bgGrad.addColorStop(0, "#eef0eb");
      bgGrad.addColorStop(0.5, "#e3e8df");
      bgGrad.addColorStop(1, "#dce2da");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Generate 3D surface mesh points z(u, v, t)
      const grid = [];
      const mobileOffset = isMobile ? 0.35 : 0.0;

      for (let r = 0; r <= rows; r++) {
        const row = [];
        const ny = r / rows;
        const v = ny * 2 - 1;

        for (let c = 0; c <= cols; c++) {
          const nx = c / cols;
          const u = nx * 2.4 - 1.2 + mobileOffset;

          // Organic 3D sculptural fabric waves
          const wave1 = Math.sin(u * 2.6 + time) * Math.cos(v * 2.0 + time * 0.8) * (isMobile ? 55 : 48);
          const wave2 = Math.sin(u * 4.8 - v * 3.5 + time * 1.4) * 26;
          const wave3 = Math.cos(u * 1.4 + v * 4.2 - time * 0.95) * 38;
          const foldPuckering = Math.sin((u + v) * 7.0 + time * 0.6) * 10;

          const z = wave1 + wave2 + wave3 + foldPuckering;

          // 3D perspective projection
          const px = nx * width + z * (isMobile ? 0.22 : 0.18);
          const py = ny * height + z * (isMobile ? 0.32 : 0.28) - wave1 * 0.16;

          row.push({ x: px, y: py, z });
        }
        grid.push(row);
      }

      // Render 3D Fabric Quads with Directional Shading & Specular Sheen
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const p1 = grid[r][c];
          const p2 = grid[r][c + 1];
          const p3 = grid[r + 1][c + 1];
          const p4 = grid[r + 1][c];

          const dzdx = p2.z - p1.z;
          const dzdy = p4.z - p1.z;

          const lx = -0.42;
          const ly = -0.58;

          // Diffuse light intensity
          const diffuse = Math.max(0, Math.min(1, 0.5 + (dzdx * lx + dzdy * ly) * 0.02));

          // Specular satin sheen
          const spec = Math.pow(Math.max(0, 0.42 + (dzdx * 0.32 + dzdy * 0.48) * 0.022), 6) * 0.38;

          // Palette Mapping: Shadow (#1d251f) -> Sage (#4f6351) -> Fog (#dce2da) -> Paper (#eef0eb)
          let rColor, gColor, bColor;
          if (diffuse < 0.45) {
            const tVal = diffuse / 0.45;
            rColor = Math.round(29 + tVal * (79 - 29));
            gColor = Math.round(37 + tVal * (99 - 37));
            bColor = Math.round(31 + tVal * (81 - 31));
          } else if (diffuse < 0.8) {
            const tVal = (diffuse - 0.45) / 0.35;
            rColor = Math.round(79 + tVal * (220 - 79));
            gColor = Math.round(99 + tVal * (226 - 99));
            bColor = Math.round(81 + tVal * (218 - 81));
          } else {
            const tVal = (diffuse - 0.8) / 0.2;
            rColor = Math.round(220 + tVal * (246 - 220));
            gColor = Math.round(226 + tVal * (248 - 226));
            bColor = Math.round(218 + tVal * (244 - 218));
          }

          rColor = Math.min(255, Math.round(rColor + spec * 125));
          gColor = Math.min(255, Math.round(gColor + spec * 125));
          bColor = Math.min(255, Math.round(bColor + spec * 125));

          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.lineTo(p3.x, p3.y);
          ctx.lineTo(p4.x, p4.y);
          ctx.closePath();

          ctx.fillStyle = `rgb(${rColor}, ${gColor}, ${bColor})`;
          ctx.fill();

          ctx.strokeStyle = `rgba(29, 37, 31, ${0.03 + (1 - diffuse) * 0.04})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }

      // Vignette framing
      const vignette = ctx.createRadialGradient(
        width / 2,
        height / 2,
        Math.max(width, height) * 0.2,
        width / 2,
        height / 2,
        Math.max(width, height) * 0.75
      );
      vignette.addColorStop(0, "rgba(238, 240, 235, 0)");
      vignette.addColorStop(1, "rgba(24, 32, 25, 0.16)");
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, width, height);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="top-fabric-banner" aria-hidden="true">
      {hasVideoAsset ? (
        <video
          ref={videoRef}
          src="/videos/top-fabric-banner.mp4"
          poster="/images/top-fabric-banner-static.jpg"
          autoPlay
          loop
          muted
          playsInline
          className={`fabric-video ${videoLoaded ? "is-loaded" : ""}`}
          onLoadedData={() => setVideoLoaded(true)}
        />
      ) : null}

      <canvas
        ref={canvasRef}
        className={`fabric-canvas ${hasVideoAsset && videoLoaded ? "is-hidden" : ""}`}
      />

      <div className="fabric-banner-watermark">
        <span>EO · 3D SCULPTURAL CANVAS</span>
      </div>
    </div>
  );
}
