import "./App.css";
import { useEffect, useState } from "react";
import Axios from "axios";
import NewCoin from "./components/NewCoin";

function App() {
  const [listOfCoins, setListOfCoins] = useState([]);
  const [yourInput, setYourInput] = useState("");

  const filteredItems = listOfCoins.filter((coin) => {
    return coin.name.toLowerCase().includes(yourInput.toLowerCase());
  });

  useEffect(() => {
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0").then(
      (response) => {
        console.log(response.data);
        setListOfCoins(response.data.coins);
      }
    );
  }, []);

  return (
    <div className="App">
      <section className="yellowPart">
        <input
          onChange={(event) => {
            setYourInput(event.target.value);
          }}
          type="text"
          placeholder="Find a cryptocurrency..."
          id="input"
        />
      </section>
      <section className="cryptoPart">
        {filteredItems.map((coin) => {
          return (
            <NewCoin
              key={coin.name}
              coinName={coin.name}
              coinSymbol={coin.symbol}
              coinPrice={coin.price}
              coinIcon={coin.icon}
            />
          );
        })}
      </section>
    </div>
  );
}

export default App;
