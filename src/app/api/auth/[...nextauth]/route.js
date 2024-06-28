import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { Julee } from "next/font/google";
import bcrypt from "bcrypt";
import { connetDB } from "@/app/lib/connectDb";
// import GitHubProvider from "next-auth/providers/github";
// import GoogleProvider from "next-auth/providers/google";
const handaler = NextAuth({
  //auth option
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24 * 60},
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
        console.log(credentails,"CREDENTIAL")
        if (!email || !password) {
          return null;
        }

        /* db */
        const db = await connetDB();
        const currentUser = await db.collection("users").findOne({ email });
        if (!currentUser) {
          return null;
        }
        const passwordMatched = bcrypt.compareSync(
          password,
          currentUser.password
        ); // true

        if (!passwordMatched) {
          return null;
        }
        return currentUser;
      },
    }),
//google porvider
// GoogleProvider({
//     clientId: process.env.GOOGLE_CLIENT_ID,
//     clientSecret: process.env.GOOGLE_CLIENT_SECRET
//   }),
// //github provider
// GitHubProvider({
//     clientId: process.env.GITHUB_ID,
//     clientSecret: process.env.GITHUB_SECRET
//   })


  ],
  callbacks: {},
  pages: {
    //signIN PAGE
    signIn: "/login",
  },
});
export { handaler as GET, handaler as POST };
