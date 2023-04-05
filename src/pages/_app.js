// This default export is required in a new `pages/_app.js` file.
import Image from "next/image";
import Link from "next/link";
import "../styles/navbar.css";
import Sidebar from "./sidebar";
// import images from "@/assets/images";
import cartImg from "../../public/Images/cart.png"
import logoImage from '../pages/assets/images/logo.png'


export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="main">
        <div className="logoWrapper"> <Image src={logoImage} alt="My Image" width={"100%"} height={80} /></div>
        <div className="menueItemWrapper">
          <Link className="menueItem" href="/">
            Home
          </Link>
          <Link className="menueItem" href="/product/product" passHref>
            Products
          </Link>
          <Link className="menueItem" href="/about">
            About
          </Link>
          <Link className="menueItem" href="/">
            Contact Us
          </Link>
        </div>
        <div className="cartWrapper">
          <Image
            src={cartImg}
            alt="cart"
            width={40}
            height={40}
            quality={100}
          />
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <Sidebar />
       <div style={{width:"80%", height:"88vh", overflow:"scroll"}}> <Component {...pageProps} /> </div>
      </div>
    </>
  );
}
