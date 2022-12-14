import Script from 'next/script';
import Link from 'next/link';

function Footer() {
    return (
        <div className="container-fluid mission-box">
            <div className="container">
                <div className="row p-5 ">
                    <div className="col-lg-4 mb-4">
                        <img
                         src="/assets/images/crown2.png"
                         className="Image-fluid"
                         alt="Monaarchy"
                         width="80"
                         height="80"
                        />
                        <div className="row mt-3 mt-md-5">
                            <p>
                                Borrowing And Lending Insurance{" "}
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-2 mb-4">
                        <h5>Contact</h5>
                        {/* <p>
                            <a href="#"> Docs</a>
                        </p> */}
                        <p className="mt-4">
                            <a href="#" >@monaaarchy</a>
                        </p>
                    </div>
                    <div className="col-lg-2 mb-4">
                        <h5>Community</h5>
                        <p>
                            {/* <a href="#"> Help Center</a> */}
                        </p>
                        <p>
                            {/* <a href="#"> Careers</a> */}
                        </p>
                        <p className="mt-4">
                            <a href="https://medium.com/@monaarchy" target="_blank" rel="noopener noreferrer">  Blog</a>
                        </p>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <h5>Follow us on</h5>
                        <div className="row mt-2">
                            <div className="col-lg-4">
                                <div className="icon p-2 mt-3">
                                    <Link href="https://t.me/+LdFqD-mMu082ZjYx/">
                                        <a className="nav-link" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-telegram-plane" />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="icon p-2 mt-3">
                                    <Link href="https://twitter.com/monaarchy">
                                        <a className="nav-link" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-twitter" />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <p className="icon p-2 mt-3">
                                    <Link href="https://www.youtube.com/@monaarchy">
                                        <a className="nav-link" target="_blank" rel="noopener noreferrer">

                                        <i className="fab fa-youtube" />
                                    </a>
                                    </Link>


                                </p>
                            </div>
                        </div>
                        <div className="row">
                            {/* <div className="col-lg-4">
                                <p className="icon p-2">
                                    <a href="#">
                                        <i className="fab fa-instagram" />
                                    </a>
                                </p>
                            </div> */}
                            <div className="col-lg-4">
                                <div className="icon p-2 mt-3">
                                    <Link href="https://www.tiktok.com/@nftmonaarchy?_t=8XGpzfCV3FL&_r=1">
                                        <a className="nav-link" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-tiktok" />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></Script>
            <Script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></Script>
        </div>
    );
}

export default Footer;