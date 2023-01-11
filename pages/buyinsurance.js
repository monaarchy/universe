import Head from 'next/head'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import MegaFIScripts from '../components/scripts'


function BuyInsurance() {

    const text = `You won't need to worry again about accessiblity`    
          return (
            <div>
              {/*-<!DOCTYPE html*/}
              <meta charSet="utf-8" />
              <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <title>monaarchy</title>
              <link rel="apple-touch-icon" sizes="180x180" href="images/apple-touch-icon.png" />
              <link rel="icon" type="image/png" sizes="32x32" href="images/favicon-32x32.png" />
              <link rel="icon" type="image/png" sizes="16x16" href="images/favicon-16x16.png" />
              <link rel="icon" type="image/x-icon" sizes="16x16" href="images/favicon.ico" />
              <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
              <link rel="preconnect" href="https://fonts.googleapis.com" />
              <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
              <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
              <link rel="stylesheet" href="style/style.css?version=8" />
              {/* HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries */}
              {/* Leave those next 4 lines if you care about users using IE8 */}
              {/*[if lt IE 9]>
            
            
          <![endif]*/}
              <style dangerouslySetInnerHTML={{__html: "\n        .hilightColor {\n            background-color: #373434;\n            padding: 5px 10px;\n        }\n        \n        .removeHilight {\n            background-color: #1a1a1a;\n            padding: 5px 10px;\n        }\n        \n        .buysell {\n            cursor: pointer;\n        }\n    " }} />
              <div className="container-fluid">
                <div className="container">
                  <div className="row">
                    <nav className="navbar navbar-expand-lg nav-bg">
                      <div className="container-fluid">
                        <a className="navbar-brand" href="#"><img src="/" alt="monaarchy" /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle
                                      navigation">
                          <span className="navbar-toggler-icon"><i className="fas
                                              fa-bars" /></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                              <a className="nav-link" href="index.html">Home</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="https://app.gitbook.com/o/midfNDhpUOzTCNWCsrMl/s/nOZiuC9wCYlPkNwhcOVI/guides/megateam">About
                                us</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="https://discord.gg/xwuxAnkq">Discord</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href>Github</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="https://megafiprotocol.github.io/docs/">Docs</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
              <hr />
              <div className="container-fluid">
                <div className="container">
                  <div className="row mb-4">
                    <a href="index.html"><i className="fas fa-arrow-left" /> Back</a>
                  </div>
                  <div className="row">
                    <div className="col-lg-12 mb-5 p-5">
                      <div className="row mb-3">
                        <div className="col-3">
                          <h1>Insurance Marketplace</h1>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="input-group">
                          <input className="form-control mission-border
                                          mission-radius mission-box mission-search" type="text" placeholder="Search..." id="tradeSearch" />
                        </div>
                      </div>
                      <div className="row mt-5 mb-3">
                        <table>
                          <thead>
                            <tr className="tradeList-row">
                              <th className="tradeList-padding" scope="col">Ticker</th>
                              <th className="tradeList-padding" scope="col">Pool Price</th>
                              <th className="tradeList-padding" scope="col">Oracle Price</th>
                              <th className="tradeList-padding" scope="col">Premium</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="tradeList-padding">
                                <div className>
                                  <div className="row">
                                    <div className="col-2">
                                      <img className="currency_icon" src="images/android-chrome-192x192.png" alt="icon" />
                                    </div>
                                    <div className="col-2">
                                      <div className="container">
                                        <div className="row">
                                          <h5>MFI</h5>
                                        </div>
                                        <div className="row">
                                          <p>MegaFi</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="tradeList-padding">5.94 USDT</td>
                              <td className="tradeList-padding">5.94 USDT</td>
                              <td className="tradeList-padding">5.94 USDT</td>
                            </tr>
                            <tr>
                              <td className="tradeList-padding">
                                <div className>
                                  <div className="row">
                                    <div className="col-2">
                                      <img className="currency_icon" src="images/android-chrome-192x192.png" alt="icon" />
                                    </div>
                                    <div className="col-2">
                                      <div className="container">
                                        <div className="row">
                                          <h5>MFI</h5>
                                        </div>
                                        <div className="row">
                                          <p>MegaFi</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="tradeList-padding">5.94 USDT</td>
                              <td className="tradeList-padding">5.94 USDT</td>
                              <td className="tradeList-padding">5.94 USDT</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-fluid mission-box">
                <div className="container">
                  <div className="row p-5">
                    <div className="col-lg-4">
                      <img src="images/footer-logo-mega-fi.png" className="img-fluid" alt="MegaFi" />
                      <div className="row mt-5">
                        <p>MegaFi allow you to discover emerging non-fungible token(NFT). </p>
                      </div>
                    </div>
                    <div className="col-lg-2">
                      <h5>Quick Links</h5>
                      <p><a href="#"> Docs</a></p>
                      <p><a href="#"> Contact</a></p>
                    </div>
                    <div className="col-lg-2">
                      <h5>Community</h5>
                      <p><a href="#"> Help Center</a></p>
                      <p><a href="#"> Careers</a></p>
                      <p><a href="#"> Blog</a></p>
                    </div>
                    <div className="col-lg-4">
                      <h5>Follow us on</h5>
                      <div className="row">
                        <div className="col-lg-4">
                          <p className="icon p-2"><a href="https://t.me/+LdFqD-mMu082ZjYx"><i className="fab fa-telegram-plane" /></a></p>
                        </div>
                        <div className="col-lg-4">
                          <p className="icon p-2"><a href="https://twitter.com/megafiprotocol"><i className="fab fa-twitter" /></a></p>
                        </div>
                        <div className="col-lg-4">
                          <p className="icon p-2"><a href="https://www.youtube.com/channel/UCcPcWN4irqZDgSpj9fJkBUg"><i className="fab fa-youtube" /></a></p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-4">
                          <p className="icon p-2"><a href="#"><i className="fab
                                                  fa-instagram" /></a></p>
                        </div>
                        <div className="col-lg-4">
                          <p className="icon p-2"><a href="https://www.tiktok.com/t/ZTdn66sdn/"><i className="fab fa-tiktok" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Including Bootstrap JS (with its jQuery dependency) so that dynamic components work */}
              - Hello world --&gt;
              <div className="awesome" style={{border: '1px solid red'}}>
                <label htmlFor="name">Enter your name: </label>
                <input type="text" id="name" />
              </div>
              <p>Enter your HTML here</p>
            </div>
          );
        }
    
    
      export default BuyInsurance;