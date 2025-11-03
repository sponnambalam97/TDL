export function LogoStrip() {
  const logos = ["Globe", "Next", "Window", "File", "Vercel"];
  const files: Record<string, string> = {
    Globe: "/globe.svg",
    Next: "/next.svg",
    Window: "/window.svg",
    File: "/file.svg",
    Vercel: "/vercel.svg",
  };
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="grid grid-cols-2 items-center gap-8 opacity-70 sm:grid-cols-3 md:grid-cols-5">
        {logos.map((l) => (
          <img key={l} src={files[l]} alt={`${l} logo`} className="mx-auto h-7 w-auto" />
        ))}
      </div>
    </div>
  );
}


