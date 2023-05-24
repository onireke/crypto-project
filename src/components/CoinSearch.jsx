import React from "react";
import CoinItem from "./CoinItem";

function CoinSearch({ coins }) {
  console.log(coins);
  return (
    <div>
      <div>
        <h1>Search Coin</h1>
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
          {coins.map((coin) => {
            <CoinItem key={coin.id} coin={coin} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default CoinSearch;
