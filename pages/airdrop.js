import Navbar from '../components/navbar'
import Footer from '../components/footer';
import { useRouter } from 'next/router'
import { useState, useCallback } from 'react';
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import recaptcha from '../data/recaptcha';
import baseUrl from '../data/url';


function Airdrop() {
    const router = useRouter();

    const [walletAddress, setWalletAddress] = useState("");
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState("");
    const [messageColor, setMessageColor] = useState("text-white");
    const [tweetShared, setTweetShared] = useState(false);
    const [tweetShow, setTweetShow] = useState(false);
    const [isAddressLength, setIsAddressLength] = useState(false);
    const [toggleInputBox, setToggleInputBox] = useState(true);
    const [loader, setLoader] = useState(false);

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
        setLoader(true);
        setBtnDisabled(true);
        fetch("/api/enquiry", {
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



    return (
        <div className="Airdrop">
            <Navbar dashboard={false} connectwallet={true} />
            <hr />
            <div className="container-fluid ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12  mb-5 p-5">
                            <div className="row d-flex ">
                                <div className="col-lg-8 p-4 mission-box mission-radius mission-border mx-auto">
                                    <div >

                                        <h1 className="text-center"> $megaFi Airdrop</h1>
                                        <h6 className="text-center mt-5 mx-md-5">Welcome to the airdrop! Please share your polygon address. Join our Discord, follow our twitter, and tweet to be part of the drop. We look forward for your portfolio to go mega!
                                        </h6>

                                    </div>
                                    <form onSubmit={handleSubmitForm}>
                                        {toggleInputBox && <div className="inputBox">
                                            <div className="row">
                                                <div className=" text-center form-group mb-3 mt-5">
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
                                                    <p className="lead">Share The $megaFi Airdrop</p>
                                                </div>
                                                <div className="col-2">
                                                    <a className="twitter-button"
                                                        onClick={confirmTweet}
                                                        href="https://twitter.com/intent/tweet?text=I%20just%20joined%20the%20%23megafiairdrop.%20The%20internet%20of%20#NFTs%20at%20%40monaarchy."
                                                        data-text="I just joined the #megafiairdrop. The internet of #NFTs at @monaarchy."
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

export default Airdrop;
