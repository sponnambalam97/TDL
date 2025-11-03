import Image from "next/image";

export function HeroIllustration() {
  return (
    <div className="relative grid aspect-square w-full grid-cols-2 gap-3 overflow-hidden rounded-3xl">
      <div className="relative col-span-2 row-span-1 overflow-hidden rounded-2xl">
        <Image
          src="https://images.unsplash.com/photo-1596495578065-8fe3faad6627?q=80&w=1200&auto=format&fit=crop&v=2"
          alt="Students learning with laptops"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="relative overflow-hidden rounded-2xl">
        <Image
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop&v=2"
          alt="Books and studying"
          fill
          className="object-cover"
        />
      </div>
      <div className="relative overflow-hidden rounded-2xl">
        <Image
          src="https://images.unsplash.com/photo-1596495577886-d920f1fb7238?q=80&w=800&auto=format&fit=crop&v=2"
          alt="Happy student"
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute right-3 top-3 rounded-full bg-white/85 px-3 py-1 text-xs font-medium text-zinc-700 shadow-sm">
        Live classes
      </div>
      <div className="absolute bottom-3 left-3 rounded-xl bg-white/85 px-3 py-2 text-xs text-zinc-700 shadow-sm">
        Badges unlocked: ⭐️⭐️⭐️
      </div>
    </div>
  );
}


