import React, { useContext, useEffect, useState } from "react";
import "./Home.css";
import { Coincontext } from "../../context/coincontext";

const Home = () => {

    const{allcoins,currency}=useContext(Coincontext)

    const[displaycoin,setdisplaycoin]=useState([])

    const[input,setinput]=useState("")

    const handleinput=(event)=>{
setinput(event.target.value)
    }

    const handlesearch=(e)=>{
        e.preventDefault()
       const filteredCoins= allcoins.filter((item)=>{
            return item.name.toLowerCase().includes(input.toLowerCase())
        })
        setdisplaycoin(filteredCoins)

    }

    useEffect(()=>{

        setdisplaycoin(allcoins)
     
    },[allcoins])

  return (
    <div className="home">
      <div className="hero">
        <h1>
          largest <br />
          crypto marketplace{" "}
        </h1>
        <p>
          welcome to world current cryprocurrency marketplace.
          <p>sign up to explore more about cryptos</p>
        </p>
        <form className="input" onSubmit={handlesearch}>
          <input onChange={handleinput} type="text" placeholder="search crypto" required/>
          <button type="submit">search</button>
        </form>

        <div className="table">
          <table border="1">
            <thead>
              <tr>
                <th>#</th>
                <th>coin</th>
                <th>price</th>
                <th className="change">24hour change</th>
                <th>marketCap</th>
              </tr>
            </thead>
            <tbody>
                {displaycoin && displaycoin.length>0?(

                    displaycoin.slice(0,10).map((coin,index)=>{
                        return  <tr>
                <td>{coin.market_cap_rank}</td>
                <td><img src={coin.image}></img>{coin.name + "-" +coin.symbol}</td>
                <td>{currency.sign} {coin.current_price.toLocaleString()} </td>
                <td className={coin.price_change_percentage_24h>0?"green":"red"}>{ Math.floor(coin.price_change_percentage_24h*100)/100}</td>

                <td>{coin.market_cap}</td>
                
              </tr>
                    })
                ):(null)}
             
             
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
