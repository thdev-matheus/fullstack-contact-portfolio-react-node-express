import ReactDOM from "react-dom/client";
import { Flip, ToastContainer } from "react-toastify";
import { App } from "./App";
import { GlobalStyle } from "./styles/global";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <ToastContainer
      position="bottom-left"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      transition={Flip}
    />
    <GlobalStyle />
    <App />
  </>
);
