export function SectionWave({ flip = false }: { flip?: boolean }) {
  return (
    <div className="relative -mt-px">
      <svg
        className={`h-12 w-full ${flip ? "rotate-180" : ""}`}
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 48L60 44C120 40 240 32 360 32C480 32 600 40 720 44C840 48 960 48 1080 46.7C1200 45 1320 40 1380 37.3L1440 35V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0V48Z"
          fill="url(#g)"
        />
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#e6f0ff" />
            <stop offset="1" stopColor="#f3e8ff" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}


