import Script from 'next/script'
import $ from 'jquery'
import { useEffect } from 'react';

function MegaFIScripts() {

    useEffect(() => {
        window.$ = window.jQuery = require('jquery');
        $(document).ready(function () {
            $(".airdrop").on('click', function () {
                window.open("https://megafi.org/airdrop2.html");
            })
        })
    })

    return (
        <div>
            <Script src="https://code.jquery.com/jquery-1.12.4.min.js" integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ=" crossorigin="anonymous"></Script>
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></Script>
        </div>
    );
}

export default MegaFIScripts