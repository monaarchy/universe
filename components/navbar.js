
import { useState } from 'react';
import Link from 'next/link';
import MetaButton from './metabutton'

function Navbar(navprops) {
  const [dashboardstatus, setDashboardStatus] = useState(navprops.dashboard);
  const [connectwalletstatus, setConnectWalletStatus] = useState(navprops.connectwallet);

  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row pt-2">
          <nav className="navbar navbar-expand-lg nav-bg">
            <div className="container-fluid">
              <Link href="/swap">
                <a className="navbar-brand">
                  <img src="/assets/images/header-logo-mega-fi.png" alt="mega-fi" />
                </a>
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon">
                  <i className="fas fa-bars" />
                </span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      {/* Home */}
                    </a>
                  </li>
                  <li className="nav-item">
                    <Link
                      href="/aboutus"
                    >
                      <a className="nav-link">About Us</a>
                    </Link>
                
                  </li>
                  <li className="nav-item">
                    <Link
                      href="/giveaway"
                    >
                      <a className="nav-link">Giveaway</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="https://discord.gg/JNMf6G2Xdf">
                      <a className="nav-link" target="_blank" rel="noopener noreferrer">
                        Discord
                      </a>
                    </Link>
                  </li>
                  
                  <li className="nav-item">
                    <Link href="/airdrop">
                      <a className="nav-link">
                        Airdrop
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="https://megafiprotocol.github.io/docs/" target="_blank" rel="noopener noreferrer"
                    >
                      Protocol Docs
                    </a>
                  </li>
                  <li className="nav-item">
                    <Link href="/nft">
                      <a className="nav-link">
                        NFTs
                      </a>
                    </Link>
                  </li>
                  <li className={dashboardstatus ? "hide" : "nav-item"}>
                    <Link href="/swap">
                      <a className="nav-link">
                        Buy $megaFi
                      </a>
                    </Link>
                  </li>
                  <li className={dashboardstatus ? "nav-item" : "hide"}>
                    <div className="row ps-lg-5 pe-lg-5 mt-3 mt-lg-1">
                      <Link href="/swap">
                        <button className="btn btn-light  btn-lg btn-block" type="button">Dashboard</button>
                      </Link>
                    </div>
                  </li>
                  <li className={connectwalletstatus ? "nav-item" : "hide"}>
                   
                   <MetaButton/>
                 

                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
