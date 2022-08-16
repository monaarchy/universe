import ConnectWalletButton from './_connectwallet';

function SwapInformation() {
    return (
        <div 
        className="container-fluid ">
             
            <div className="container">
                <div className="row">
                    <div className="col-lg-12  mb-5">
                        <div className="row  d-flex justify-content-between d-grid ">
                            <div className="col-lg-5 mb-1 text-center  mission-box mission-radius mission-border">
                                <div className="row"><p className="p-3"><b>Please connect your wallet to proceed</b></p></div>
                                <div className="row mb-3">
                                    <img src="/assets/images/Group 36690.png" className="mx-auto d-block lathe-images" />
                                </div>
                                <ConnectWalletButton />
                            </div>
                            <div className="col-lg-5 p-4 mt-1  mission-box mission-radius mission-border">
                                <p><b>Requirements:</b></p>
                                <ol>
                                

                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default SwapInformation;