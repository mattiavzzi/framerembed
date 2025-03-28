'use client';


export default function Home() {
  return (
    <div className="w-full h-screen">
      <iframe
        src="https://maily-template.framer.website/"
        className="w-full h-full border-0"
        allow="fullscreen"
      />
      <a
        href="https://google.it"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-0 right-4 mb-4 mr-4 bg-blue-500 text-white px-4 py-2 rounded-[var(--button-radius)] z-50 hover:bg-blue-600 transition-colors font-inter font-bold"
        style={{ '--button-radius': '13px' } as React.CSSProperties}
      >
        Contact our Team
      </a>
    </div>
  );
}
