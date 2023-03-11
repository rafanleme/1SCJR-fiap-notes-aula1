import { AuthProvider } from "./context/authContext";
import { GlobalStyles } from "./GlobalStyles";
import { AppRoutes } from "./routes";

function App() {

  return (
    <AuthProvider>
      <GlobalStyles />
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
