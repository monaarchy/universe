import Footer from '../components/footer'
import Navbar from '../components/navbar'

import { useRouter } from 'next/router'



function Mars() {
    const router = useRouter()
    return (
        <div className="Venture">
            <Navbar dashboard={false} connectwallet={true} />
            <hr />
            <div className="container-fluid ">
                <div className="container">
                    <div className="row">
                        <a style={{ cursor: "pointer" }} onClick={() => router.back()}><i className="fas fa-arrow-left"></i>  Back</a>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 mission-box mission-radius mission-border mt-5 mb-5 p-5">
                            <div className="row">
                                <div className="col-lg-3">
                                    {/* <img src="/assets/images/Group 36697.png" className="Image-fluid" /> */}
                                </div>
                                <div className="col-lg-9">
                                <h2><b>Rainbows</b></h2>
                                    <p className="mt-5">
                                        <a className="icon p-2 mx-1" href="https://t.me/+LdFqD-mMu082ZjYx" target="_blank" rel="noopener noreferrer"><i className="fab fa-telegram-plane"></i></a>
                                        <a className="icon p-2 mx-1" href="https://twitter.com/megafiprotocol" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                                        <a className="icon p-2 mx-1" href="https://www.youtube.com/channel/UCcPcWN4irqZDgSpj9fJkBUg" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
                                        <a className="icon p-2 mx-1" href="#"><i className="fab fa-instagram" target="_blank" rel="noopener noreferrer"></i></a>
                                        <a className="icon p-2 mx-1" href="https://www.tiktok.com/t/ZTdn66sdn/" target="_blank" rel="noopener noreferrer"><i className="fab fa-tiktok"></i></a>
                                    </p>
                                </div>
                            </div>
                            <div className="row"><p className="mt-5">
                                
                            Mega-Tech Mahindra synthetic NFTs grant you access to generate passive rewards by purchasing and staking synthetic tokens.
Mega-Tech Mahindra is the synthetic representation of the Indian Multinational information technology service and consulting cooperation.
Tech Mahindra, a US$5.2 billion company with over 145,000 employees, represents longevity, expertise, and wealth.


</p></div>
                            <div className="row"><a className="mt-5" href="#https://en.wikipedia.org/wiki/Tech_Mahindra"  target="_blank" rel="noopener noreferrer">wikipedia <i className="fas fa-chevron-right"></i><i className="fas fa-chevron-right"></i><i className="fas fa-chevron-right"></i></a></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 mission-box mission-radius mission-border mb-5 p-5">
                            <div className="row">
                                <div className="col-lg-3">
                                    
                                </div>
                                <div className="col-lg-3">
                                    
                                </div>
                                <div className="col-lg-3">
                                    <div className="row"><p className="text-center">1 x USDC = </p></div>
                                    <div className="row"><h2 className="text-center">1.247 NFT</h2></div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="row"><p className="text-center">Completed</p></div>
                                    <div className="row"><h2 className="text-center">128.30%</h2></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 mission-box mission-radius mission-border mb-5 p-5">
                            <div className="row"><p><b>Total Raised</b></p><h1>0 USDC</h1></div>
                            <div className="row">
                                <div className="col"><p className="text-left"><b>Progress </b> 0%</p></div>
                                <div className="col"><p className="text-end"><b>0/0 NFT</b></p></div>
                            </div>
                            <div className="row">
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: '0%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
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

export default Mars;