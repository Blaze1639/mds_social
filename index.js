import http from "http";
import app from "./config/server.js";
import { initSocket } from "./config/socket.js";
import cors from "cors";

// 🔒 Configuration CORS
const allowedOrigins = [
    'http://localhost:3000', // Votre domaine de développement Front-end
    '[https://votre-app-front.com](https://votre-app-front.com)' // Votre domaine de production Front-end
];

const corsOptions = {
    origin: (origin, callback) => {
        // Permettre les requêtes sans 'origin' (ex: Postman, mobile, ou same-origin)
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // IMPORTANT : Autoriser l'envoi de cookies HttpOnly
    optionsSuccessStatus: 204
};


const server = http.createServer(app);

initSocket(server);

server.listen(3000, () => console.log("Server running on http://localhost:3000"));