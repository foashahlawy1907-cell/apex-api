module.exports = (req, res) => {
  // جلب الرابط بالكامل من مسار الطلب
  const fullUrl = req.url;
  let targetUrl = "";

  // استخراج الرابط الذي يضعه Dilar بعد علامة &url=
  if (fullUrl.includes("url=")) {
    targetUrl = fullUrl.split("url=")[1];
  }

  // رابط مدونة بلوجر الخاصة بفريق Apex
  const bloggerPage = "https://apex-team1.blogspot.com/2026/03/apex-team-redirector.html";

  if (!targetUrl) {
    // إذا لم يجد رابط، يحول لمدونة أيبكس مباشرة
    return res.redirect(bloggerPage);
  }

  // بناء الرابط النهائي المتوافق مع Dilar وبلوجر
  const finalRedirect = `${bloggerPage}?url=${targetUrl}`;

  // الرد بصيغة JSON التي يطلبها Dilar
  res.status(200).json({
    status: "success",
    shortenedUrl: finalRedirect
  });
};
