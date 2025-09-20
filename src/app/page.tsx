'use client';

import { useState } from 'react';

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenApp = () => {
    setShowModal(true);
  };

  const confirmOpen = () => {
    window.location.href = 'commandrot://open';
    setShowModal(false);
  };

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
          <button onClick={handleOpenApp} className="inline-block rounded bg-white px-4 py-2 font-medium text-black hover:bg-zinc-200">Open Commandrot</button>
          <a href="https://github.com/creationaff/commandrot.com" className="inline-block rounded bg-zinc-800 px-4 py-2 font-medium text-white hover:bg-zinc-700">GitHub</a>
        </section>
        <footer className="mt-8 text-center text-xs text-zinc-500">
          v0.1.1
        </footer>
      </div>

      {/* Custom Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-zinc-900 rounded-lg p-6 max-w-md w-full border border-zinc-700">
            <h3 className="text-lg font-semibold mb-4">Open Commandrot Desktop App?</h3>
            <div className="text-sm text-zinc-300 mb-6 space-y-3">
              <p>Commandrot is built with <strong>Electron</strong> — a framework that lets us create native desktop apps using web technologies.</p>
              <p>This gives you:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Native macOS integration (voice, file access, system control)</li>
                <li>Secure local processing</li>
                <li>Fast, responsive interface</li>
                <li>Works offline for basic functions</li>
              </ul>
              <p>The app needs to be installed first. <a href="https://github.com/creationaff/commandrot.com" className="text-blue-400 hover:underline">Download from GitHub</a></p>
            </div>
            <div className="flex gap-3">
              <button onClick={confirmOpen} className="flex-1 bg-white text-black px-4 py-2 rounded font-medium hover:bg-zinc-200">
                Open App
              </button>
              <button onClick={() => setShowModal(false)} className="flex-1 bg-zinc-700 text-white px-4 py-2 rounded font-medium hover:bg-zinc-600">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
