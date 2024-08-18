import express from "express";

const app = express();

app.use(express.json());

app.get("/ping", (req, res) => {
    res.json("API is live")
})

app.listen(5000, ()=> {
    console.log("Server is running at PORT 5000")
})