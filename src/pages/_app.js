// This default export is required in a new `pages/_app.js` file.
import Image from "next/image";
import Link from "next/link";
import "../styles/navbar.css";
import Sidebar from "./sidebar";
import NavBar from "./navBar";
import { Provider } from "react-redux";
import { store } from "@/store";

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
    <NavBar />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ width: "80%", height: "88vh", overflow: "scroll" }}>
          {" "}
          <Component {...pageProps} />{" "}
        </div>
      </div>
      </Provider>
  );
}
