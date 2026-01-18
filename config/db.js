const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = process.env.MONGODB_URI || "mongodb+srv://ahmedabrarzayad_db_user:ZaYAD2017@cluster0.ccvlctc.mongodb.net/?appName=Cluster0";

// Create a new MongoClient
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let db;

async function connectDB() {
  try {
    // Connect the client
    await client.connect();

    // Ping the server to confirm connection
    await client.db("admin").command({ ping: 1 });
    console.log("Successfully connected to MongoDB!");

    // Use your database name here
    db = client.db("ai-prompts"); 
  } catch (err) {
    console.error("MongoDB connection failed:", err);
    // Don't exit in serverless - just log the error
    throw err;
  }
}

// Getter to access the db in routes
function getDB() {
  if (!db) {
    throw new Error("Database not initialized. Call connectDB first.");
  }
  return db;
}

module.exports = { connectDB, getDB, client };
