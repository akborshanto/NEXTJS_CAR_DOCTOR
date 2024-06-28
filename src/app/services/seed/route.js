import { connetDB } from "@/app/lib/connectDb";
import { services } from "@/app/lib/services";
export const GET=async ()=>{


    const db=await connetDB()



const servicesColelction= db.collection('services')


try{
    await servicesColelction.deleteMany()

const resp=await servicesColelction.insertMany(services)
return Response.json({message:"seed succefylly"})


}catch(err){
    console.log(err)
}

}