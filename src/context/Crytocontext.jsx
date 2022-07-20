import { createContext, useContext, useState,useEffect } from "react";
import axios from "axios";
import { CoinList } from "../config/api";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc} from "firebase/firestore";



const CryptoContext = createContext(null);

const CryptoProvider = ({ children }) => {
    const [currency, setCurrency] = useState("INR");
    const [symbol, setSymbol] = useState("₹");
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(false);
    const [user,setUser] = useState(null) 
    const [alert,setAlert] = useState({
      open:false,
      message:"",
      type:"success",
    })
    const [watchlist, setWatchlist] = useState([]);

    // useEffect(() => {
    //   if (user) {
    //     const coinRef = doc(db, "watchlist", user?.uid);
    //     var unsubscribe = onSnapshot(coinRef, (coin) => {
    //       if (coin.exists()) {
    //         console.log(coin.data().coins);
    //         setWatchlist(coin.data().coins);
    //       } else {
    //         console.log("No Items in Watchlist");
    //       }
    //     });
  
    //     return () => {
    //       unsubscribe();
    //     };
    //   }
    // }, [user]);
  
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) setUser(user);
        else setUser(null);
      });
    }, []);

  
    const fetchCoins = async () => {
      setLoading(true);
      const { data } = await axios.get(CoinList(currency));
      setCoins(data);
      setLoading(false);
    };
  
    useEffect(() => {
      if (currency === "INR") setSymbol("₹");
      else if (currency === "USD") setSymbol("$");
    }, [currency]);
  return (
    <CryptoContext.Provider value={{currency,setCurrency,symbol,coins,loading,fetchCoins,alert,setAlert,user}}>
      {children}
    </CryptoContext.Provider>
  );
};

const useCrypto = () => useContext(CryptoContext);

export { CryptoProvider, useCrypto };