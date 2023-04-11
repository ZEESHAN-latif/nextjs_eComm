import React from "react";
import "../styles/navbar.css";
import Sidebar from "./sidebar";
import NavBar from "./navBar";
import { Provider } from "react-redux";
import { store } from "@/store";
import '../styles/main.scss';

// eslint-disable-next-line react/prop-types
export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
    <NavBar />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ width: "80%", height: "92vh", overflow: "scroll" }}>
          {" "}
          <Component {...pageProps} />{" "}
        </div>
      </div>
      </Provider>
  );
}
