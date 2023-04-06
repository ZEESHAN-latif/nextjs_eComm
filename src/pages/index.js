import Image from "next/image";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import Home from "./home";
// import styles from './page.module.css'

const inter = Inter({ subsets: ["latin"] });

export default function Index() {
  return (
    <div>
      <Home />
    </div>
  );
}
