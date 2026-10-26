import PixelBox from './PixelBox';

export default function ErrorState({ message, onRetry }) {
  return (
    <PixelBox className="p-6 text-center" role="alert">
      <p className="font-pixel text-black text-sm sm:text-base mb-1 tracking-widest">
        GAME OVER
      </p>
      <div className="pixel-divider my-3" />
      <p className="font-pixel text-black text-[10px] mb-5 leading-relaxed break-words">
        {message}
      </p>
      <button
        type="button"
        onClick={onRetry}
        className="btn-pixel text-xs"
        id="retry-button"
      >
        {'>> RETRY'}
      </button>
    </PixelBox>
  );
}
