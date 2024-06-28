import { connetDB } from "@/app/lib/connectDb";
export const GET = async () => {
  const db = await connetDB();

  const servicesCollection = db.collection("services");

  try {
    const result = await servicesCollection.findOne();

    return Response.json({result});
  } catch (err) {
    console.log(err);
  }
};
