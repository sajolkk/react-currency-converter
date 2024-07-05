import { useEffect, useState } from "react";
const apiBaseUrl = 'https://api.currencyapi.com/v3/latest?apikey=cur_live_rUVrherNLNNRxm7ZZvVfIUaVN5aNTBwXYDhm74b7'
function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

  useEffect(() => {
    fetch(`${apiBaseUrl}&base_currency=${currency}`)
    .then((response) => response.json())
    .then((response) => setData(response.data));
    // console.log(data);
  }, [currency]);
//   console.log(data);
  return data;
}

export default useCurrencyInfo;
