import React from 'react';
import CoinItem from './CoinItem';

const CoinSearch = ({coins}) => {
  console.log(coins);
  return (
    <div>
      <div className="">
        <h1>Search Crypto</h1>
        <form action="">
          <input type="text" placeholder="Search a coin" />
        </form>
      </div>


      <table>
        <thead>
          <tr>
            <th></th>
            <th>#</th>
            <th>Coin</th>
            <th></th>
            <th>Price</th>
            <th>24h</th>
            <th>24h Volume</th>
            <th>Market</th>
            <th>Last 7 days</th>
            <th>Last Updated</th>
          </tr>
        </thead>
        <tbody>
          
          {
            coins.map( (coin) => (
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