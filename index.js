const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));

app.post("/ussd", (req, res) => {
    const { text } = req.body;

    let response = "";

    if (text === "") {
        response = "CON Welcome\n1. Check Balance\n2. Buy Data";
    } else if (text === "1") {
        response = "END Balance: ₦500";
    } else {
        response = "END Invalid option";
    }

    res.set("Content-Type", "text/plain");
    res.send(response);
});

app.listen(3000);
