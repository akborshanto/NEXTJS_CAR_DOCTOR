
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { Julee } from "next/font/google";
import { bcrypt } from 'bcrypt';
import { connetDB } from "@/app/lib/connectDb";
const handaler = NextAuth({
  //auth option
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      //email
      credentials: {
        email: {},
        password: {},

        //
      },

      //authorez

      async authorize(credentails) {
        const { email, password } = credentails;
        if (!email || password) {
          return null;
        }

/* db */
const db=await connetDB()
const currentUser=await db.collection('user').findOne({email})
if(!currentUser){
    return null
}
const passwordMatched=bcrypt.compareSync(password,currentUser.password); // true

if(!passwordMatched){
    return null
}
return currentUser
      },
    }),
  ],
  callbacks: {},
  pages: {
    //signIN PAGE
    signIn: "/login",
  },
});
export { handaler as GET, handaler as POST };
