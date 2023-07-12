import "reflect-metadata"
import "express-async-errors"
import express from "express"
import { userRouter } from "./routes/user.routes"
import { loginRouter } from "./routes/loginUser.routes"
import { addressRouter } from "./routes/address.routes"
import { taskRouter } from "./routes/task.routes"

import cors from "cors";





const app = express()
app.use(cors({
    origin: 'http://127.0.0.1:5173' // Permitir apenas solicitações do http://example.com
  }));
app.use(express.json())
app.use("/users", userRouter)
app.use("/login", loginRouter)
app.use("/address", addressRouter)
app.use("/tasks", taskRouter)

export default app