import Head from 'next/head'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import MegaFIScripts from '../components/scripts'


export default function Home() {

  const text = `You won't need to worry again about accessiblity`
  return (
    <div className="LandingPage">
      <Head>
        <title>monaarchy</title>
        <meta charset="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar dashboard={true} connectwallet={false} />
      <hr />
      <div className="container-fluid ">
        <div className="container bgs">
          <div className="row">
            <div className="col-lg-6">
              <div className="row mt-5 mb-5">
                <p className="top-heading">Internet Of </p>
                <p className="top-heading ">
                  <b className="repeat ">NFTS</b>
                </p>
              </div>
              <div className="row mb-5">
                <p className="txt">
                Insurance For The DeFi Economy. A Whole New Way To Engage With NFTs. The Next Stage Of Finance.
                </p>
              </div>
              <div className="row">
                <p></p>
              </div>
              <div className="row mb-5">
                <div className="col-lg-4">

                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="loader">Loading...</div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid mt-5 mb-5">
        <div className="container mt-4 mb-4">
          <div className="row">
            <div className="col-lg-3">
              <div className="row mt-5 mb-5">
                <h1>Our Value</h1>
                <p className="mt-3">
                NFTs DeFi has low liqudity and low activities compared to cryptocurrencies DeFi.
                Unleashing confidence in the DeFi economy By insuring the lenders to increase activities.
                </p>


              </div>
            </div>
            <div className="col-lg-7 ms-lg-auto mx-sm-2">
              <div className="row mb-2 px-4 px-md-0 px-lg-0">
                <div className="col-lg-5 mission-box p-4 px-5 m-3 mx-0 mx-md-3">
                  <h5 className="mb-4">What Are Crowns?</h5>
                  <p>Crowns are Synthetic NFTs. They represent NFT collections backed by DeFi data. 
                    Users can purchase crowns for a fragment of NFTs.   </p>
                </div>
                <div className="col-lg-5 mission-box p-4 px-5 m-3 mx-0 mx-md-3">
                  <h5 className="mb-4">Liqudity</h5>
                  <p>
                    Crowns create liqudity in the protocol which helps insurance economy strive. 
                    Crowns reward Investors with compound interest for the liqudity. Monaarchy main focus is to own 65% 
                    of the liqudity.
                  </p>
                </div>
              </div>
              <div className="row mb-2 px-4 px-md-0 px-lg-0">
                <div className="col-lg-5 mission-box p-4 px-5 m-3 mx-0 mx-md-3">
                  <h5 className="mb-4">Why Insurance?</h5>
                  <p>
                    Insurance creates a well balance and stability economy for defaults digital assets. Lenders no longer depend on one buyer because of the liquadity created by 
                    crowns.
                  </p>
                </div>
                <div className="col-lg-5 mission-box p-4 px-5 m-3 mx-0 mx-md-3">
                  <h5 className="mb-4">NFT Economy</h5>
                  <p>NFTs is the present and the future of the internet. NFTs will be in the center of social media, metaverse, and Internet of Things.</p>
                </div>
              </div>
              <div className="row mb-2 px-4 px-md-0 px-lg-0">
                <div className="col-lg-5 mission-box p-4 px-5 m-3 mx-0 mx-md-3">
                  <h5 className="mb-4">Lead Internet 3.0 With megaFi</h5>
                  <p>
                    Become part of the third version of the internet and crown yourself with megaFi in the 21st century. MegaFi will allow you 
                    to purchase crowns for you to earn and bring the next stage of finance.

        
                  </p>
                </div>
                <div className="col-lg-5 mission-box p-4 px-5 m-3 mx-0 mx-md-3">
                  <h5 className="mb-4">megaFi Monaarchs </h5>
                  <p>megaFi monaarchs will provide you access to the entire patform as we open it up to insure the markets. 
                    You will be able to purchase it with 300 $matic.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid white-bg pt-4 pb-4">
        <div className="container">
          <div className="row p-5">
            <div className="col-lg-6">
              <p className="black-text text-center text-md-start">
                We envision a world where is safer to transact in a decentralized manner.
                <br /> 
                <br />
                 We build alorithms that acclerates the DeFi economy forward.

                <br />

                Innovation and inclusivity is in the core of our strategy.

              </p>
              <div className="col-lg-6 mb-5">

              </div>
            </div>
            <div className="col-lg-4 d-inline-block ms-auto">
                <h2 className="black-text black-text-bold text-center text-md-start mx-auto">
                  megaFi <br /> Tokens
                  <br /> Powers Our Economy{" "}
                </h2>
              </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-light pt-5 pb-5">
        <div className="container">
          <div className="row p-5">
            <h1 className="text-center text-dark">Supported Chains</h1>
            <div className="row mt-5">
              <div className="col-lg-3 mission-box mx-auto mt-3 mb-3">
                <img className="img-fluid mw-100" src='/assets/images/polygon.png' alt='polygonlogo' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid pt-5 pb-5">
        <div className="container">
          <div className="row p-5 px-3 px-md-5">
            <h1 className="text-center mb-4">#MonaarchyYourNFT</h1>
            <div className="row mt-5 mx-auto justify-content-center">
              <div className="col-lg-3 mission-box p-4 px-5 m-2 m-md-4 mt-4">
                <h5 className="mb-4">megaFi compound</h5>
                <p>Put your digital assets to work for you buy learning about the megaFi & crown digital asset.</p>
              </div>
              <div className="col-lg-3 mission-box p-4 px-5 m-2 m-md-4 mt-4">
                <h5 className="mb-4">Digital Bank In Your Pocket</h5>
                <p>
                  {" "}
                  Bank with your NFTs and dont need to worry again about any issues. The monaarchy and users with crowns cover you.
                </p>
              </div>
              <div className="col-lg-3 mission-box p-4 px-5 m-2 m-md-4 mt-4">
                <h5 className="mb-4">Monaarchy Investors, Developers & Innovators</h5>
                <p>
                  monaaarchy Investors will bring the next million into DeFi. Innovators and Developers will build
                  on top of our solution to take us to the next level.
        
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <MegaFIScripts />
    </div>
  )
}
