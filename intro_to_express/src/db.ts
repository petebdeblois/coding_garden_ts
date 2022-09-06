import { MongoClient } from 'mongodb';

const {
  MONGO_URI = 'mongodb+srv://root:root@cluster0.jyytd.mongodb.net/?retryWrites=true&w=majority',
} = process.env;

export const client = new MongoClient(MONGO_URI);
export const db = client.db();
