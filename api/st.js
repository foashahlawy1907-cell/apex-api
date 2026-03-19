module.exports = (req, res) => {
  // سحب رابط الفصل الذي يرسله موقع Dilar
  const urlParam = req.query.url;
  
  // الرابط الجديد الذي زودتني به (بدون m=1 لضمان عمل الإعلانات بكفاءة)
  const bloggerPage = "https://apex-team1.blogspot.com/2026/03/apex-team-secure-redirect-body-font.html";

  if (!urlParam) {
    // لو مفيش رابط فصل، ارجعه لصفحة بلوجر مباشرة
    return res.redirect(bloggerPage);
  }

  // بناء الرابط النهائي مع تشفير رابط الوجهة
  const finalRedirect = `${bloggerPage}?url=${encodeURIComponent(urlParam)}`;

  // الرد بصيغة JSON التي يتوقعها Dilar للتحويل التلقائي
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(JSON.stringify({
    status: "success",
    shortenedUrl: finalRedirect
  }));
};
