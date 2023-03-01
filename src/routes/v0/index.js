import { Router } from "express";
import { createUser } from "../../controllers/user.js";

const routes = Router()

routes.post("/user", createUser)
routes.post("/login")

export default routes