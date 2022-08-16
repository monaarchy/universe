import Head from 'next/head'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import MegaFIScripts from '../components/scripts'


export default function Home() {

  const text = `You won't need to worry again about accessiblity`
  return (
    <div className="LandingPage">
      <Head>
        <title>MegaFi</title>
        <meta charset="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar dashboard={true} connectwallet={false}/>
      <hr />
      <div className="container-fluid ">
        <div className="container bgs">
          <div className="row">
            <div className="col-lg-6">
              <div className="row mt-5 mb-5">
                <p className="top-heading"> The Internet Of </p>
                <p className="top-heading ">
                   <b className="repeat ">NFTS</b>
                </p>
              </div>
              <div className="row mb-5">
                <p className="txt">
                  A Whole New Way To Engage With NFTs. Building Infrastructure. Increasing Utility. 
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
      <div className="container-fluid mt-5 mb-5 ">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="row mt-5">
                <h1>Our Mission</h1>
                <p className="mt-3">
                  Our Mission To Empower Investors And Creators To Transact In A
                  Trustless Environment.
                </p>
                <div className="col-lg-12 mb-5">
                  <button type="button" className="btn btn-light btn-block airdrop">
                    Begin your journey
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-7 ms-auto">
              <div className="row mb-2">
                <div className="col-lg-5 mission-box p-4 m-3">
                  <h5>Low Gas Fees</h5>
                  <p>megaFi is built on the polygon network. We will add more networks in the future.</p>
                </div>
                <div className="col-lg-5 mission-box p-4 m-3">
                  <h5>Governance</h5>
                  <p>
                    Our vision is to give everyone a voice. So, we can innovate together. 
                  </p>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-lg-5 mission-box p-4 m-3">
                  <h5>No Signups</h5>
                  <p>
                    We dont need your email to sign up. All you need to do is
                    connect your metamask wallet.
                  </p>
                </div>
                <div className="col-lg-5 mission-box p-4 m-3">
                  <h5>Digital Assets </h5>
                  <p>The mega economy is open and driven by digital assets capturing value in the real world and virtual world.</p>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-lg-5 mission-box p-4 m-3">
                  <h5>Internet 3.0</h5>
                  <p>
                    Become part of the third version of the internet and do your banking.
                  </p>
                </div>
                <div className="col-lg-5 mission-box p-4 m-3">
                  <h5>100% Ownership </h5>
                  <p>You have 100% control of your crypto and NFTs at all times.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid white-bg">
        <div className="container">
          <div className="row p-5">
            <div className="col-lg-6">
              <p className="black-text">
                {text}
                <br />
                of great assets.
                <br />
                We give you assets and other tools to get ahead in this new world.
                <br />
              </p>
              <div className="col-lg-6 mb-5">
                <button type="button" className="btn btn-dark">
                  Begin your journey
                </button>
              </div>
            </div>
            <div className="col-lg-4 ms-auto">
              <h2 className="black-text black-text-bold">
                megaFi <br /> Driven by
                <br /> Creators &amp; Investors.{" "}
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-light">
        <div className="container">
          <div className="row p-5">
            <h1 className="text-center text-dark">Supported Chains</h1>
            <div className="row mt-5">
              <div className="col-lg-3 mission-box mx-auto mt-3 mb-3">
                <img className="img-fluid w-100" src='/assets/images/polygon.png' alt='polygonlogo' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container">
          <div className="row p-5">
            <h1 className="text-center">#EarnMega</h1>
            <div className="row mt-5">
              <div className="col-lg-3 mission-box p-3   m-4">
                <h5>Mega compound</h5>
                <p>Put your digital assets to work for you.</p>
              </div>
              <div className="col-lg-3 mission-box p-3 m-4">
                <h5>NFTs</h5>
                <p>
                  {" "}
                  Bank with your NFTs.
                </p>
              </div>
              <div className="col-lg-3 mission-box p-3  m-4">
                <h5>Mega Launch Pad</h5>
                <p>
                  Discover the digital assets of innovative concepts of tomorrow.
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
