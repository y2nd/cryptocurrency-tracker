import React from 'react';
import { AiOutlineStar } from "react-icons/ai";
import { Sparklines, SparklinesLine } from "react-sparklines";

const CoinItem = ( {coin} ) => {
  return (
    <tr className="h-[80px] border-b overflow-hidden">
        <td><AiOutlineStar /></td>
        <td>{coin.market_cap_rank}</td>
        <td>
        <div className="flex items-center mr-3">
            <img src={coin.image} alt={coin.id} className="w-6 mr-2 rounded-full"/>
            <p className="hidden sm:table-cell">{coin.name}</p>
        </div>
        </td>
        <td>{coin.symbol.toUpperCase()}</td>
        <td><p className="mr-3">${coin.current_price.toLocaleString()}</p></td>
        <td>
            <p className={coin.price_change_percentage_24h < 0 ? "text-red-600" : "text-green-600"}>{coin.price_change_percentage_24h.toFixed(2)}%</p>
        </td>
        <td className="w-[180px] hidden md:table-cell">{coin.total_volume.toLocaleString()}</td>
        <td className="w-[180px] hidden sm:table-cell">{coin.market_cap.toLocaleString()}</td>
        
        <td>
        <Sparklines data={coin.sparkline_in_7d.price}>
            <SparklinesLine color="green" style={{ fill: "none" }}/>
        </Sparklines>
        </td>
    </tr>
  )
}

export default CoinItem