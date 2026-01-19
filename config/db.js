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
let isConnecting = false;
let connectionPromise = null;

async function connectDB() {
  // Return existing connection
  if (db) {
    return db;
  }

  // Wait for existing connection attempt
  if (isConnecting && connectionPromise) {
    return connectionPromise;
  }

  isConnecting = true;
  connectionPromise = (async () => {
    try {
      // Connect the client
      await client.connect();

      // Ping the server to confirm connection
      await client.db("admin").command({ ping: 1 });
      console.log("Successfully connected to MongoDB!");

      // Use your database name here
      db = client.db("ai-prompts");
      isConnecting = false;
      return db;
    } catch (err) {
      isConnecting = false;
      console.error("MongoDB connection failed:", err);
      // Don't exit in serverless - just log the error
      throw err;
    }
  })();

  return connectionPromise;
}

// Getter to access the db in routes - with auto-connect for serverless
async function getDB() {
  if (!db) {
    await connectDB();
  }
  return db;
}

module.exports = { connectDB, getDB, client };
