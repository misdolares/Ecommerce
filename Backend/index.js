import express from "express";
import FileUpload from "express-fileupload";
import cors from "cors";
import ProductRoute from "./routes/ProductRoute.js";

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// img upload
app.use(FileUpload());
app.use(express.static("public"));

// routes
app.use(ProductRoute);

// Pintando Servidor en consola
const port = process.env.PORT || 5000;
app.listen(port, console.log(`Servidor funcionando en --> ${port} ...`));
