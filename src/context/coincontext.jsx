import { createContext, useEffect, useState } from "react";

export const Coincontext = createContext();

import React from "react";

const Coincontextprovider = ({ children }) => {
  const [allcoins, setallcoins] = useState([]);
  const [currency, setcurrency] = useState({
    name: "usd",
    sign: "$",
  });

  const fetchdata = () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-Eg8UZ4Wfvoiszk11SvyxjyK7",
      },
    };

    fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`,
      options
    )
      .then((res) => res.json())
      .then((res) => setallcoins(res))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchdata();
  }, [currency]);

  return (
    <Coincontext.Provider value={{ allcoins, setallcoins ,currency,setcurrency}}>
      {children}
    </Coincontext.Provider>
  );
};

export default Coincontextprovider;
