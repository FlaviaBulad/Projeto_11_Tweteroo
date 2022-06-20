import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const users = [];
const tweets = [];

app.post('/sign-up', (req, res) => {
 const user = {
    username: req.body.username,
    avatar: req.body.avatar
 }
 users.push(user);
 res.send("OK");
});

app.post("/tweets", (req, res) => {
    const tweet = {
        username: req.body.username,
        avatar: req.body.avatar,
        tweet: req.body.tweet
    }
    tweets.push(tweet);
    res.send("OK");
});

app.get("/tweets", (req, res) => {
    
    if (tweets.length <= 10) {
        res.send(tweets);
      }

      else if (tweets.length > 10) {
        tweets.splice(0, 1);
        res.send(tweets);
      }
});

app.listen(5000, () => {
    console.log("Server is running");
});