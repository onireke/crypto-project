import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { Sparklines, SparklinesLine } from "react-sparklines";

// import CoinItem from "./CoinItem";

function CoinSearch({ coins }) {
  console.log(coins);
  return (
    <div>
      <div>
        <h1>Search Crypto</h1>
        <form>
          <input type="text" placeholder="Serach coin" />
        </form>
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <th></th>
            <th>#</th>
            <th>Coin</th>
            <th></th>
            <th>Price</th>
            <th>24h</th>
            <th>24h Volume</th>
            <th>Mkt</th>
            <th>Last 7 days</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin) => (
            <tr className="w-full">
              <td>
                <AiOutlineStar />
              </td>
              <td>{coin.rank}</td>
              <td>
                <div>
                  <p>{coin.name}</p>
                </div>
              </td>
              <td>{coin.symbol}</td>
              <td>{coin.quotes.USD.price}</td>
              <td>{coin.quotes.USD.percent_change_24h}</td>
              <td>{coin.quotes.USD.volume_24h}</td>
              <td>{coin.quotes.USD.market_cap}</td>
              <td>
                <Sparklines data={coin.quotes.USD.percent_change_7d}>
                  <SparklinesLine color="purple" />
                </Sparklines>
              </td>
            </tr>
            // <CoinItem key={coin.id} coin={coin} />;
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CoinSearch;
