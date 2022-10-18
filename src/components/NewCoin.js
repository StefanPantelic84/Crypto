import React from "react";

function NewCoin(props) {
  return (
    <div className="coin">
      <h1>Name:{props.coinName}</h1>
      <img alt="hi" src={props.coinIcon} />
      <h3>Symbol:{props.coinSymbol}</h3>
      <h3>Price: ${props.coinPrice.toFixed(2)}</h3>

      <br></br>
    </div>
  );
}

export default NewCoin;
