const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));

app.post("/ussd", (req, res) => {
    const { text } = req.body;

    let response = "";

    if (text === "") {
        response = "CON SummitLink USSD\n1. My Account\n2. Buy Data\n3. Support";
    }

    else if (text === "1") {
        response = "CON My Account\n1. Check Balance\n2. Wallet Info";
    }

    else if (text === "1*1") {
        response = "END Your balance is ₦500";
    }

    else if (text === "1*2") {
        response = "END Wallet active";
    }

    else if (text === "2") {
        response = "CON Buy Data\n1. 1GB - ₦300\n2. 2GB - ₦500";
    }

    else if (text === "2*1") {
        response = "END You bought 1GB for ₦300";
    }

    else if (text === "2*2") {
        response = "END You bought 2GB for ₦500";
    }

    else if (text === "3") {
        response = "END Support: contact@summitlink.ng";
    }

    else {
        response = "END Invalid input";
    }

    res.set("Content-Type", "text/plain");
    res.send(response);
});
    const { text, sessionId, serviceCode, phoneNumber } = req.body;
app.get("/", (req, res) => {
    res.send("USSD service is running 🚀");
});
    let response = "";

    // MAIN MENU
    if (text === "") {
        response = "CON SummitLink USSD\n1. My Account\n2. Buy Data\n3. Support";
    }

    // MY ACCOUNT
    else if (text === "1") {
        response = "CON My Account\n1. Check Balance\n2. Wallet Info";
    }
    else if (text === "1*1") {
        response = "END Your balance is ₦500";
    }
    else if (text === "1*2") {
        response = "END Wallet: Active\nLevel: Basic User";
    }

    // BUY DATA FLOW (more realistic structure)
    else if (text === "2") {
        response = "CON Buy Data\n1. 1GB - ₦300\n2. 2GB - ₦500\n3. 5GB - ₦1200";
    }
    else if (text === "2*1") {
        response = "END You purchased 1GB for ₦300";
    }
    else if (text === "2*2") {
        response = "END You purchased 2GB for ₦500";
    }
    else if (text === "2*3") {
        response = "END You purchased 5GB for ₦1200";
    }

    // SUPPORT
    else if (text === "3") {
        response = "END Contact: support@summitlink.ng";
    }

    // DEFAULT ERROR
    else {
        response = "END Invalid input. Try again.";
    }

    res.set("Content-Type", "text/plain");
    res.send(response);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("USSD server running on port " + PORT));
