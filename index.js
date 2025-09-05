import express from "express";
import fetch from "node-fetch";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/proxy", async (req, res) => {
  try {
    const response = await fetch("https://bit.ly/bysblogg", { redirect: "follow" });
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.json({ domain: response.url });
  } catch (err) {
    res.status(500).json({ error: "Domain alınamadı", details: err.toString() });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
