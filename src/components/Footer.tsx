export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-zinc-600 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Three Dots Group LTD. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="/legal/privacy" className="hover:text-zinc-900">Privacy</a>
          <a href="/legal/terms" className="hover:text-zinc-900">Terms</a>
        </div>
      </div>
    </footer>
  );
}


