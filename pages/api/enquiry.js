const handler = async (req, res) => {
    const baseUrl = "https://yonetwork.org";

    if (req.method === "POST") {
        try {
            let reCaptchaResponse = await fetch("https://www.google.com/recaptcha/api/siteverify", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: `secret=6LeGnLYhAAAAAO3-lE-steuZdCo6hV9aBnW9fDM7&response=${req.body.gRecaptchaToken}`,
            });
            let reCaptchaRes = await reCaptchaResponse.json();
            if (reCaptchaRes?.score > 0.5) {
                let response = await fetch(baseUrl + '/wallet.php?address=' + req.body.walletAddress);
                let walletstatus = await response.json();
                res.status(200).json({
                    status: "success",
                    walletstatus: walletstatus[0].status,
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