import { useAddress, useMetamask, useDisconnect } from "@thirdweb-dev/react";
import { useEffect } from "react"
import React from 'react';


function MetaButton () {


  const address = useAddress();
  // This function will allow the user to connect their metamask wallet to our page
  const connectWithMetamask = useMetamask();
  const disconnectWallet = useDisconnect();
  
  
  
  
  
  useEffect(() => {
    const connectWalletOnPageLoad = async () => {
      if (localStorage?.getItem('isWalletConnected') === 'true') {
        try {
         
          alert(account)
          localStorage.setItem('isWalletConnected', true)
          //  setAccountView(account.substring(0, 8) + '...');
        } catch (ex) {
          console.log(ex)
        }
      }
    }
  }, [])

  
  
  return (




    <div className="dropdown mx-sm-0 px-sm-0 mx-md-0 px-md-0 mx-lg-3 px-lg-5">
    <button onClick={connectWithMetamask} className={address ? "hide" : "btn btn-light  btn-lg btn-block"}
      type="button">Connect Wallet</button>
    {address ?
      <div className="dropdown mt-2 mx-sm-0 px-sm-0 mx-md-0 px-md-0 mx-lg-0 px-lg-0"><a className="dropdown-toggle mx-sm-0 p-sm-0" href="#" role="button"
        id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" data-bs-target="#dropdownlink" 
       aria-controls="dropdownlink">
        <b>{
          address.substring(0, 8) + '...' + address.charAt(address.length - 4) +
          address.charAt(address.length - 3) + address.charAt(address.length - 2) +
          address.charAt(address.length - 1)} </b>
      </a>

        <ul className="dropdown-menu" id="dropdownlink" aria-labelledby="dropdownMenuLink">
          <li><a className="dropdown-item" href="#" onClick={disconnectWallet}>Logout</a></li>
        </ul>
      </div>

      :

      <span></span>}
  </div>

);
}




export default MetaButton;