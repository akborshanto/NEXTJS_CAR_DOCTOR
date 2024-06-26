import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./component/shared/Navbar";
import Footer from "./component/shared/Footer";
import AuthProvider from "./provider/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Car Doctor Pro",
  description: "Car repairing WorkShop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-white">
    <AuthProvider>
    <body className={`${inter.className} bg-white text-black`} >
      
    <Navbar></Navbar>
    <div  className=" container mx-auto">      {children}</div>

    
    <Footer></Footer>
    
    </body>
    </AuthProvider>
   
    </html>
  );
}
