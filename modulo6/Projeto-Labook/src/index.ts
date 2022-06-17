import { app } from "./controller/app"
import { friendRouter } from "./controller/router/friendRouter"
import { postRouter } from "./controller/router/postRouter"
import { userRouter } from "./controller/router/userRouter"

app.use("/labook/user", userRouter)
app.use("/labook/post", postRouter)
app.use("/labook/friend", friendRouter)