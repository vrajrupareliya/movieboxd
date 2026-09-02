import mongoose from "mongoose";
import dns from "dns";
import { DB_NAME } from "./constans.js";

// Ensure reliable SRV DNS resolution on Windows/Node.js
try {
  dns.setServers(['8.8.8.8', '1.1.1.1']);
} catch (e) {
  console.warn("Could not set custom DNS servers:", e.message);
}

const connectdb = async () => {
  try {
    const rawUrl = (process.env.MONGODB_URL || "").trim().replace(/\/$/, "");
    const connString = rawUrl.includes(DB_NAME) ? rawUrl : `${rawUrl}/${DB_NAME}`;
    const ConnectionInstance = await mongoose.connect(connString);
    console.log(`database connected!! DB HOST:${ConnectionInstance.connection.host}`);
  } catch (error) {
    console.log("\n mongodb connection error", error);
    process.exit(1);
  }
};

export default connectdb;