import { useEffect, useState } from "react";

function usecurrencyinfo(currency) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res.rates);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Currency API error:", err);
        setLoading(false);
      });
  }, [currency]);

  return { data, loading };
}

export default usecurrencyinfo;
