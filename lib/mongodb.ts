// lib/mongodb.ts
import { MongoClient } from "mongodb";
import { attachDatabasePool } from "@vercel/functions";

const uri = process.env.MONGODB_URI as string;
const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  // Prevent multiple connections during hot reloads in dev
  if (!(global as any)._mongoClient) {
    (global as any)._mongoClient = new MongoClient(uri, options);
  }
  client = (global as any)._mongoClient;
  clientPromise = client.connect();
} else {
  // Production: attach client to Vercel’s pool
  client = new MongoClient(uri, options);
  attachDatabasePool(client);
  clientPromise = client.connect();
}

export default clientPromise;
