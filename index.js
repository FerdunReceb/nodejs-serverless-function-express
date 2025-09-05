import express from "express";
import fetch from "node-fetch";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/proxy", async (req, res) => {
  try {
    const response = await fetch("https://bit.ly/bysblogg", { redirect: "follow" });

    // Sadece origin alıyoruz: https://www.baysansli614.com
    const domain = new URL(response.url).origin;

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.json({ domain });
  } catch (err) {
    res.status(500).json({ error: "Domain alınamadı", details: err.toString() });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
