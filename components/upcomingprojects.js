import { useRouter } from 'next/router'

function UpcomingProjects() {
    const router = useRouter();
    return (
        <div className='row'>
        <div className="col-lg-5 col-12 p-4 mt-4 mission-box mission-radius mission-border mx-auto me-md-1" style={{ cursor: "pointer" }} onClick={() => router.push('/#')}>
            <div className="row">
                <h3 className="text-center">Upcoming NFT</h3>
            </div>
            <hr />
            <div className="row mt-4">
                <div className="col-12 mt-2">
                    <img
                        src="/assets/images/NFT-1.jpg"
                        className="lathe-images-medium mx-auto d-block"
                    />
                </div>
                <div className="col-12 ms-lg-2 mt-5">
                    <div className="row">
                        <h4 className='text-center lh-base'>
                            <b>mBORED APES</b>
                        </h4>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <p>
                Mega Bored Apes synthetics NFTs grant you access to generate passive rewards through purchasing and staking synthetic tokens.
Mega Bored Apes is the synthetic representation of the Bored Ape Yacht club NFT collection. Bored Ape Yacht Club NFTs are a collection of 10,000 cartoon apes with different attributes involving fur colour, facial expressions, and accessories.
Mega Bored Apes represent growth, strong community and wealth generation.




                </p>
            </div>
            <hr />
            <div className="row">
                <table className="table">
                    <tbody>
                        <tr>
                            <th scope="row">
                                <p className="lathe-special-text">NAME</p>
                            </th>
                            <td>
                                <b>mBORED APES</b>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                <p className="lathe-special-text">SYMBOL</p>
                            </th>
                            <td>
                                <b>mAPE</b>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                <p className="lathe-special-text">Price</p>
                            </th>
                            <td>
                                <b>$100 matic</b>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                <p className="lathe-special-text">FEE</p>
                            </th>
                            <td>
                                <b>1% megafi</b>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                <p className="lathe-special-text">ADDRESS</p>
                            </th>
                            <td>
                                <b>TBA</b>
                            </td>
                        </tr>
                        <tr style={{ borderBottom: "solid thin #1a1a1a" }}>
                            <th scope="row">
                                <p className="lathe-special-text">TOTAL SUPPLY</p>
                            </th>
                            <td>
                                <b>5,000</b>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className="col-lg-5 p-4 mt-4 mission-box mission-radius mission-border mx-auto" style={{ cursor: "pointer" }} onClick={() => router.push('#')}>
            <div className="row">
                <h3 className="text-center">Upcoming NFT</h3>
            </div>
            <hr />
            <div className="row mt-4">
                <div className="col-12 mt-2">
                    <img
                        src="/assets/images/NFT.jpg"
                        className="lathe-images-medium mx-auto d-block"
                    />
                </div>
                <div className="col-12 ms-2 mt-5">
                    <div className="row">
                        <h4 className='text-center lh-base'>
                            <b> mTech Mahindra</b>
                        </h4>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <p>
                Mega-Tech Mahindra synthetic NFTs grant you access to generate passive rewards by purchasing and staking synthetic tokens.
Mega-Tech Mahindra is the synthetic representation of the Indian Multinational information technology service and consulting cooperation.
Tech Mahindra, a US$5.2 billion company with over 145,000 employees, represents longevity, expertise, and wealth.

                </p>
            </div>
            <hr />
            <div className="row">
                <table className="table">
                    <tbody>
                        <tr>
                            <th scope="row">
                                <p className="lathe-special-text">NAME</p>
                            </th>
                            <td>
                                <b>mTech Mahindra</b>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                <p className="lathe-special-text">SYMBOL</p>
                            </th>
                            <td>
                                <b>mMehindra</b>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                <p className="lathe-special-text">Price</p>
                            </th>
                            <td>
                                <b>$100 Matic</b>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                <p className="lathe-special-text">FEE</p>
                            </th>
                            <td>
                                <b>1% megafi</b>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                <p className="lathe-special-text">ADDRESS</p>
                            </th>
                            <td>
                                <b>TBA</b>
                            </td>
                        </tr>
                        <tr style={{ borderBottom: "solid thin #1a1a1a" }}>
                            <th scope="row">
                                <p className="lathe-special-text">TOTAL SUPPLY</p>
                            </th>
                            <td>
                                <b>5,000</b>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div     >
              
            </div>
            
           
            <div
               
          
            />
            
               
            </div>
      
       
    );
}

export default UpcomingProjects;
