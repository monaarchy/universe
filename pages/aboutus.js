import Navbar from '../components/navbar'

import { useRouter } from 'next/router'
import Footer from '../components/footer';


function AboutUS() {
    const router = useRouter()
    return (
        <div className="AboutUS">
            <Navbar dashboard={false} connectwallet={true} />
            <hr />
            <div className="container-fluid ">
                <div className="container">
                    <div className="row">
                        <a style={{ cursor: "pointer" }} onClick={() => router.back()}><i className="fas fa-arrow-left"></i>  Back</a>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 mission-box mission-radius mission-border mt-5 mb-5 p-5">
                            <div className="row"><p className="mt-5">Once upon a time, after the big bang! 
                            The world saw the steady rise of brilliant minds that created all forms of tangible and intangible materials from nothing. This set of individuals was called creatives 
                            because of the excellence of their imagination. Notwithstanding their ability to birth new ideas, they were exploited for everything they ever created! 
                            The blockchain brought about a revolution, providing an opportunity for all creatives to benefit from their ideas. 
                            Nonetheless, there has continued to be an imbalance, 
                            and unfair distribution of attention as lots of projects barely saw daylight. In solving this problem for existing and 
                            prospective NFT and defi projects, Megafi, the internet of NFTs, builds value by developing the needed Utility to help projects thrive.</p></div>
                            <div className="row"><a className="mt-5" target="_blank" rel="noopener noreferrer" href="https://megafiprotocol.github.io/docs/">Learn More <i className="fas fa-chevron-right"></i><i className="fas fa-chevron-right"></i><i className="fas fa-chevron-right"></i></a></div>
                        </div>
                        <Footer/>
                    </div>
                </div>
            </div>

                                </div>
                          
          
     
    );
}

export default AboutUS;