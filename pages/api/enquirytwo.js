const handler = async (req, res) => {
    const baseUrl = "https://yonetwork.org";
    const secretKey = "6LdwpLUhAAAAAHCU1s8ETTIrE__Vz1yB1PegElSd"

    if (req.method === "POST") {
        try {
            const reCaptchaResponse = await fetch("https://www.google.com/recaptcha/api/siteverify", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: `secret=${secretKey}&response=${req.body.gRecaptchaToken}`,
            });
            let reCaptchaRes = await reCaptchaResponse.json();
            if (reCaptchaRes?.score > 0.5) {
                const response = await fetch(baseUrl + '/save_giveaway_wallet.php?address=' + req.body.walletAddressData);
               
                const walletStatusResponse = await response.json();
                res.status(200).json({
                    status: "success",
                    walletstatusdata: walletStatusResponse,
                    walletstatus: walletStatusResponse[0].status,
                    message: "Enquiry submitted successfully",
                });
            } else {
                res.status(200).json({
                    status: "failure",
                    message: "Google ReCaptcha Failure",
                });
            }
        } catch (err) {
            res.status(405).json({
                status: "failure",
                message: "Please try again",
            });
        }
    } else {
        res.status(405);
        res.end();
    }
};

export default handler;