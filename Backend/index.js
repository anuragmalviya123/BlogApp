import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-route.js";

const app = express();
app.use(express.json());

app.use('/api/v1/user', router);

const uri = 'mongodb://localhost:27017/blogapp';

// Connect to MongoDB
const connectDB = async (uri) => {
    try {
        const conn = await mongoose.connect(uri, { dbName: "blogapp" });
        console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    } catch (err) {
        console.error(`❌ Error connecting to MongoDB: ${err.message}`);
        process.exit(1); 
    }
};

connectDB(uri);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
