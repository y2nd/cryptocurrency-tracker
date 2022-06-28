import React, { useState } from 'react';
import CoinItem from './CoinItem';

const CoinSearch = ({coins}) => {

  const [SearchText, setSearchText] = useState('');

  const handleChange = (event) => {
    setSearchText(event.target.value);
  } 
  return (
    <div className="rounded-div my-4">
      <div className="flex flex-col md:flex-row justify-between pt-4 pb-6 text-center md:text-right">
        <h1 className="text-2xl font-bold my-2">Crypto Board</h1>
        <form action="">
          <input 
            type="text" 
            placeholder="Search a coin" 
            className="w-full bg-primary border border-input px-4 py-2 rounded-2xl shadow-xl outline-none" 
            onChange={handleChange}/>
        </form>
      </div>


      <table className="w-full text-center ">
        <thead>
          <tr className="border-b">
            <th></th>
            <th className="px-4">#</th>
            <th className="text-left">Coin</th>
            <th></th>
            <th>Price</th>
            <th>24h</th>
            <th className="hidden md:table-cell">24h Volume</th>
            <th className="hidden md:table-cell">Market</th>
            <th>Last 7 days</th>
          </tr>
        </thead>
        <tbody>
          
          {
            coins.filter( (value) => {
              if(SearchText === '') {
                return value;
              } else if(value.name.toLowerCase().includes(SearchText.toLowerCase())) {
                return value;
              }
            }).map( (coin) => (
                <CoinItem coin={coin} key={coin.id} />
              )
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default CoinSearch