import { useEffect, useState } from "react";

export default function GetParty(url) {
  const [party, setParty] = useState([]);
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getParty = async () => {
      try {
        const result = await fetch(url);
        const data = await result.json();
        console.log(data);
        setParty(data.results);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getParty();
  }, [url]);
  return { party, loading, error };
}