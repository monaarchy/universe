import Footer from '../components/footer';
import Navbar from '../components/navbar';
import UpcomingProjects from '../components/upcomingprojects';
import { useRouter } from 'next/router'


function NFT() {
    const router = useRouter();
    return (
        <div className="Swap">
            <Navbar dashboard={false} connectwallet={true} />
            <hr />
            <div className="container-fluid ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12  mb-5 p-5">
                            <div className="row d-flex justify-content-between d-grid">
                                <UpcomingProjects />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default NFT;