const corsOptions = {
  origin: [
    "http://localhost:5173",
    "http://localhost:4173",
    "https://se-project-0293vercel.app/login", // Update with your frontend URL
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

const CHATTU_TOKEN = "chattu-token";

export { corsOptions, CHATTU_TOKEN };