import React from 'react';
import CoinSearch from '../components/CoinSearch';
import Trending from "../components/Trending";

function Home( {coins, loading} ) {
  return (
    <>
      {loading ? <div>LOADING...</div> : <CoinSearch coins={coins} />}
      <Trending />
    </>
  )
}

export default Home