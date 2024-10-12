const corsOptions = {
  origin: [
    "https://se-project-omega.vercel.app/login", // Update with your frontend URL
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

const CHATTU_TOKEN = "chattu-token";

export { corsOptions, CHATTU_TOKEN };