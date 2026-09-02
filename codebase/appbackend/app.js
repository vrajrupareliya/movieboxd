import express from "express";
import cookieParser from "cookie-parser";
//const cookieParser = require("cookie-parser");
import cors from "cors";

const app = express()
 
app.use(cookieParser());

const allowedOrigins = (process.env.CORS_ORIGIN || '').split(',').map(s => s.trim()).filter(Boolean);

app.use(cors({
    origin: function (origin, callback) {
        if (!origin) return callback(null, true);
        if (
            allowedOrigins.includes(origin) ||
            /^http:\/\/localhost(:\d+)?$/.test(origin) ||
            /^http:\/\/127\.0\.0\.1(:\d+)?$/.test(origin)
        ) {
            return callback(null, true);
        }
        return callback(new Error('Not allowed by CORS'));
    },
    credentials: true
}));

app.use(express.json({limit: "20kb"}))
app.use(express.urlencoded({extended: true, limit:"16kb"}))

app.use(express.static("public"))

// import userroutes
import userRouter from "./routes/user.routes.js";


//routes decalaration

app.use("/api/v1/users",userRouter)

// import movie routes
import movieRouter from "./routes/movie.routes.js";

//routes decalaration
app.use("/api/v1/movies",movieRouter)

// Global error handling middleware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || err.statuscode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
        statusCode,
        data: null,
        message,
        success: false,
        errors: err.errors || []
    });
});

export { app }