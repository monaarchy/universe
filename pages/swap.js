import Footer from '../components/footer';
import Navbar from '../components/navbar';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Swapper from '../components/swapbutton';


function Swap() {
    const router = useRouter();
    const [TokenA, setTokenA] = useState(1);
    const [TokenB, setTokenB] = useState(10);
    const [TokenAInput, setTokenAInput] = useState(1);
    const [TokenBInput, setTokenBInput] = useState(10);

    useEffect(() => {
        setTokenAInput(1);
        setTokenBInput(TokenB * TokenA);
    }, []);

    const setTokenBSwap = (B) => {
        setTokenB(B);
    }

    const SwapTokens = () => {
       
    }

    const swapTokenAView = (e) => {
        const TokenAView = e.target.value * (TokenA / TokenB);
        setTokenAInput(TokenAView);
        setTokenBInput(e.target.value);
    }

    const swapTokenBView = (e) => {
        const TokenBView = TokenB * (e.target.value / TokenA);
        setTokenBInput(TokenBView);
        setTokenAInput(e.target.value);
    }


    return (
        <div className="Swap">
            <Navbar dashboard={false} connectwallet={true} />
            <hr />
            <div className="container-fluid ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12  mb-5 p-5">
                            <div className="row d-flex justify-content-between d-grid">
                                <div className="col-lg-6 p-4 mission-box mission-radius mission-border mx-auto">
                                    <div className="row">
                                        <div className="col">
                                            <h1>Swap</h1>
                                        </div>
                                        <div className="col">
                                            <h1 className="text-end">
                                                <a href="https://megafiprotocol.github.io/docs/pages/design/TokenomicsandGovernance/">
                                                    <i className="fas fa-cog" />
                                                </a>
                                            </h1>
                                        </div>
                                    </div>
                                    <div className="row mt-5">
                                        <p className="lathe-special-text"> From</p>
                                    </div>
                                    <div className="row">
                                        <div className="input-group mb-3">
                                            <button
                                                className="btn btn-outline-secondary transparent-dropdown-border"
                                                type="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                <img src="/assets/images/image 11.png" /> MATIC
                                            </button>
                                            <input
                                                type="text"
                                                className="form-control transparent-input-border text-end"
                                                aria-label="Text input with dropdown button"
                                                onChange={swapTokenBView}
                                                value={TokenAInput}
                                            />
                                        </div>
                                    </div>
                                    <div className="row m-3">
                                        <h1 className="text-center">
                                            <i className="far fa-arrow-alt-circle-down" />
                                        </h1>
                                    </div>
                                    <div className="row">
                                        <p className="lathe-special-text"> To</p>
                                    </div>
                                    <div className="row">
                                        <div className="input-group mb-3">
                                            <button
                                                className="btn btn-outline-secondary transparent-dropdown-border"
                                                type="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                <img src="/assets/images/WhatsApp Image 2022-05-21 at 11.47 1.png" />{" "}
                                                MEGAFI
                                            </button>
                                            <input
                                                type="text"
                                                className="form-control transparent-input-border text-end"
                                                aria-label="Text input with dropdown button"
                                                onChange={swapTokenAView}
                                                value={TokenBInput}
                                            />
                                        </div>
                                    </div>
                                    <hr />
                                    <Swapper tokenAInput={TokenAInput} key={TokenAInput} tokenBInput={TokenBInput}/>
                            
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Swap;