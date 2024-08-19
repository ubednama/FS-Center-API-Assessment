import express from "express";
import connectDB from './config/db.config.js';
import cors from 'cors';
import routes from './routes/index.js';

const app = express();
const Port =  process.env.PORT || 5000;

const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/ping", (_, res) => {
    res.json("API is live")
})

app.use('/api',routes);

app.listen(Port, () => {
    connectDB()
    console.log(`Server is up and running at port ${Port}`);
})