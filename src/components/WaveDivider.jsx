

const WaveDivider = ({ flip = false, className = "", opacity = 0.35 }) => {
  return (
    <div
      className={`w-full overflow-hidden leading-none pointer-events-none select-none ${flip ? "rotate-180" : ""} ${className}`}
      style={{ marginBottom: flip ? undefined : "-2px", marginTop: flip ? "-2px" : undefined }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 90"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-[60px] md:h-[90px]"
      >
        {/* Back wave — lighter */}
        <path
          d="M0,45 C240,90 480,0 720,45 C960,90 1200,0 1440,45 L1440,90 L0,90 Z"
          fill="hsl(153 28% 14%)"
          opacity={opacity * 0.5}
        />
        {/* Front wave — stronger */}
        <path
          d="M0,60 C360,15 720,90 1080,30 C1260,12 1380,55 1440,45 L1440,90 L0,90 Z"
          fill="hsl(153 28% 14%)"
          opacity={opacity}
        />
      </svg>
    </div>
  );
};

export default WaveDivider;
