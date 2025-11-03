export function HeroIllustration() {
  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-gradient-to-tr from-blue-50 via-purple-50 to-pink-50">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="line" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7c8cf7" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#f7a7d9" stopOpacity="0.5" />
          </linearGradient>
          <radialGradient id="blob" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#9bd6fb" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
        </defs>
        <g>
          {[...Array(9)].map((_, i) => (
            <path
              key={i}
              d={`M0 ${60 + i * 40} C 150 ${30 + i * 40}, 450 ${110 + i * 40}, 600 ${60 + i * 40}`}
              stroke="url(#line)"
              strokeWidth="2"
              fill="none"
            />
          ))}
        </g>
        <circle cx="120" cy="120" r="110" fill="url(#blob)" />
        <circle cx="520" cy="420" r="120" fill="url(#blob)" />
      </svg>
      <div className="absolute right-3 top-3 rounded-full bg-white/85 px-3 py-1 text-xs font-medium text-zinc-700 shadow-sm">
        Live classes
      </div>
      <div className="absolute bottom-3 left-3 rounded-xl bg-white/85 px-3 py-2 text-xs text-zinc-700 shadow-sm">
        Badges unlocked: ⭐️⭐️⭐️
      </div>
    </div>
  );
}


