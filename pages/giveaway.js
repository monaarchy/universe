import Navbar from '../components/navbar'
import Footer from '../components/footer';
import { useRouter } from 'next/router'
import { useState, useCallback } from 'react';
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";


function Giveaway() {
    const router = useRouter();

    const [walletAddress, setWalletAddress] = useState("");
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState("");
    const [messageColor, setMessageColor] = useState("text-white");
    const [tweetShared, setTweetShared] = useState(false);
    const [tweetShow, setTweetShow] = useState(false);
    const [isAddressLength, setIsAddressLength] = useState(false);
    const [toggleInputBox, setToggleInputBox] = useState(true);

    const { executeRecaptcha } = useGoogleReCaptcha();


    const walletAddressChange = useCallback(
        (e) => {
            if (e.target.value.trim().length <= 15) {
                setBtnDisabled(true);
                setMessage("Address should not be less than 15 chracters");
                setIsAddressLength(false);
                setMessageColor("text-danger");
            } else {
                setIsAddressLength(true);
                setMessage(null);
                setBtnDisabled(false);
            }
            setWalletAddress(e.target.value);
        },
        [walletAddress]
    );

    const confirmTweet = () => {
        event.preventDefault();
        setTweetShared(true);
    }


    const handleSubmitForm = (e) => {
        e.preventDefault();
        if (!executeRecaptcha) {
            setMessage("reCAPTCHA Error");
            setMessageColor("text-danger");
            return;
        }
        executeRecaptcha("enquiryFormSubmit").then((gReCaptchaToken) => {
            submitEnquiryForm(gReCaptchaToken);
        });
    }

    const submitEnquiryForm = (gReCaptchaToken) => {
        console.log(walletAddress);
        fetch("/api/enquirytwo", {
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                walletAddressData: walletAddress,
                gRecaptchaToken: gReCaptchaToken,
            }),
        })
            .then((res) => res.json())
            .then((res) => {
                if (res?.status === "success") {
                    if (res?.walletstatus === 2) {
                        setMessage("Duplicate Wallet Address in the database");
                        setMessageColor("text-danger");
                    } else if (res?.walletstatus === 1) {
                        setMessage("We have received your wallet address. Thank you!");
                        setMessageColor("text-success");
                        setTweetShow(true);
                        setToggleInputBox(false);
                    } else {
                        setMessage("Please try again");
                        setMessageColor("text-danger");
                    }
                } else {
                    setMessage(res?.message);
                    setMessageColor("text-danger");
                }
            });
    };



    return (
        <div className="Airdrop">
            <Navbar dashboard={false} connectwallet={true} />
            <hr />
            <div className="container-fluid ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12  mb-5 p-5">
                            <div className="row d-flex ">
                                <div className="col-lg-6 p-4 mission-box mission-radius mission-border mx-auto">
                                    <div >

                                        <h1 className= "text-center mt-3"> Hustlers Giveaway</h1>


                                        <h6 className="text-center mt-3"> If you &lsquo;re here, you are a NFT galactic Hustler. We giving away worlds first batch of Synthetic NFT mega Bored Apes Yacht Club and more. We want you to shine. Drop your polygon address make sure you join Discord, telegram, tweet about your excitement, and stay active on your mega grind. Please make sure you visit soon to learn who are the winners.
                                        
                                        
                                        </h6>
                                      


                                    </div>
                                    <form onSubmit={handleSubmitForm}>
                                        {toggleInputBox && <div className="inputBox">
                                            <div className="row">
                                                <div className="form-group mb-3 mx-1 mt-5">
                                                    <input
                                                        onChange={walletAddressChange}
                                                        type="text"
                                                        className="form-control transparent-input-border text-end"
                                                        value={walletAddress}
                                                        placeholder="Add Your Polygon Address"
                                                    />
                                                </div>
                                            </div>

                                            
                                            <div className="row ps-5 pe-5 mb-4 mt-3">
                                                <button className="btn btn-light  btn-lg btn-block" type="submit" disabled={btnDisabled}>Submit</button>
                                            </div>
                                        </div>
                                        }

                                        {message && <div className={`message text-center mt-5 mb-5 ${messageColor}`}>{message}</div>}

                                        

                                        {
                                            tweetShow &&

                                            <div className='mt-5 me-3 row'>
                                                <div className='col-10'>
                                                    <p className="lead">Share The Hustlers Giveaway</p>
                                                </div>
                                                <div className="col-2">
                                                    <a className="twitter-button"
                                                        onClick={confirmTweet}
                                                        href="https://twitter.com/intent/tweet?text=hustled%20my%20way%20into%20%23the%20$megaFi%20Synthetic%20Bored%20Apes%20Yacht%20Club%20and%20more%20NFT%20giveaway%20at%20polygon.%20The%20internet%20of%20NFTs%20at%20%40megafiprotocol."
                                                        data-text="hustled my way into the $megaFi Synthetic Bored Apes Yacht Club and more NFT giveaway at polygon. The internet of NFTs at @megafiprotocol."
                                                        data-url=""
                                                        data-size="large"
                                                        data-related="airdrops,nfts"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        Tweet
                                                    </a>
                                                </div>
                                            </div>
                                        }
                                    </form>


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

export default Giveaway;