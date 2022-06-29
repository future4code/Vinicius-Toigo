import {app} from "./controller/app"
import {UserController} from "./controller/userController"

const userController = new UserController();

// app.get("/", userController.getUser)
   
app.post("/user", userController.createUser)

app.get("/all",userController.getAllUsers)

app.delete("/:id", userController.deleteUser)