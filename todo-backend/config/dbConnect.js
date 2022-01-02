const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    const connected = await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log(`MongoDB connected successfully`);
  } catch (error) {
    console.log("====================================");
    console.log("Error", error.message);
    console.log("====================================");
  }
};

module.exports = { dbConnect };

// todo