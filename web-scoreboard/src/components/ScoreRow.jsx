import { formatDate, formatDateTime } from '../utils/formatDate';

export default function ScoreRow({ rank, name, score, date }) {

  return (
    <tr
      className={`border-b-4 border-black font-pixel
        transition-colors duration-0
        odd:bg-white even:bg-[#f0f0f0] `}
    >
      <td
        className={`px-2 sm:px-4 py-3 text-center whitespace-nowrap`}
      >
        {rank}
      </td>
      <td className="px-2 sm:px-4 py-3 truncate max-w-[6rem] sm:max-w-none">
        {name}
      </td>
      <td
        className="px-2 sm:px-4 py-3 text-center whitespace-nowrap"
        title={formatDateTime(date)}
      >
        {formatDate(date)}
      </td>
      <td className={`px-2 sm:px-4 py-3 text-right`}>
        {score.toLocaleString()}
      </td>
    </tr>
  );
}
