import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./pages/Home";
import Signin from "./pages/SIgnin";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [coins, setCoins] = useState([]);

  const url = "https://api.coinpaprika.com/v1/tickers";

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data);
      console.log(response.data);
    });
  }, [url]);

  return (
    <ThemeProvider>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home coins={coins} />} />
        <Route path="/signin" element={<Signin />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/account" element={<Account />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
