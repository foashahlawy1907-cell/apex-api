export default function handler(req, res) {
  const { api, url } = req.query;

  const VALID_API = "123456"; // غيره براحتك

  // تحقق من API
  if (api !== VALID_API) {
    return res.status(403).send("Invalid API");
  }

  // تحقق من الرابط
  if (!url) {
    return res.status(400).send("No URL");
  }

  // 🔥 صفحة بلوجر بتاعتك
  const bloggerPage = "https://apex-team1.blogspot.com/2026/03/apex-team-redirect-system-body-font.html";

  // مهم: نحافظ على ?m=1
  const finalLink = `${bloggerPage}?m=1&url=${encodeURIComponent(url)}`;

  // تحويل
  res.writeHead(302, {
    Location: finalLink,
  });

  res.end();
}
