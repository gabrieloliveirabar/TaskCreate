import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import "./styles/global.css";
import { MainRoutes } from "./routes/mainRoutes.routes";
import { UserProvider } from "./context/UserContext";
import { TaskProvider } from "./context/TaskContext";

function App() {
  return (
    <div className="h-screen">
      <UserProvider>
        <TaskProvider>
          <Router>
            <MainRoutes />
          </Router>
        </TaskProvider>
      </UserProvider>
    </div>
  );
}

export default App;
