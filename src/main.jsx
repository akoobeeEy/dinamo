import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "../public/tailwind.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store/index.jsx";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ThemeProvider>
            <App />
            <ToastContainer
              position="top-center"
              autoClose={2000}
              hideProgressBar={false}
              closeOnClick={true}
              pauseOnHover
              draggable
            />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
