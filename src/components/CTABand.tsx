export function CTABand() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-20">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-500 to-purple-500 p-8 text-white">
        <div className="relative z-10">
          <h3 className="text-2xl font-semibold">Ready to help your child shine?</h3>
          <p className="mt-1 text-white/90">Book a free consultation and personalised learning plan.</p>
          <div className="mt-4 flex gap-3">
            <a href="/contact" className="rounded-full bg-white px-5 py-3 text-blue-700 hover:bg-white/90">Book now</a>
            <a href="/services" className="rounded-full bg-white/10 px-5 py-3 hover:bg-white/20">Explore services</a>
          </div>
        </div>
        <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/20 blur-2xl" />
        <div className="pointer-events-none absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
      </div>
    </div>
  );
}


