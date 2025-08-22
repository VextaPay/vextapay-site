export default {
  async fetch(request) {
    return new Response(`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>VextaPay - Secure Virtual Visa Card & Multi-Currency Payment Solution</title>
<meta name="description" content="VextaPay offers secure virtual Visa cards with multi-currency support. Get instant cards after KYC verification for just $5. Trusted by users worldwide for safe and affordable payments." />
<style>
  /* Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: #f9fafc;
    color: #2c3e50;
    line-height: 1.6;
    padding: 0 20px 60px;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  a {
    color: #4e54c8;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  a:hover {
    color: #6366f1;
  }
  header {
    background: linear-gradient(135deg, #4e54c8, #6366f1);
    padding: 40px 20px 60px;
    text-align: center;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(78, 84, 200, 0.35);
    color: white;
    position: relative;
    overflow: hidden;
  }
  /* Subtle animated background */
  header::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle at center, rgba(255 255 255 / 0.15), transparent 70%);
    animation: pulse 15s ease-in-out infinite;
    z-index: 0;
  }
  @keyframes pulse {
    0%, 100% {
      transform: rotate(0deg) scale(1);
    }
    50% {
      transform: rotate(45deg) scale(1.1);
    }
  }
  header > * {
    position: relative;
    z-index: 1;
  }
  header img.logo {
    width: 140px;
    margin-bottom: 20px;
    filter: drop-shadow(1px 1px 2px rgba(0,0,0,0.2));
    animation: fadeInDown 1.5s ease forwards;
  }
  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  header h1 {
    font-size: 3rem;
    margin-bottom: 10px;
    font-weight: 700;
    letter-spacing: 2px;
    text-shadow: 1px 1px 3px rgba(0,0,0,0.3);
    animation: fadeInUp 1.5s ease forwards;
  }
  header p.tagline {
    font-size: 1.3rem;
    font-weight: 600;
    letter-spacing: 1.2px;
    opacity: 0.9;
    animation: fadeInUp 1.7s ease forwards;
  }
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  main {
    flex-grow: 1;
    max-width: 900px;
    margin: 40px auto 0;
  }
  section {
    background: white;
    padding: 30px 40px;
    margin-bottom: 40px;
    border-radius: 12px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
    transition: box-shadow 0.3s ease;
  }
  section:hover {
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
  }
  section h2 {
    color: #4e54c8;
    margin-bottom: 20px;
    font-weight: 700;
    border-bottom: 3px solid #8f94fb;
    padding-bottom: 8px;
  }
  ul {
    list-style: none;
    margin-left: 0;
    padding-left: 0;
  }
  ul li {
    position: relative;
    padding-left: 25px;
    margin-bottom: 14px;
    font-size: 1.05rem;
  }
  ul li::before {
    content: '✔';
    position: absolute;
    left: 0;
    top: 0;
    color: #4e54c8;
    font-weight: bold;
    font-size: 1.2rem;
    line-height: 1;
  }
  /* Button styling */
  .btn {
    display: inline-block;
    background: #4e54c8;
    color: white;
    padding: 12px 30px;
    border-radius: 30px;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.3s ease, transform 0.2s ease;
    text-align: center;
    margin-top: 10px;
    user-select: none;
    box-shadow: 0 5px 15px rgba(78, 84, 200, 0.4);
    border: none;
    text-decoration: none;
  }
  .btn:hover {
    background: #6366f1;
    transform: scale(1.05);
  }
  /* Contact links */
  #contact p {
    font-size: 1.1rem;
    margin-bottom: 8px;
  }
  footer {
    margin-top: auto;
    background: #2c3e50;
    color: #ddd;
    text-align: center;
    padding: 20px;
    font-size: 0.9rem;
    border-radius: 12px 12px 0 0;
    box-shadow: 0 -4px 15px rgba(0,0,0,0.1);
  }
  footer a {
    color: #8f94fb;
    font-weight: 600;
  }
  /* Responsive */
  @media (max-width: 600px) {
    header h1 {
      font-size: 2rem;
    }
    header img.logo {
      width: 110px;
      margin-bottom: 15px;
    }
    main {
      margin: 30px 15px 0;
    }
    section {
      padding: 20px 25px;
      margin-bottom: 30px;
    }
    ul li {
      font-size: 1rem;
      padding-left: 20px;
    }
    .btn {
      padding: 10px 22px;
      font-size: 0.95rem;
    }
  }
</style>
</head>
<body>
  <header>
    <img src="https://i.postimg.cc/D024frNL/fulllogo-transparent-nobuffer.png" alt="VextaPay Logo" class="logo" />
    <h1>VextaPay</h1>
    <p class="tagline">Secure Virtual Visa Cards & Multi-Currency Payment Solutions</p>
  </header>
  <main>
    <section id="about">
      <h2>About VextaPay</h2>
      <p>VextaPay is a trusted fintech company operating under <strong>Vexa Ltd.</strong>, based in Oldham, England. We specialize in offering secure virtual Visa cards, multi-currency support, and seamless international payment solutions designed for businesses and individuals worldwide.</p>
      <p><strong>Legal Name:</strong> Vexa Ltd.<br />
         <strong>Company Number:</strong> 16373129<br />
         <strong>Address:</strong> 63 Trafalgar Street, Oldham, England, OL1 2HW</p>
    </section>

    <section id="services">
      <h2>Our Services</h2>
      <ul>
        <li>Instant Virtual Visa Card issuance with just $5 deposit</li>
        <li>Multi-currency support for hassle-free global transactions</li>
        <li>Secure and verified online payments with advanced KYC</li>
        <li>Unlimited virtual cards per account for maximum flexibility</li>
        <li>Broad merchant acceptance worldwide</li>
        <li>User-friendly dashboard for easy card management</li>
      </ul>
      <a href="https://vextapay.com/signup" class="btn" target="_blank" rel="noopener noreferrer">Get Started Now</a>
    </section>

    <section id="why-choose-us">
      <h2>Why Choose VextaPay?</h2>
      <ul>
        <li>✅ <strong>Global Acceptance:</strong> Use your virtual card anywhere in the world</li>
        <li>✅ <strong>Enhanced Security:</strong> Advanced virtual card technology protects your funds</li>
        <li>✅ <strong>Cost-Effective:</strong> Low fees, unlimited cards with one account</li>
        <li>✅ <strong>Fast Setup:</strong> Easy KYC and instant card issuance</li>
        <li>✅ <strong>Multi-Currency:</strong> Avoid currency conversion fees and hassles</li>
        <li>✅ <strong>24/7 Customer Support:</strong> Dedicated help when you need it</li>
      </ul>
    </section>

    <section id="contact">
      <h2>Contact Us</h2>
      <p>Email: <a href="mailto:support@vextapay.com">support@vextapay.com</a></p>
      <p>Website: <a href="https://vextapay.com" target="_blank" rel="noopener noreferrer">vextapay.com</a></p>
    </section>
  </main>
  <footer>
    &copy; 2025 Vexa Ltd. | <a href="https://vextapay.com" target="_blank" rel="noopener noreferrer">Visit Our Website</a>
  </footer>
</body>
</html>`, {
      headers: {
        "Content-Type": "text/html; charset=UTF-8",
      },
    });
  },
};
