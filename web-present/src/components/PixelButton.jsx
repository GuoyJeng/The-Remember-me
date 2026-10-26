function PixelButton({ children, invert = false, onClick }) {
  const colors = invert
    ? 'bg-white text-black hover:bg-black hover:text-white'
    : 'bg-black text-white hover:bg-white hover:text-black';

  return (
    <button
      type="button"
      onClick={onClick}
      className={`border-[3px] border-black px-4 py-[15px] font-pixel text-[9px] leading-[1.4] shadow-pixel transition active:translate-x-[6px] active:translate-y-[6px] active:shadow-none ${colors}`}
    >
      {children}
    </button>
  );
}

export default PixelButton;
