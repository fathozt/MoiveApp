import AppRouter from "./router/Router";
import AuthContextProvider from "./context/AuthContext";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <AppRouter />
        <ToastContainer />
      </AuthContextProvider>
    </div>
  );
}

export default App;
