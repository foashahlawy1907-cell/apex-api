module.exports = (req, res) => {
  // سحب رابط الفصل من الـ Query
  const urlParam = req.query.url;
  
  // رابط صفحتك الجديدة في بلوجر
  const bloggerPage = "https://apex-team1.blogspot.com/2026/03/apex-team-redirect-system-body-font.html";

  if (!urlParam) {
    // لو مفيش رابط فصل، ارجعه لصفحة بلوجر الرئيسية
    return res.redirect(bloggerPage);
  }

  // بناء الرابط النهائي (تأكد من استخدام encodeURIComponent)
  const finalRedirect = `${bloggerPage}?url=${encodeURIComponent(urlParam)}`;

  // الرد بصيغة JSON التي يقرأها Dilar ليقوم بالتحويل
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(JSON.stringify({
    status: "success",
    shortenedUrl: finalRedirect
  }));
};
