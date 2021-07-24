import express from "express";

const app = express();

app.listen(3333, () => console.log("SERVER RUNNING IN http://localhost:333"));

export { app };
