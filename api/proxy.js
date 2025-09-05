import fetch from "node-fetch";

export default async function handler(req, res) {
  try {
    const response = await fetch("https://bit.ly/bysblogg", { redirect: "follow" });
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json({ domain: response.url });
  } catch (err) {
    res.status(500).json({ error: err.toString() });
  }
}
