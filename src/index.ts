import express from "express";
import hbs from "express-handlebars";
import bodyParser from "body-parser";
import path from "path";
import hroute from "./routes/hroute";
import { notFoundError, errorHandler } from "./middlewares/ErrorMiddleware";

const main = async () => {
    const app: express.Application = await express();

    // Template Engine
    app.set("view engine", "hbs");
    app.set("views", path.join(__dirname, "../src/views"));
    app.engine(".hbs", hbs({ defaultLayout: "main", extname: ".hbs" }));

    // Middleware
    app.use(express.static(path.join(__dirname, "../src/public")));
    app.use((bodyParser.urlencoded({ extended: false })));
    app.use(bodyParser.json());
    app.use("/", hroute);

    // Ports and Error Handling
    const port = process.env.PORT || 9000;
    app.use(notFoundError, errorHandler);
    app.listen(port, () => {
        console.log(`Server is runnin on port ${port}`);
        console.log(`Press Ctrl + C to exit.`);
    })
};

main();

