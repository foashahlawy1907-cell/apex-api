module.exports = (req, res) => {
  // سحب رابط الفصل اللي Dilar بيبعته
  const urlParam = req.query.url || req.url.split('url=')[1];
  
  // الرابط الجديد الاحترافي لصفحة التحويل في بلوجر
  const bloggerPage = "https://apex-team1.blogspot.com/2026/03/apex-team-redirect-system-body-font.html";

  if (!urlParam) {
    // لو مفيش رابط فصل، ابعته للمدونة مباشرة
    return res.redirect(bloggerPage);
  }

  // بناء الرابط النهائي: رابط المدونة + رابط الفصل مشفر
  const finalUrl = `${bloggerPage}?url=${encodeURIComponent(urlParam)}`;

  // الرد بصيغة JSON لموقع Dilar
  res.status(200).json({
    status: "success",
    shortenedUrl: finalUrl
  });
};
