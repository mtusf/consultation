export function sendEmailTemp({
    email,
    fullName,
    company,
    service,
    projectDetail,
    phone
}) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>New Consultation Request</title>

<style>
  * { margin:0; padding:0; box-sizing:border-box; }

  html, body { width:100%; }

  body {
    font-family:'Segoe UI', Helvetica, Arial, sans-serif;
    background:#eef1f6;
    padding:40px 15px;
    -webkit-font-smoothing:antialiased;
  }

  .wrapper { max-width:640px; width:100%; margin:0 auto; }

  .container {
    background:#ffffff;
    border-radius:16px;
    overflow:hidden;
    box-shadow:0 20px 40px rgba(15,23,42,0.08);
  }

  .header {
    background:linear-gradient(135deg,#1e293b 0%,#0f172a 100%);
    color:#fff;
    padding:40px 32px;
    text-align:center;
  }

  .header .icon-circle {
    width:56px;
    height:56px;
    background:rgba(37,99,235,0.15);
    border:1px solid rgba(37,99,235,0.4);
    border-radius:50%;
    display:inline-block;
    line-height:56px;
    font-size:26px;
    margin-bottom:16px;
  }

  .header h1 {
    font-size:22px;
    font-weight:600;
    letter-spacing:-0.3px;
    margin-bottom:8px;
  }

  .header p {
    color:#94a3b8;
    font-size:14px;
  }

  .badge {
    display:inline-block;
    margin-top:18px;
    padding:6px 16px;
    background:#2563eb;
    color:#fff;
    border-radius:999px;
    font-size:12px;
    font-weight:600;
    letter-spacing:0.4px;
    text-transform:uppercase;
  }

  .content { padding:32px; }

  .section-title {
    font-size:13px;
    font-weight:700;
    color:#2563eb;
    text-transform:uppercase;
    letter-spacing:0.6px;
    margin-bottom:16px;
  }

  .info-table {
    width:100%;
    border-collapse:collapse;
    margin-bottom:32px;
    border:1px solid #e5e7eb;
    border-radius:10px;
    overflow:hidden;
  }

  .info-table tr:not(:last-child) td {
    border-bottom:1px solid #eef1f6;
  }

  .info-table td {
    padding:16px 18px;
    font-size:14px;
    vertical-align:top;
    word-break:break-word;
  }

  .info-table .label {
    width:130px;
    color:#64748b;
    font-weight:600;
    background:#f8fafc;
    white-space:nowrap;
  }

  .info-table .value {
    color:#0f172a;
    font-weight:500;
  }

  .info-table .value a {
    color:#2563eb;
    text-decoration:none;
  }

  .project-box {
    background:#f8fafc;
    border:1px solid #e5e7eb;
    border-left:4px solid #2563eb;
    border-radius:10px;
    padding:20px 22px;
    line-height:1.7;
    color:#1e293b;
    font-size:14px;
    white-space:pre-wrap;
    word-break:break-word;
  }

  .cta-row { text-align:center; margin-top:32px; }

  .cta-button {
    display:inline-block;
    background:#2563eb;
    color:#ffffff !important;
    text-decoration:none;
    font-size:14px;
    font-weight:600;
    padding:14px 28px;
    border-radius:8px;
  }

  .footer {
    text-align:center;
    background:#f8fafc;
    padding:24px;
    border-top:1px solid #e5e7eb;
    color:#94a3b8;
    font-size:12px;
    line-height:1.6;
  }

  .footer strong { color:#475569; }

  /* ----- Responsive ----- */
  @media screen and (max-width:600px) {
    body { padding:20px 10px; }

    .header { padding:28px 20px; }
    .header h1 { font-size:19px; }
    .header p { font-size:13px; }
    .header .icon-circle { width:48px; height:48px; line-height:48px; font-size:22px; }

    .content { padding:20px; }

    .section-title { font-size:12px; margin-bottom:12px; }

    /* Stack label/value rows instead of side-by-side columns */
    .info-table, .info-table tbody, .info-table tr, .info-table td {
      display:block;
      width:100% !important;
    }

    .info-table tr { padding:12px 0; border-bottom:1px solid #eef1f6; }
    .info-table tr:last-child { border-bottom:none; }

    .info-table .label {
      background:none;
      padding:0 0 4px 0;
      font-size:11px;
      text-transform:uppercase;
      letter-spacing:0.4px;
    }

    .info-table .value { padding:0; font-size:15px; }

    .project-box { padding:16px; font-size:13.5px; }

    .cta-button { display:block; width:100%; padding:14px 0; }
  }

  @media screen and (max-width:360px) {
    .header h1 { font-size:17px; }
    .content { padding:16px; }
  }
</style>
</head>
<body>

<div class="wrapper">
  <div class="container">

    <div class="header">
      <span class="icon-circle">📩</span>
      <h1>New Consultation Request</h1>
      <p>Someone just reached out through your website</p>
      <div class="badge">New Lead</div>
    </div>

    <div class="content">

      <div class="section-title">Contact Information</div>

      <table class="info-table" cellpadding="0" cellspacing="0">
        <tr>
          <td class="label">Full Name</td>
          <td class="value">${fullName}</td>
        </tr>
        <tr>
          <td class="label">Company</td>
          <td class="value">${company}</td>
        </tr>
        <tr>
          <td class="label">Email</td>
          <td class="value"><a href="mailto:${email}">${email}</a></td>
        </tr>
        <tr>
          <td class="label">Phone</td>
          <td class="value"><a href="tel:${phone}">${phone}</a></td>
        </tr>
        <tr>
          <td class="label">Service</td>
          <td class="value">${service}</td>
        </tr>
      </table>

      <div class="section-title">Project Details</div>
      <div class="project-box">${projectDetail}</div>

      <div class="cta-row">
        <a href="mailto:${email}" class="cta-button">Reply to ${fullName.split(" ")[0]}</a>
      </div>

    </div>

    <div class="footer">
      This email was automatically generated from your website contact form.<br>
      <strong>${new Date().toLocaleString()}</strong>
    </div>

  </div>
</div>

</body>
</html>
`;
}