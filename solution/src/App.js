import AppRouter from "./router/Router";
import AuthContextProvider from "./context/AuthContext";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <AuthContextProvider>
        <AppRouter />
        <ToastContainer />
      </AuthContextProvider>
    </>
  );
}

export default App;
