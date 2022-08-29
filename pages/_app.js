import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import Web3 from 'web3'
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";



function getLibrary(provider) {
  return new Web3(provider)
}

function MyApp({ Component, pageProps }) {


  return <Web3ReactProvider getLibrary={getLibrary}>
    <ThirdwebProvider desiredChainId={ChainId.Polygon}>
      <GoogleReCaptchaProvider
        reCaptchaKey="6LeGnLYhAAAAAAeqfvsjjpUja6zp8c-JmlzymTYe"
        scriptProps={{
          async: false,
          defer: false,
          appendTo: "head",
          nonce: undefined,
        }}
      >
        <Component {...pageProps} />
      </GoogleReCaptchaProvider>

    </ThirdwebProvider>
  </Web3ReactProvider >



}

export default MyApp
