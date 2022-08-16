

import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import Web3 from 'web3'
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";



function getLibrary(provider) {
  return new Web3(provider)
}

function MyApp({ Component, pageProps }) {
  
  
 

   
  
  
  
  return <ThirdwebProvider desiredChainId={ChainId.Polygon}>
  <Component {...pageProps} />
  
</ThirdwebProvider>




}

export default MyApp
