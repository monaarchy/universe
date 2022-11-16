import Navbar from '../components/navbar'
import Footer from '../components/footer';
import { useRouter } from 'next/router'
import { useState, useCallback } from 'react';
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";


function Giveaway() {
    const router = useRouter();

    const [walletAddress, setWalletAddress] = useState("");
    const [walletAddressCheck, setWalletAddressCheck] = useState("");
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [btnDisabledCheck, setBtnDisabledCheck] = useState(true);
    const [message, setMessage] = useState("");
    const [messageCheck, setMessageCheck] = useState("");
    const [messageColor, setMessageColor] = useState("text-white");
    const [tweetShared, setTweetShared] = useState(false);
    const [tweetSharedCheck, setTweetSharedCheck] = useState(false);
    const [tweetShow, setTweetShow] = useState(false);
    const [tweetShowCheck, setTweetShowCheck] = useState(false);
    const [isAddressLength, setIsAddressLength] = useState(false);
    const [toggleInputBox, setToggleInputBox] = useState(true);
    const [toggleInputBoxCheck, setToggleInputBoxCheck] = useState(true);
    const [loader, setLoader] = useState(false);
    const [loaderCheck, setLoaderCheck] = useState(false);

    const { executeRecaptcha } = useGoogleReCaptcha();


    const walletAddressChange = useCallback(
        (e) => {
            setIsAddressLength(false);
            if (e.target.value.trim().length <= 15) {
                setBtnDisabled(true);
                setMessage("Address should not be less than 15 characters");
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

    const walletAddressCheckChange = useCallback(
        (e) => {
            setIsAddressLength(false);
            if (e.target.value.trim().length <= 15) {
                setBtnDisabledCheck(true);
                setMessageCheck("Address should not be less than 15 characters");
                setIsAddressLength(false);
                setMessageColor("text-danger");
            } else {
                setIsAddressLength(true);
                setMessageCheck(null);
                setBtnDisabledCheck(false);
            }
            setWalletAddressCheck(e.target.value);
        },
        [walletAddressCheck]
    );

    const confirmTweet = () => {
        event.preventDefault();
        setTweetShared(true);
    }

    const confirmTweetCheck = () => {
        event.preventDefault();
        setTweetSharedCheck(true);
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

    const handleWalletCheckForm = (e) => {
        e.preventDefault();
        if (!executeRecaptcha) {
            setMessage("reCAPTCHA Error");
            setMessageColor("text-danger");
            return;
        }
        executeRecaptcha("enquiryFormSubmit").then((gReCaptchaToken) => {
            submitWalletCheckForm(gReCaptchaToken);
        });
    }

    const submitEnquiryForm = (gReCaptchaToken) => {
        setLoader(true);
        setBtnDisabled(true);
        fetch("/api/enquirytwo", {
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                walletAddressData: walletAddress,
                gRecaptchaToken: gReCaptchaToken
            }),
        })
            .then((res) => res.json())
            .then((res) => {
                setLoader(false);
                setBtnDisabled(false);
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

    const submitWalletCheckForm = (gReCaptchaToken) => {
        setLoaderCheck(true);
        setBtnDisabledCheck(true);
        fetch("/api/checkgiveaway", {
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                walletAddressData: walletAddressCheck,
                gRecaptchaToken: gReCaptchaToken
            }),
        })
            .then((res) => res.json())
            .then((res) => {
                setLoaderCheck(false);
                setBtnDisabledCheck(false);
                if (res?.status === "success") {
                    if (res?.walletstatus === 0) {
                        setMessageCheck(res?.walletstatusmessage);
                        setMessageColor("text-danger");
                    } else if (res?.walletstatus === 1) {
                        setMessageCheck(res?.walletstatusmessage);
                        setMessageColor("text-success");
                        setTweetShowCheck(true);
                        setToggleInputBoxCheck(false);
                    } else if (res?.walletstatus === 2) {
                        setMessageCheck(res?.walletstatusmessage);
                        setMessageColor("text-warning");
                    } else if (res?.walletstatus === 3) {
                        setMessageCheck(res?.walletstatusmessage);
                        setMessageColor("text-light");
                    }
                    else {
                        setMessageCheck("Please try again");
                        setMessageColor("text-danger");
                    }
                } else {
                    setMessageCheck(res?.message);
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
                                <div className="col-lg-8 mx-1 mb-5 p-4 mission-box mission-radius mission-border mx-auto">
                                    <div >
                                        <h1 className="text-center mt-3"> The Crown Giveaway</h1>
                                        <h6 className="text-center mt-5 mx-md-5"> If you &lsquo;re here, you are a NFT king or queen. We giving away worlds first batch of crowns and more. We want you to shine. Drop your polygon address make sure you join discord, telegram, tweet about your excitement, and stay active on your monaarchy grind. Please make sure you visit soon to learn who are the winners.
                                        </h6>
                                    </div>
                                    <form onSubmit={handleSubmitForm}>
                                        {toggleInputBox && <div className="inputBox">
                                            <div className="row">
                                                <div className="form-group mb-3 mt-5">
                                                    <input
                                                        onChange={walletAddressChange}
                                                        type="text"
                                                        className="form-control transparent-input-border text-end"
                                                        value={walletAddress}
                                                        placeholder="Add Your Polygon Address"
                                                    />
                                                </div>
                                            </div>


                                            <div className="row px-3 mb-4 mt-3">
                                                {!loader &&
                                                    <button className="btn btn-light  btn-lg btn-block" type="submit" disabled={btnDisabled}>
                                                        Submit
                                                    </button>
                                                }
                                                {loader &&
                                                    <button className="btn btn-light  btn-lg btn-block" type="submit" disabled={btnDisabled}>
                                                        <div className="spinner-border text-dark" role="status">
                                                            <span className="visually-hidden">Loading...</span>
                                                        </div>
                                                    </button>
                                                }
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
                                                        href="https://twitter.com/intent/tweet?text=hustled%20my%20way%20into%20%23the%20crowns%20and%20more%20#NFT%20giveaway%20at%20#polygon%20and%20#ethereum.%20The%20internet%20of%20#NFTs%20at%20%40monaarchy."
                                                        data-text="hustled my way into the crowns and more #NFT giveaway at #polygon and #ethereum. The internet of NFTs at @monaarchy."
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

                                <div className="col-lg-8 mx-1 mt-5 p-4 mission-box mission-radius mission-border mx-auto">
                                    <div >
                                        <h1 className="text-center mt-3"> Check Your Status</h1>
                                        <h6 className="text-center mt-5 mx-md-5">  Please make sure you first added your wallet address to get a chance to win the giveaway. You can come here on a weekly basis to check your status. If you won an NFT, You will be able to redeem it via an airdrop. </h6>
                                    </div>
                                    <form onSubmit={handleWalletCheckForm}>
                                        {toggleInputBoxCheck && <div className="inputBox">
                                            <div className="row">
                                                <div className="form-group mb-3 mt-5">
                                                    <input
                                                        onChange={walletAddressCheckChange}
                                                        type="text"
                                                        className="form-control transparent-input-border text-end"
                                                        value={walletAddressCheck}
                                                        placeholder="Add Your Polygon Address"
                                                    />
                                                </div>
                                            </div>


                                            <div className="row px-3 mb-4 mt-3">
                                                {!loaderCheck &&
                                                    <button className="btn btn-light  btn-lg btn-block" type="submit" disabled={btnDisabledCheck}>
                                                        Submit
                                                    </button>
                                                }
                                                {loaderCheck &&
                                                    <button className="btn btn-light  btn-lg btn-block" type="submit" disabled={btnDisabledCheck}>
                                                        <div className="spinner-border text-dark" role="status">
                                                            <span className="visually-hidden">Loading...</span>
                                                        </div>
                                                    </button>
                                                }
                                            </div>
                                        </div>
                                        }

                                        {messageCheck && <div className={`message text-center mt-5 mb-5 ${messageColor}`}>{messageCheck}</div>}



                                        {
                                            tweetShowCheck &&

                                            <div className='mt-5 me-3 row'>
                                                <div className='col-10'>
                                                    <p className="lead">Share The monaarchy Giveaway</p>
                                                </div>
                                                <div className="col-2">
                                                    <a className="twitter-button"
                                                        onClick={confirmTweetCheck}
                                                        href="https://twitter.com/intent/tweet?text=I%20just%20joined%20the%20%23crown%20giveaway.%20The%20internet%20of%20NFTs%20at%20%40monaarchy.%20"
                                                        data-text="I just joined the #crown giveaway. The internet of #NFTs at @monaarchy."
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
