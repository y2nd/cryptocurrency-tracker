import React from 'react';
import { AiOutlineStar } from "react-icons/ai";
import { Sparklines, SparklinesLine } from "react-sparklines";

const CoinItem = ( {coin} ) => {
  return (
    <tr>
        <td><AiOutlineStar /></td>
        <td>{coin.market_cap_rank}</td>
        <td>
        <div className="">
            <img src={coin.image} alt={coin.id} />
            <p>{coin.name}</p>
        </div>
        </td>
        <td>{coin.symbol}</td>
        <td>{coin.current_price}</td>
        <td>{coin.price_change_percentage_24h}</td>
        <td>{coin.total_volume}</td>
        <td>{coin.market_cap}</td>
        
        <td>
        <Sparklines data={coin.sparkline_in_7d.price} width={100} height={20}>
            <SparklinesLine color="green" style={{ fill: "none" }}/>
        </Sparklines>
        </td>
        <td>{coin.last_updated}</td>
    </tr>
  )
}

export default CoinItem