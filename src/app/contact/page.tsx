export const metadata = {
  title: "Contact",
  description: "Get in touch for enrolment enquiries and personalised learning plans.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="mb-4 text-3xl font-bold">Contact Us</h1>
      <p className="mb-8 text-zinc-700">Call 07868620068 or send us a message below.</p>
      <form className="grid grid-cols-1 gap-4">
        <div>
          <label className="mb-1 block text-sm font-medium">Parent Name</label>
          <input className="w-full rounded-xl border border-zinc-300 px-3 py-2" required />
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-medium">Mobile</label>
            <input className="w-full rounded-xl border border-zinc-300 px-3 py-2" required />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">Email</label>
            <input type="email" className="w-full rounded-xl border border-zinc-300 px-3 py-2" required />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-medium">Student Name</label>
            <input className="w-full rounded-xl border border-zinc-300 px-3 py-2" required />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">Class</label>
            <input className="w-full rounded-xl border border-zinc-300 px-3 py-2" required />
          </div>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium">Message</label>
          <textarea rows={5} className="w-full rounded-xl border border-zinc-300 px-3 py-2" required />
        </div>
        <button className="mt-2 w-fit rounded-full bg-zinc-900 px-5 py-3 text-white hover:bg-zinc-800">
          Submit
        </button>
      </form>
      <div className="mt-10 text-sm text-zinc-700">
        <div>HEADQUARTERS</div>
        <div>307, Euston road, Greater London, NW1 3AD</div>
      </div>
    </main>
  );
}


