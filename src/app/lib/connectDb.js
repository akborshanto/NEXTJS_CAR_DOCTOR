import { MongoClient, ServerApiVersion } from "mongodb";

let db;
export const connetDB = async () => {
  if (db) return db;
  try {
    const uri = "mongodb+srv://car-doctor-next:F9MB5G2FzLO4URiR@cluster1.phei2xm.mongodb.net/?appName=Cluster1";

    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });

    /* db collection */
    db = client.db("car-doctor-next");
    return db;
  } catch (err) {
    console.log(err);
  }
};
