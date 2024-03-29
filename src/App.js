import React, { useEffect, useState } from "react";
import {Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./routes/Home";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";
import Account from "./routes/Account";
import CoinPage from "./routes/CoinPage";

import axios from "axios";

import { ThemeProvider } from "./context/ThemeContext";
import Footer from "./components/Footer";
import { AuthContextProvider } from "./context/AuthContext";

function App() {

  const [coins, setCoins] = useState([]);
  const [isLoading, setLoading] = useState(true);
  
  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=10&page=1&sparkline=true";

  useEffect( () => {
    axios.get(url).then( (response) => {
      setCoins(response.data);
      setLoading(false);
    });
    
  }, [url]);

  return (
    <ThemeProvider>
      <AuthContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home coins ={coins} loading={isLoading} />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/account" element={<Account />} />
          <Route path="/coin/:coinId" element={<CoinPage />}>
            <Route />
          </Route>
        </Routes>
        <Footer />
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
