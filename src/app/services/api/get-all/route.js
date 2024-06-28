import { connetDB } from "@/app/lib/connectDb";
export const GET = async () => {
  const db = await connetDB();

  const servicesCollection = db.collection("services");

  try {
    const result = await servicesCollection.find().toArray();
console.log(result)
    return Response.json({result});
  } catch (err) {
    console.log(err);
  }
};
