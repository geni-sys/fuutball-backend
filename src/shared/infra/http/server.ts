import { app } from "./app";

app.listen(process.env.PORT || 3333, () =>
  console.log("SERVER RUNNING IN http://localhost:3333")
);
