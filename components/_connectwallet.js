import { useWeb3React } from "@web3-react/core"
import { useEffect } from "react"
import { injected } from "../components/wallet/connectors"
import React from 'react';


function ConnectWalletButton() {
  const { active, account, library, connector, activate, deactivate } = useWeb3React();


  async function connect() {
    try {
      await activate(injected)
      localStorage.setItem('isWalletConnected', true)
    } catch (ex) {
      console.log(ex)
    }
  }

    const disconnect = async () => {
      try {
        deactivate()
        localStorage.setItem('isWalletConnected', false)
      } catch (ex) {
        console.log(ex)
      }
    }


  useEffect(() => {
    const connectWalletOnPageLoad = async () => {
      if (localStorage?.getItem('isWalletConnected') === 'true') {
        try {
          await activate(injected)
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
      <button onClick={connect} className={active ? "hide" : "btn btn-light  btn-lg btn-block"}
        type="button">Connect Wallet</button>
      {active ?
        <div className="dropdown mt-2 mx-sm-0 px-sm-0 mx-md-0 px-md-0 mx-lg-0 px-lg-0"><a className="dropdown-toggle mx-sm-0 p-sm-0" href="#" role="button"
          id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" data-bs-target="#dropdownlink" 
         aria-controls="dropdownlink">
          <b>{
            account.substring(0, 8) + '...' + account.charAt(account.length - 4) +
            account.charAt(account.length - 3) + account.charAt(account.length - 2) +
            account.charAt(account.length - 1)} </b>
        </a>

          <ul className="dropdown-menu" id="dropdownlink" aria-labelledby="dropdownMenuLink">
            <li><a className="dropdown-item" href="#" onClick={disconnect}>Logout</a></li>
          </ul>
        </div>

        :

        <span></span>}
    </div>

  );
}

export default ConnectWalletButton;