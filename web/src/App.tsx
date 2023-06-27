import { Button } from "./components/button";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import "./styles/global.css";
import { MainRoutes } from "./routes/mainRoutes.routes";

function App() {
  return (
    <div className="h-screen">
      <Router>
        <MainRoutes />
      </Router>
    </div>
  );
}

export default App;
