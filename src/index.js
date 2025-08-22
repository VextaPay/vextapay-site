export default {
  async fetch(request) {
    return new Response(`<!DOCTYPE html>
<html>
<head>
  <title>VextaPay Worker</title>
  <style>
    body { font-family: Arial, sans-serif; background:#eef2f3; text-align:center; padding: 40px; }
    .card { background: linear-gradient(135deg, #4e54c8, #8f94fb); color: white; padding: 20px; border-radius: 12px; max-width: 400px; margin: 20px auto; }
  </style>
</head>
<body>
  <h1>💳 Welcome to VextaPay Worker!</h1>
  <div class="card">
    <p>Your secure virtual visa card platform.</p>
    <p>International Payments | Multi-currency Support</p>
  </div>
</body>
</html>`, {
      headers: { 'Content-Type': 'text/html;charset=UTF-8' }
    });
  }
};
