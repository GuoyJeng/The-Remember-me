import PixelBox from './PixelBox';
import ScoreRow from './ScoreRow';

export default function ScoreTable({ scores }) {
  if (!scores.length) {
    return (
      <PixelBox className="p-6 text-center font-pixel text-xs text-black">
        NO DATA YET
      </PixelBox>
    );
  }

  return (
    <PixelBox className="overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full font-pixel text-[10px] sm:text-sm text-black">
          <thead>
            <tr className="bg-black text-white border-b-4 border-black">
              <th className="px-2 sm:px-4 py-3 text-center w-16 sm:w-24">RANK</th>
              <th className="px-2 sm:px-4 py-3 text-left">NAME</th>
              <th className="px-2 sm:px-4 py-3 text-center">DATE</th>
              <th className="px-2 sm:px-4 py-3 text-right">SCORE</th>
            </tr>
          </thead>
          <tbody>
            {scores.map((s) => (
              <ScoreRow key={`${s.rank}-${s.name}`} {...s} />
            ))}
          </tbody>
        </table>
      </div>
    </PixelBox>
  );
}
