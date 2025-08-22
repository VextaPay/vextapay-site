export default {
  async fetch(request) {
    return new Response(`<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>VextaPay - Secure Virtual Visa Cards & Multi-Currency Payments 💳🌐</title>
  <meta name="description" content="VextaPay offers secure virtual Visa cards with multi-currency support. Instant cards after KYC for just $5. Trusted globally for safe, affordable payments." />
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
    * {
      margin: 0; padding: 0; box-sizing: border-box;
      scroll-behavior: smooth;
    }
    body {
      font-family: 'Montserrat', sans-serif;
      background: linear-gradient(135deg, #4e54c8, #8f94fb);
      background-size: 400% 400%;
      animation: gradientBG 15s ease infinite;
      color: #f5f6fa;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
    @keyframes gradientBG {
      0% {background-position:0% 50%;}
      50% {background-position:100% 50%;}
      100% {background-position:0% 50%;}
    }
    a {
      color: #a2a6ff;
      text-decoration: none;
      transition: color 0.3s ease;
    }
    a:hover {
      color: #f1f1f1;
    }
    header {
      padding: 40px 20px 60px;
      text-align: center;
      position: relative;
      z-index: 2;
    }
    header img.logo {
      width: 160px;
      margin-bottom: 15px;
      animation: fadeInDown 1.2s ease forwards;
      filter: drop-shadow(0 2px 8px rgba(0,0,0,0.35));
    }
    @keyframes fadeInDown {
      from {opacity: 0; transform: translateY(-40px);}
      to {opacity: 1; transform: translateY(0);}
    }
    header h1 {
      font-size: 3.4rem;
      font-weight: 900;
      letter-spacing: 3px;
      margin-bottom: 6px;
      text-shadow: 2px 2px 6px rgba(0,0,0,0.3);
      animation: fadeInUp 1.4s ease forwards;
    }
    header p.tagline {
      font-size: 1.5rem;
      font-weight: 500;
      opacity: 0.85;
      letter-spacing: 1.4px;
      text-shadow: 1px 1px 5px rgba(0,0,0,0.2);
      animation: fadeInUp 1.6s ease forwards;
    }
    @keyframes fadeInUp {
      from {opacity: 0; transform: translateY(40px);}
      to {opacity: 1; transform: translateY(0);}
    }
    main {
      flex-grow: 1;
      max-width: 900px;
      margin: 40px auto 80px;
      background: rgba(255 255 255 / 0.1);
      border-radius: 20px;
      padding: 40px 50px;
      box-shadow: 0 10px 40px rgba(0,0,0,0.25);
      backdrop-filter: blur(12px);
      color: #f0f0f0;
    }
    section {
      margin-bottom: 40px;
      animation: fadeInSection 1s ease forwards;
      opacity: 0;
      transform: translateY(40px);
      animation-fill-mode: forwards;
    }
    section:nth-child(1) {animation-delay: 0.4s;}
    section:nth-child(2) {animation-delay: 0.8s;}
    section:nth-child(3) {animation-delay: 1.2s;}
    section:nth-child(4) {animation-delay: 1.6s;}
    @keyframes fadeInSection {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    section h2 {
      color: #b7b9ff;
      font-weight: 800;
      font-size: 2rem;
      margin-bottom: 20px;
      border-bottom: 3px solid #a2a6ff;
      padding-bottom: 10px;
      letter-spacing: 1.5px;
      text-shadow: 1px 1px 4px rgba(0,0,0,0.3);
    }
    ul {
      list-style: none;
      margin-left: 0;
      padding-left: 0;
    }
    ul li {
      position: relative;
      padding-left: 30px;
      margin-bottom: 16px;
      font-size: 1.15rem;
      font-weight: 600;
      cursor: default;
      user-select: none;
    }
    ul li::before {
      content: '✅';
      position: absolute;
      left: 0;
      top: 0;
      font-size: 1.3rem;
      line-height: 1;
      color: #8fcaff;
      animation: emojiBounce 2.5s ease infinite;
    }
    @keyframes emojiBounce {
      0%, 100% {transform: translateY(0);}
      50% {transform: translateY(-6px);}
    }
    /* Button */
    .btn {
      display: inline-block;
      background: #7185ff;
      color: white;
      padding: 14px 36px;
      border-radius: 40px;
      font-weight: 700;
      font-size: 1.1rem;
      cursor: pointer;
      box-shadow: 0 6px 18px rgba(113, 133, 255, 0.6);
      transition: background 0.4s ease, transform 0.3s ease;
      text-decoration: none;
      user-select: none;
      margin-top: 15px;
      letter-spacing: 1.2px;
      text-align: center;
    }
    .btn:hover {
      background: #5069ff;
      transform: scale(1.07);
      box-shadow: 0 9px 25px rgba(80, 105, 255, 0.8);
    }
    /* Contact */
    #contact p {
      font-size: 1.15rem;
      margin-bottom: 12px;
      font-weight: 600;
    }
    /* Footer */
    footer {
      background: #2a2d6b;
      color: #bfc4ff;
      text-align: center;
      padding: 20px 10px;
      font-size: 0.95rem;
      font-weight: 600;
      box-shadow: 0 -3px 15px rgba(0, 0, 0, 0.25);
      position: sticky;
      bottom: 0;
      z-index: 100;
      user-select: none;
    }
    footer a {
      color: #d1d6ff;
      font-weight: 700;
      transition: color 0.3s ease;
    }
    footer a:hover {
      color: #fff;
    }
    /* Responsive */
    @media (max-width: 650px) {
      header h1 {
        font-size: 2.5rem;
      }
      header p.tagline {
        font-size: 1.1rem;
      }
      main {
        padding: 25px 20px;
        margin: 30px 15px 100px;
      }
      section h2 {
        font-size: 1.6rem;
      }
      ul li {
        font-size: 1rem;
      }
      .btn {
        padding: 12px 28px;
        font-size: 1rem;
      }
    }
  </style>
</head>
<body>
  <header>
    <img src="https://i.postimg.cc/D024frNL/fulllogo-transparent-nobuffer.png" alt="VextaPay Logo" class="logo" />
    <h1>VextaPay 💳</h1>
    <p class="tagline">Secure Virtual Visa Cards & Multi-Currency Payments 🌍✨</p>
  </header>
  <main>
    <section id="about">
      <h2>About VextaPay 🏢</h2>
      <p>VextaPay, operated by <strong>Vexa Ltd.</strong>, is a cutting-edge fintech company based in Oldham, England. We specialize in secure virtual Visa cards and multi-currency payment solutions tailored for individuals and businesses worldwide.</p>
      <p><strong>Legal Name:</strong> Vexa Ltd.<br />
         <strong>Company Number:</strong> 16373129<br />
         <strong>Address:</strong> 63 Trafalgar Street, Oldham, England, OL1 2HW</p>
    </section>

    <section id="services">
      <h2>Our Services 🚀</h2>
      <ul>
        <li>Instant Virtual Visa Card issuance with just $5 deposit</li>
        <li>Multi-currency support for seamless global transactions</li>
        <li>Advanced KYC for enhanced security and compliance</li>
        <li>Unlimited virtual cards per account for business flexibility</li>
        <li>Wide merchant acceptance worldwide</li>
        <li>Easy-to-use dashboard for card management</li>
      </ul>
      <a href="https://vextapay.com" target="_blank" rel="noopener noreferrer" class="btn" aria-label="Get Started at VextaPay">Get Started Now 🌟</a>
    </section>

    <section id="why-choose-us">
      <h2>Why Choose VextaPay? 🔒</h2>
      <ul>
        <li>Global Acceptance 🌎 – Use your card anywhere</li>
        <li>Enhanced Security 🔐 – Protect your funds with advanced tech</li>
        <li>Cost-Effective 💰 – Low fees, unlimited cards per account</li>
        <li>Fast Setup ⚡ – Quick KYC & instant issuance</li>
        <li>Multi-Currency 💱 – Avoid currency conversion fees</li>
        <li>24/7 Support 📞 – We’re here whenever you need us</li>
      </ul>
    </section>

    <section id="contact">
      <h2>Contact Us 📬</h2>
      <p>Email: <a href="mailto:support@vextapay.com">support@vextapay.com</a></p>
      <p>Website: <a href="https://vextapay.com" target="_blank" rel="noopener noreferrer">https://vextapay.com</a></p>
    </section>
  </main>

  <footer>
    &copy; 2025 Vexa Ltd. | <a href="https://vextapay.com" target="_blank" rel="noopener noreferrer">Visit Our Website</a>
  </footer>
</body>
</html>`, {
      headers: { "Content-Type": "text/html; charset=UTF-8" },
    });
  },
};
