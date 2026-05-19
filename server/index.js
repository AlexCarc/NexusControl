const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const users = [
  {
    id: 1,
    name: "Alex Carvalho",
    email: "alex@email.com",
  },
  {
    id: 2,
    name: "Maria Silva",
    email: "maria@email.com",
  },
];

app.get("/", (req, res) => {
  res.json({
    message: "Nexus Control API Running",
  });
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/login", (req, res) => {

  const { email, password } = req.body;

  if (
    email === "admin@nexus.com" &&
    password === "123456"
  ) {
    return res.json({
      success: true,
      token: "fake-jwt-token",
      user: {
        name: "Alex Carvalho",
      },
    });
  }

  return res.status(401).json({
    success: false,
    message: "Email ou senha inválidos",
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});