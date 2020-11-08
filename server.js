import express from "express";
import mongoose from "mongoose";
import channelSchema from "./schema.js";
import Cors from 'cors';
// App config
const app = express();
const port = process.env.PORT || 8001;
const connection_url =
  "mongodb+srv://channel-backend:Ub3QGCh4RJU6DT4k@cluster0.7szmy.mongodb.net/channel-db?retryWrites=true&w=majority";

// Middlewares
app.use(express.json());
app.use(Cors());

//  DB config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

//  API endpoints
app.get("/", (req, resp) => {
  resp.status(200).send(`listening on port: ${port} chaar chavanni ghode pe`);
});

app.post("/youtube", (req, resp) => {
    const dbCard = req.body;
    channelSchema.create(dbCard, (err, data) => {
        if (err)
        resp.status(500).send(err);
        else
        resp.status(201).send(data);
    })
})

app.get("/youtube", (req, resp) => {
    channelSchema.find((err, data) => {
        if (err)
        resp.status(500).send(err);
        else
        resp.status(200).send(data);
    })
})

// Listener
app.listen(port, () => console.log(`chaar chavanni ghode pe: ${port}`));
