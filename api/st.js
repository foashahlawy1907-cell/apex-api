module.exports = async (req, res) => {
  // 1. سحب الرابط من الـ Query String
  const { url } = req.query;
  
  // 2. رابط صفحة بلوجر الجديدة (بدون m=1)
  const bloggerPage = "https://apex-team1.blogspot.com/2026/03/apex-team-secure-redirect-body-font.html";

  // 3. لو مفيش رابط، ابعته للمدونة فوراً
  if (!url) {
    return res.redirect(301, bloggerPage);
  }

  // 4. بناء الرابط النهائي مع التشفير
  const finalRedirect = `${bloggerPage}?url=${encodeURIComponent(url)}`;

  // 5. الرد بصيغة JSON لموقع Dilar
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*'); // للسماح لـ Dilar بالوصول
  
  return res.status(200).json({
    status: "success",
    shortenedUrl: finalRedirect
  });
};
