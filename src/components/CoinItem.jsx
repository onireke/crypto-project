import React from "react";
import { AiOutlineStar } from "react-icons/ai";

function CoinItem({ coin }) {
  return (
    <div>
      <tr>
        <td>
          <AiOutlineStar />
        </td>
        <td>{coin.market_cap_rank}</td>
        <td>
          <div>
            <img src={coin.image} alt={coin.id} />
            <p>{coin.name}</p>
          </div>
        </td>
        <td>{coin.symbol}</td>
        <td>{coin.current.price}</td>
        <td>{coin.price_change_percentage_24h}</td>
        <td>{coin.total_volume}</td>
        <td>{coin.market.cap}</td>
        <td>
          <Sparklines data={coin.Sparklines_in_7d.price}>
            <SparklinesLines color="teal" />
          </Sparklines>
        </td>
      </tr>
    </div>
  );
}

export default CoinItem;
