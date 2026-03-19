module.exports = (req, res) => {
  // بنسحب الرابط اللي Dilar هيبعته بعد علامة url=
  const urlParam = req.query.url || req.url.split('url=')[1];
  const bloggerPage = "https://apex-team1.blogspot.com/2026/03/apex-team-redirector.html";

  if (!urlParam) {
    return res.status(400).json({ error: "Missing URL" });
  }

  // بنجهز الرابط اللي هيروح لمدونة أيبكس
  const finalUrl = `${bloggerPage}?url=${encodeURIComponent(urlParam)}`;

  // الرد بالصيغة اللي Dilar بيفهمها
  res.status(200).json({
    status: "success",
    shortenedUrl: finalUrl
  });
};
