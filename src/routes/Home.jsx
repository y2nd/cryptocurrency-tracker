import React from 'react'
import CoinSearch from '../components/CoinSearch'

function Home( {coins, loading} ) {
  return (
    <div>
      {loading ? <div>LOADING...</div> : <CoinSearch coins={coins} />}
    </div>
  )
}

export default Home