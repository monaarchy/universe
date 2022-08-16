import { useContract, useContractCall, useAddress, useMetamask } from "@thirdweb-dev/react";
import React, { useState } from 'react';
import { ethers } from 'ethers'


function Swapper(tokeninputs) {
  const [TokenAInput, setTokenAInput] = useState(tokeninputs.tokenAInput);
  const [TokenBInput, setTokenBInput] = useState(tokeninputs.tokenBInput);

  const { contract } = useContract("0xE3FF39050ADc770dC727a2b55f88Fc0cb346119f");


  // connect to address
  const connectedWalletAddresss = useAddress();

  //function of smart contract
  const { mutateAsync: buy, isLoading } = useContractCall(contract, "buy");

  const TokenB = parseInt(TokenBInput);


  const BuyUnits = async () => {

    try {
      await contract.call("buy", 4, ethers.utils.parseEther(TokenBInput.toString()), { gasLimit: 3000000, value: ethers.utils.parseEther(TokenAInput.toString()) });
    }
    catch (ex) {
      console.log(ex)
    }
  }

  //botton clicks and you can swap now..


  return (


    <div className="row ps-5 pe-5">

      <button className="btn btn-light  btn-lg btn-block" disabled={isLoading} onClick={() => BuyUnits({ to: connectedWalletAddresss })} type="button">SWAP</button>
    </div>
  );
}


export default Swapper;