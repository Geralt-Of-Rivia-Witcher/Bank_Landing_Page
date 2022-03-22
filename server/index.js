import express from "express";
import cors from "cors";

import { PORT } from "./config/config.js";
import routes from "./routes/routes.js";

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.listen(PORT, async () => {
    console.log(`Listening on ${PORT}`);
});
