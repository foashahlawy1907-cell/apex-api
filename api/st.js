module.exports = (req, res) => {
  const urlParam = req.query.url || req.url.split('url=')[1];
  const bloggerPage = "https://apex-team1.blogspot.com/2026/03/apex-team-redirector.html";

  if (!urlParam) {
    return res.status(400).json({ status: "error", message: "Invalid Request" });
  }

  const finalUrl = `${bloggerPage}?url=${urlParam}`;

  res.status(200).json({
    status: "success",
    shortenedUrl: finalUrl
  });
};
