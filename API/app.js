import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const users = [];
const tweets = [];

app.post("/sign-up", (req, res) => {
  if (req.body.username === "" || req.body.avatar === "") {
    res.status(400).send("Preencha os campos!");
    return;
  }

  const user = {
    username: req.body.username,
    avatar: req.body.avatar,
  };

  users.push(user);
  res.status(200).send("OK");
});

app.post("/tweets", (req, res) => {
  if (req.headers.user === "" || req.body.tweet === "") {
    res.status(400).send("Preencha os campos!");
    return;
  }

  const tweet = req.body;
  const user = users.find((user) => user.username === req.body.username);

  tweet.avatar = user.avatar;
  tweets.push(tweet);
  res.status(200).send("OK");
});

app.get("/tweets", (req, res) => {
  if (tweets.length > 10) {
    tweets.splice(0, 1);
    res.status(200).send(tweets);
  }

  res.send(tweets);
});

app.listen(5000, () => {
  console.log("Server is running");
});
