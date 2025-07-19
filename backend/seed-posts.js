import mongoose from "mongoose";
import dotenv from "dotenv";
import Post from "./models/post.model.js";
import fs from "fs";

dotenv.config();

const MONGO_URI = process.env.MONGO;

// Read and parse the JSON file
const posts = JSON.parse(fs.readFileSync("./sample-posts.json", "utf-8"));

mongoose.connect(MONGO_URI)
  .then(async () => {
    await Post.insertMany(posts);
    console.log("Sample posts inserted!");
    process.exit();
  })
  .catch(err => {
    console.error("Error inserting posts:", err);
    process.exit(1);
  });