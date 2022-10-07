import { BrowserRouter } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalStyle } from "./assets/styles/global";

import { Router } from "./routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
      <ToastContainer autoClose={8000} position={toast.POSITION.BOTTOM_RIGHT} />
    </>
  );
}

export default App;
