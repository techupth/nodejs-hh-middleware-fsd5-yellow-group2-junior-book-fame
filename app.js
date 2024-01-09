import express from "express";
import bodyParser from "body-parser";
import assignmentRouter from "./apps/assignments.js";
import logging from "./apps/middlewares/logging.js";

const app = express();
const port = 4000;

app.use(logging);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(validateAssignmentData);
app.use(bodyParser.json());
app.use("/assignments", assignmentRouter);

app.listen(port, () => {
  console.log(`Server is running at the port ${port}`);
});
