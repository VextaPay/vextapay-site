/**
 * VextaPay Landing Page Worker
 * Professional static landing page with SEO, FAQ, and structured sections.
 */

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>VextaPay - Virtual Visa Cards & Multi-Currency Online Payments</title>
  <meta name="description" content="VextaPay provides secure, fast, and low-cost virtual Visa cards. Instantly create unlimited cards, verify with simple KYC, and pay globally in multiple currencies for just $5. Ideal for e-commerce, freelancers, and digital nomads." />
  <meta name="keywords" content="virtual visa cards, online payments, virtual debit cards, multi-currency card, VextaPay, UK fintech, international payments, KYC, online shopping card" />
  <meta name="author" content="VextaPay" />
  <meta name="robots" content="index, follow" />

  <!-- Open Graph -->
  <meta property="og:title" content="VextaPay - Virtual Visa Cards & Global Payments" />
  <meta property="og:description" content="Secure, unlimited virtual Visa cards. Accept and pay globally with ease. Powered by VextaPay." />
  <meta property="og:image" content="https://i.postimg.cc/D024frNL/fulllogo-transparent-nobuffer.png" />
  <meta property="og:url" content="https://vextapay.com" />
  <meta property="og:type" content="website" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="VextaPay - Virtual Visa Cards for Global Payments" />
  <meta name="twitter:description" content="Create secure virtual cards instantly. Only $5 for unlimited cards. Pay worldwide in multiple currencies." />
  <meta name="twitter:image" content="https://i.postimg.cc/D024frNL/fulllogo-transparent-nobuffer.png" />

  <!-- Favicon -->
  <link rel="icon" href="https://i.postimg.cc/1XdzYfqk/vestapay-logo.png" type="image/png" />

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />

  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }

    body {
      font-family: 'Roboto', sans-serif;
      background: linear-gradient(-45deg, #667eea, #764ba2, #6b8dd6, #a27dff);
      background-size: 400% 400%;
      animation: bgMove 20s ease infinite;
      color: #fff;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    header {
      padding: 20px;
      display: flex;
      align-items: center;
      background: rgba(0, 0, 0, 0.3);
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    }
    header img { height: 50px; margin-right: 15px; }
    header h1 { font-size: 1.8rem; font-weight: 700; }

    main { flex: 1; padding: 40px 20px; max-width: 1000px; margin: 0 auto; text-align: center; }
    main h2 { font-size: 2.4rem; margin-bottom: 20px; }
    main p { font-size: 1.2rem; line-height: 1.6; margin-bottom: 30px; }

    .btn {
      display: inline-block;
      padding: 15px 35px;
      background: #ff6f61;
      color: white;
      font-weight: 700;
      text-decoration: none;
      border-radius: 30px;
      transition: 0.3s;
    }
    .btn:hover { background: #ff3b2e; }

    section { margin: 60px auto; text-align: center; max-width: 900px; }
    section h3 { font-size: 1.8rem; margin-bottom: 15px; }
    section p { font-size: 1rem; margin-bottom: 15px; }

    .faq { text-align: left; max-width: 800px; margin: 0 auto; }
    .faq-item { margin-bottom: 20px; }
    .faq-item h4 { font-size: 1.2rem; margin-bottom: 5px; color: #ffdf5d; }
    .faq-item p { font-size: 1rem; color: #eee; }

    footer {
      background: rgba(0, 0, 0, 0.3);
      padding: 20px;
      text-align: center;
      font-size: 0.9rem;
      color: #ddd;
    }

    @keyframes bgMove {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
  </style>
</head>
<body>
  <header>
    <img src="https://i.postimg.cc/D024frNL/fulllogo-transparent-nobuffer.png" alt="VextaPay Logo" />
    <h1>VextaPay</h1>
  </header>

  <main>
    <h2>Unlimited Virtual Visa Cards for Online Shopping, Subscriptions & Freelancers</h2>
    <p>VextaPay helps you create secure, multi-currency virtual cards with simple KYC. For only $5, access unlimited Visa cards, global payments, and secure online transactions. Great for freelancers, e-commerce users, travelers, and subscription management.</p>
    <a href="https://vextapay.com" class="btn" target="_blank" rel="noopener noreferrer">Create Your First Card 🚀</a>

    <!-- Features -->
    <section>
      <h3>🌍 Why Choose VextaPay?</h3>
      <p>✔ Unlimited virtual Visa cards for just $5<br/>
         ✔ Multi-currency support for global payments<br/>
         ✔ Simple, fast KYC verification<br/>
         ✔ Perfect for freelancers, businesses & digital nomads</p>
    </section>

    <!-- FAQ -->
    <section>
      <h3>❓ Frequently Asked Questions</h3>
      <div class="faq">
        <div class="faq-item">
          <h4>💳 How much does it cost?</h4>
          <p>Just $5 to get unlimited virtual Visa cards. No hidden fees.</p>
        </div>
        <div class="faq-item">
          <h4>🌍 Can I use VextaPay internationally?</h4>
          <p>Yes! Our cards support multiple currencies and work worldwide where Visa is accepted.</p>
        </div>
        <div class="faq-item">
          <h4>🛡️ Is my data secure?</h4>
          <p>We use bank-level encryption and comply with UK financial regulations for maximum security.</p>
        </div>
        <div class="faq-item">
          <h4>📑 Do I need KYC?</h4>
          <p>Yes, simple KYC is required to ensure compliance with regulations.</p>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section>
      <h3>🚀 Start Today</h3>
      <p>Join thousands of users already enjoying secure online payments with VextaPay.</p>
      <a href="https://vextapay.com" class="btn">Get Started Now</a>
    </section>
  </main>

  <footer>
    &copy; 2025 Vexa Ltd. | Business Name: VextaPay | Company Number: 16373129<br/>
    Registered Office: 63 Trafalgar Street, Oldham, England, OL1 2HW<br/>
    <a href="https://github.com/vextapay" target="_blank" style="color:#ffdf5d;">GitHub</a> |
    <a href="mailto:support@vextapay.com" style="color:#ffdf5d;">Contact Support</a>
  </footer>
</body>
</html>`;

export default {
  async fetch(request) {
    try {
      if (request.method !== 'GET') {
        return new Response('Method Not Allowed', { status: 405 });
      }

      return new Response(html, {
        headers: {
          'Content-Type': 'text/html; charset=UTF-8',
          'Cache-Control': 'public, max-age=3600',
        },
      });
    } catch (err) {
      return new Response('Internal Server Error', { status: 500 });
    }
  },
};
