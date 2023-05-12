import "reflect-metadata"
import "express-async-errors"
import express from "express"
import { userRouter } from "./routes/user.routes"
import { loginRouter } from "./routes/loginUser.routes"
import { addressRouter } from "./routes/address.routes"



const app = express()
app.use(express.json())
app.use("/users", userRouter)
app.use("/login", loginRouter)
app.use("/address", addressRouter)

export default app