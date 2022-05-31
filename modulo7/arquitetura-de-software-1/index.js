"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./src/controller/app");
const userController_1 = require("./src/controller/userController");
const userController = new userController_1.UserController();
app_1.app.post("/user", userController.createUser);
//# sourceMappingURL=index.js.map