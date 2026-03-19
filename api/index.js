module.exports = (req, res) => {
  // جلب الرابط بالكامل من بعد علامة الاستفهام
  const fullUrl = req.url;
  let targetUrl = "";

  if (fullUrl.includes("url=")) {
    targetUrl = fullUrl.split("url=")[1];
  }

  if (!targetUrl) {
    return res.status(400).json({ error: "No URL provided" });
  }

  // رابط مدونة بلوجر الخاصة بفريق Apex
  const bloggerPage = "https://apex-team1.blogspot.com/2026/03/apex-team-redirector.html";
  
  // بناء الرابط النهائي مع الحفاظ على التشفير الأصلي للرابط
  const finalRedirect = `${bloggerPage}?url=${targetUrl}`;

  // الرد بالصيغة التي يفهمها Dilar
  res.status(200).json({
    status: "success",
    shortenedUrl: finalRedirect
  });
};
