module.exports = (req, res) => {
  // جلب الرابط سواء كان بعد ?url= أو في آخر المسار
  const url = req.query.url || req.url.split('url=')[1];

  if (!url) {
    return res.status(400).json({ error: "No URL provided" });
  }

  // رابط مدونة بلوجر الخاصة بفريق Apex
  const bloggerPage = "https://apex-team1.blogspot.com/2026/03/apex-team-redirector.html";
  
  // فك تشفير الرابط القادم ودمجه مع رابط بلوجر
  const decodedUrl = decodeURIComponent(url);
  const finalUrl = `${bloggerPage}?url=${encodeURIComponent(decodedUrl)}`;

  // الرد بصيغة JSON التي يتوقعها Dilar
  res.status(200).json({
    status: "success",
    shortenedUrl: finalUrl
  });
};
