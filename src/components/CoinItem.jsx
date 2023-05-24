import React from "react";
import { AiOutlineStar } from "react-icons/ai";

function CoinItem({ coin }) {
  console.log(coin);
  return (
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
    </tr>
  );
}

export default CoinItem;
