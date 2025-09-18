export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <header className="mb-16">
          <div className="text-4xl font-bold">Commandrot</div>
          <p className="mt-3 text-zinc-300">Talk to your Mac. Approve actions. Get it done.</p>
        </header>
        <section className="grid gap-8 md:grid-cols-2">
          <div className="rounded-lg border border-zinc-800 p-6">
            <h2 className="text-xl font-semibold">Voice + Text agent</h2>
            <p className="mt-2 text-zinc-300">Say it or type it. Commandrot plans, previews, and executes with your approval.</p>
          </div>
          <div className="rounded-lg border border-zinc-800 p-6">
            <h2 className="text-xl font-semibold">Safety first</h2>
            <p className="mt-2 text-zinc-300">Every action shows a preview. Approve or reject. Global kill switch.</p>
          </div>
          <div className="rounded-lg border border-zinc-800 p-6">
            <h2 className="text-xl font-semibold">Computer control</h2>
            <p className="mt-2 text-zinc-300">Open apps and URLs, read/write files, run shell commands, and browse.</p>
          </div>
          <div className="rounded-lg border border-zinc-800 p-6">
            <h2 className="text-xl font-semibold">Built for speed</h2>
            <p className="mt-2 text-zinc-300">Electron desktop app. Local TTS. Whisper STT. Diff previews.</p>
          </div>
        </section>
        <section className="mt-16 flex gap-3">
          <a href="commandrot://open" className="inline-block rounded bg-white px-4 py-2 font-medium text-black hover:bg-zinc-200">Open Commandrot</a>
          <a href="https://github.com/creationaff/commandrot.com" className="inline-block rounded bg-zinc-800 px-4 py-2 font-medium text-white hover:bg-zinc-700">GitHub</a>
        </section>
      </div>
    </main>
  );
}
