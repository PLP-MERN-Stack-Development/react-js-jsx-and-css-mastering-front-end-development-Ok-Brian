import useFetch from "../hooks/useFetch";
import Card from "../components/Card";
import Loader from "../components/Loader";

export default function Quotes() {
  const { data, loading } = useFetch("https://api.quotable.io/random");

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Random Quote</h1>

      {loading ? (
        <Loader />
      ) : (
        <Card title="Inspirational Quote">
          <p className="text-lg">{data.content}</p>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
            — {data.author}
          </p>
        </Card>
      )}
    </div>
  );
}
