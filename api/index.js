module.exports = (req, res) => {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: "No URL provided" });
  }

  const bloggerPage = "https://apex-team1.blogspot.com/2026/03/apex-team-redirector.html";
  const finalUrl = `${bloggerPage}?url=${encodeURIComponent(url)}`;

  res.status(200).json({
    status: "success",
    shortenedUrl: finalUrl
  });
};
