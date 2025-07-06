import { useEffect, useState } from "react";

function useCurrencyInfo(baseCurrency) {
  const [data, setData] = useState({});

  useEffect(() => {
    if (!baseCurrency) return;

    fetch(`https://open.er-api.com/v6/latest/${baseCurrency}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.result === "success") {
          setData(res.rates); // ✅ exact structure used by this API
        } else {
          console.error("API Error:", res);
          setData({});
        }
      })
      .catch((err) => {
        console.error("Fetch Error:", err);
        setData({});
      });
  }, [baseCurrency]);

  return data;
}

export default useCurrencyInfo;
