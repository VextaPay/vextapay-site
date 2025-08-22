export default {
  async fetch(request) {
    return new Response(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>VextaPay - Virtual Visa Card & Multi-Currency Payments</title>
  <meta name="description" content="VextaPay offers secure virtual Visa cards, multi-currency support, and international payment solutions. Get your virtual card easily with KYC verification and just $5. Trusted by thousands worldwide." />
  <style>
    /* Reset */
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: #f0f4f8;
      color: #333;
      line-height: 1.6;
      padding: 20px;
    }
    a { color: #4e54c8; text-decoration: none; }
    a:hover { text-decoration: underline; }

    header {
      text-align: center;
      padding: 40px 20px;
      background: linear-gradient(135deg, #4e54c8, #8f94fb);
      color: white;
      border-radius: 12px;
      box-shadow: 0 5px 15px rgba(78, 84, 200, 0.4);
      margin-bottom: 40px;
    }
    header h1 {
      font-size: 3rem;
      margin-bottom: 10px;
      text-shadow: 1px 1px 3px rgba(0,0,0,0.2);
    }
    header p {
      font-size: 1.3rem;
      font-weight: 600;
      letter-spacing: 1.2px;
    }

    section {
      max-width: 900px;
      margin: 0 auto 40px auto;
      background: white;
      padding: 30px 40px;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }

    section h2 {
      color: #4e54c8;
      margin-bottom: 20px;
      font-weight: 700;
      border-bottom: 3px solid #8f94fb;
      padding-bottom: 8px;
    }

    ul {
      list-style: inside disc;
      margin-left: 20px;
    }

    footer {
      text-align: center;
      padding: 20px;
      font-size: 0.9rem;
      color: #777;
      border-top: 1px solid #ddd;
    }

    /* Responsive */
    @media (max-width: 600px) {
      header h1 { font-size: 2rem; }
      section { padding: 20px; margin-bottom: 30px; }
    }
  </style>
</head>
<body>
  <header>
    <h1>💳 VextaPay</h1>
    <p>Your Trusted Virtual Visa Card & Multi-Currency Payment Solution</p>
  </header>

  <section id="about">
    <h2>About VextaPay</h2>
    <p>VextaPay, operated by <strong>Vexa Ltd.</strong>, is a leading fintech company based in Oldham, England. Our mission is to provide secure, fast, and affordable virtual Visa card services to customers worldwide.</p>
    <p><strong>Legal Name:</strong> Vexa Ltd.<br/>
       <strong>Company Number:</strong> 16373129<br/>
       <strong>Address:</strong> 63 Trafalgar Street, Oldham, England, OL1 2HW</p>
  </section>

  <section id="services">
    <h2>Our Services</h2>
    <ul>
      <li>Instant Virtual Visa Card issuance with just $5 deposit</li>
      <li>Multi-currency support for seamless international transactions</li>
      <li>Secure online payments with advanced KYC verification</li>
      <li>Support for all major international merchants and platforms</li>
      <li>Unlimited virtual cards under one account</li>
      <li>Easy management via our user-friendly web platform</li>
    </ul>
  </section>

  <section id="why-choose-us">
    <h2>Why Choose VextaPay?</h2>
    <ul>
      <li>✅ <strong>Global Acceptance:</strong> Use your virtual card worldwide</li>
      <li>✅ <strong>Enhanced Security:</strong> Protect your money with virtual card technology</li>
      <li>✅ <strong>Affordable:</strong> Low cost with high value and unlimited cards</li>
      <li>✅ <strong>Fast Setup:</strong> Easy account creation and instant card issuance</li>
      <li>✅ <strong>Multi-currency:</strong> Avoid conversion hassles and extra fees</li>
      <li>✅ <strong>24/7 Support:</strong> Dedicated customer service whenever you need</li>
    </ul>
  </section>

  <section id="contact">
    <h2>Contact Us</h2>
    <p>Email: <a href="mailto:support@vextapay.com">support@vextapay.com</a></p>
    <p>Website: <a href="https://vextapay.com" target="_blank" rel="noopener noreferrer">https://vextapay.com</a></p>
  </section>

  <footer>
    &copy; 2025 Vexa Ltd. All rights reserved.
  </footer>
</body>
</html>
`, {
      headers: { "Content-Type": "text/html; charset=UTF-8" },
    });
  },
};
