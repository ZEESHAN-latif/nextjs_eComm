import "../styles/navbar.css";
import Sidebar from "./sidebar";
import NavBar from "./navBar";
import { Provider } from "react-redux";
import { store } from "@/store";
import '../styles/main.scss';

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
