import PixelBox from './PixelBox';

export default function LoadingState() {
  return (
    <PixelBox className="p-6 text-center" role="status" aria-live="polite">
      <p className="font-pixel text-black text-xs sm:text-sm mb-5 tracking-widest">
        LOADING<span className="animate-blink">...</span>
      </p>
      <div className="h-6 border-4 border-black bg-white rounded-none overflow-hidden">
        <div className="h-full bg-black animate-load" />
      </div>
      <p className="font-pixel text-black text-[10px] mt-4 leading-relaxed">
        Loading data from Google Sheets...
      </p>
    </PixelBox>
  );
}
