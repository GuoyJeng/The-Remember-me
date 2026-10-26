export default function Header() {
  return (
    <header className="text-center mb-6 sm:mb-10">
      <div className="pixel-divider mb-6" />

      <h1
        className="font-pixel text-black text-xl sm:text-3xl leading-relaxed tracking-widest
                   [text-shadow:4px_4px_0_rgba(0,0,0,0.15)]"
      >
        THE REMEMBER ME
      </h1>

      <p className="font-pixel text-black text-[10px] sm:text-xs mt-3 tracking-widest">
        * HIGH SCORES *
      </p>

      <div className="pixel-divider mt-6" />
    </header>
  );
}
