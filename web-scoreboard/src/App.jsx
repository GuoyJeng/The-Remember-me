import Header from './components/Header';
import ScoreTable from './components/ScoreTable';
import LoadingState from './components/LoadingState';
import ErrorState from './components/ErrorState';
import { useScores } from './hooks/useScores';

export default function App() {
  const { scores, loading, error, refetch } = useScores();

  return (
    <main className="min-h-screen bg-white px-3 py-6 sm:px-6 sm:py-12">
      <div className="mx-auto w-full max-w-2xl">
        <Header />
        {loading ? (
          <LoadingState />
        ) : error ? (
          <ErrorState message={error} onRetry={refetch} />
        ) : (
          <ScoreTable scores={scores} />
        )}
      </div>
    </main>
  );
}
