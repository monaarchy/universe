function PoolInformation() {
    return (
        <div className="container-fluid ">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12  mb-5">
                        <div className="row  d-flex justify-content-between d-grid ">
                            <div className="col-lg-5 mb-1 p-4  mission-box mission-radius mission-border">
                                <h3 className="mb-3">Pool Information</h3>
                                <table className="table">

                                    <tbody>
                                        <tr>
                                            <th scope="row"><p className="lathe-special-text">TOKEN DISTRIBUTION</p></th>
                                            <td><b>Date UTC</b></td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><p className="lathe-special-text">MIN. ALLOCATION</p></th>
                                            <td><b>0.01 USDC</b></td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><p className="lathe-special-text">MAX. ALLOCATION</p></th>
                                            <td><b>TBA</b></td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><p className="lathe-special-text">TOKEN PRICE</p></th>
                                            <td><b>TBA</b></td>
                                        </tr>
                                        <tr style={{borderBottom:'solid thin #1a1a1a'}}>
                                            <th scope="row"><p className="lathe-special-text">ACCESS TYPE</p></th>
                                            <td><b>Public</b></td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                            <div className="col-lg-5 p-4 mt-1  mission-box mission-radius mission-border">
                                <h3 className="mb-3">Token Information</h3>
                                <table className="table">

                                    <tbody>
                                        <tr>
                                            <th scope="row"><p className="lathe-special-text">NAME</p></th>
                                            <td><b>NFT</b></td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><p className="lathe-special-text">SYMBOL</p></th>
                                            <td><b>NFT</b></td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><p className="lathe-special-text">DECIMALS</p></th>
                                            <td><b>18</b></td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><p className="lathe-special-text">ADDRESS</p></th>
                                            <td><b>TBA</b></td>
                                        </tr>
                                        <tr style={{borderBottom: 'solid thin #1a1a1a'}}>
                                            <th scope="row"><p className="lathe-special-text">TOTAL SUPPLY</p></th>
                                            <td><b>0</b></td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PoolInformation;