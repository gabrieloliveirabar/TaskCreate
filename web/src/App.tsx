import { Button } from "./components/Button";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import "./styles/global.css";
import { MainRoutes } from "./routes/mainRoutes.routes";
import { UserContext, UserProvider } from "./context/UserContext";

function App() {
  return (
    <div className="h-screen">
      <UserProvider>
        <Router>
          <MainRoutes />
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
