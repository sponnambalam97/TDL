export function HeroIllustration() {
  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-3xl">
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-300 via-purple-300 to-sky-300" />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="line" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        {[...Array(8)].map((_, i) => (
          <path
            key={i}
            d={`M0 ${80 + i * 40} C 150 ${40 + i * 40}, 450 ${120 + i * 40}, 600 ${80 + i * 40}`}
            stroke="url(#line)"
            strokeWidth="2"
            fill="none"
          />
        ))}
      </svg>
      <div className="absolute right-6 top-6 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-zinc-700 shadow-sm">
        Live classes
      </div>
      <div className="absolute bottom-6 left-6 rounded-xl bg-white/85 px-3 py-2 text-xs text-zinc-700 shadow-sm">
        Badges unlocked: ⭐️⭐️⭐️
      </div>
    </div>
  );
}


