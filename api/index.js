module.exports = (req, res) => {
  // الحصول على الرابط من الاستعلام بعد علامة url=
  const urlParam = req.query.url || req.url.split('url=')[1];
  const bloggerPage = "https://apex-team1.blogspot.com/2026/03/apex-team-redirector.html";

  if (!urlParam) {
    return res.status(400).send("Error: No URL provided");
  }

  // بناء الرابط النهائي لمدونة أيبكس
  const finalUrl = `${bloggerPage}?url=${urlParam}`;

  // الرد بصيغة JSON بسيطة جداً (أو نص مباشر حسب إعداد ديلار)
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(JSON.stringify({
    status: "success",
    shortenedUrl: finalUrl
  }));
};
