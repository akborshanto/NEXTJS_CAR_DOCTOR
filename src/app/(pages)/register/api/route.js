
import { connetDB } from "@/app/lib/connectDb";
import bcrypt from "bcrypt";
export const POST = async (request) => {
  console.log(request.body);
  const newUser = await request.json();

  try {
    const db = await connetDB();
    console.log("dbconnect");
    const userCOllection = db.collection("users");
    const exist = await userCOllection.findOne({ email: newUser.email });

    if (exist) {
      return Response.json({ message: "USER EXISXT" }, { status: 200 });
    }
    const hashPasswo = bcrypt.hashSync(newUser.password, 14);
    const result = await userCOllection.insertOne({...newUser,password:
        hashPasswo});
    return Response.json({ message: "user creatted" });
  } catch (err) {
    console.log(err);
    return Response.json({ message: "SOMETHING RONG", err }, { status: 500 });
  }
};
