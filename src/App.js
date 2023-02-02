import { useState, useEffect } from "react";
/*useEffect*/

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      //패치한 APi정보를 json으로 변경
      .then((json) => {
        setCoins(json);
        setLoading(false);
        //setCoins에 json으로 변경한 정보를 넣으면서 로딩 null값으로 변경
      });
  }, []);
  return (
    <div>
      <h1>The Coins ({coins.length})</h1>
      {loading ? <strong>Loading...</strong> : null}
      <ul>
        {coins.map((coin) => (
          <li>
            {coin.name} ({coin.symbol}) : {coin.quotes.USD.price.toFixed(3)} USD
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
