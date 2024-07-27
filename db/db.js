const mongoose = require("mongoose");

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI).then(() => {
            console.log("DB Connect");
        })
    }
    catch (err) {
        console.log("Failed to Connect", err);
    }
}

module.exports = dbConnect;
