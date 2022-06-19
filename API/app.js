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
    res.send("OK");
});

app.listen(5000, () => {
    console.log("Server is running");
});