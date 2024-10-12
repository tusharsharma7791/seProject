const corsOptions = {
  origin: [
    "https://se-project-omega.vercel.app",  // Just the origin without the path
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,  // Allows cookies to be included
};

const CHATTU_TOKEN = "chattu-token";

export { corsOptions, CHATTU_TOKEN };