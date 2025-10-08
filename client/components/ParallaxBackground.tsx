import { useEffect, useState } from "react";

export const ParallaxBackground = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setPos({ x, y });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div
        className="absolute -top-20 -left-20 h-[30rem] w-[30rem] rounded-full blur-3xl animate-pulse-subtle"
        style={{
          background:
            "radial-gradient(closest-side, rgba(88,101,242,0.18), transparent)",
          transform: `translate(${pos.x}px, ${pos.y}px)`,
        }}
      />
      <div
        className="absolute bottom-0 right-0 h-[35rem] w-[35rem] rounded-full blur-3xl animate-gradient"
        style={{
          background:
            "radial-gradient(closest-side, rgba(168,85,247,0.18), transparent)",
          transform: `translate(${-pos.x}px, ${-pos.y}px)`,
        }}
      />
    </div>
  );
};
