import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import React, { useEffect } from 'react';
import Script from 'next/script';



function getLibrary(provider) {
  return new Web3(provider)
}

function MyApp({ Component, pageProps }) {
  const NEXT_PUBLIC_GOOGLE_ANALYTICS = "G-0JLJCNKKWC";


  return <>
    <Script strategy="lazyOnload" id="gtm-script" src={`https://www.googletagmanager.com/gtag/js?id=${NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />

    <Script strategy="lazyOnload" id="gtm-script">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
        });
    `}
    </Script>

    <Web3ReactProvider getLibrary={getLibrary}>
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

  </>

}

export default MyApp
