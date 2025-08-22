export default {
  async fetch(request) {
    return new Response(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>VextaPay - Secure Virtual Visa Cards & Multi-Currency Payments</title>
  <meta name="description" content="VextaPay offers secure virtual Visa cards with multi-currency support. Instant cards after KYC for just $5. Trusted globally for safe, affordable payments." />
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

    /* RESET */
    *, *::before, *::after {
      margin: 0; padding: 0; box-sizing: border-box;
    }

    body {
      font-family: 'Poppins', sans-serif;
      background: linear-gradient(135deg, #1e3c72, #2a5298);
      color: #fff;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      line-height: 1.6;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    /* CONTAINER */
    .container {
      width: 90%;
      max-width: 1200px;
      margin: 0 auto;
      flex: 1 0 auto;
      padding: 2rem 0 4rem;
    }

    /* HEADER */
    header {
      padding: 1.5rem 0;
      background: rgba(0,0,0,0.25);
      box-shadow: 0 2px 8px rgba(0,0,0,0.3);
      position: sticky;
      top: 0;
      z-index: 1000;
      display: flex;
      align-items: center;
      justify-content: space-between;
      backdrop-filter: saturate(180%) blur(10px);
    }

    header img.logo {
      height: 50px;
      user-select: none;
      filter: drop-shadow(0 2px 3px rgba(0,0,0,0.4));
      cursor: pointer;
      transition: transform 0.3s ease;
    }
    header img.logo:hover {
      transform: scale(1.05);
    }

    header h1 {
      font-weight: 600;
      font-size: 1.5rem;
      letter-spacing: 3px;
      color: #f0f0f0;
      user-select: none;
      flex-grow: 1;
      text-align: center;
      text-shadow: 1px 1px 3px rgba(0,0,0,0.5);
    }

    /* MAIN SECTIONS */
    section {
      margin-bottom: 3rem;
      background: rgba(255 255 255 / 0.1);
      border-radius: 16px;
      box-shadow: 0 8px 30px rgb(0 0 0 / 0.2);
      padding: 2.5rem 3rem;
      opacity: 0;
      transform: translateY(25px);
      animation: fadeSlideIn 0.8s forwards;
    }
    section:nth-of-type(1) { animation-delay: 0.15s; }
    section:nth-of-type(2) { animation-delay: 0.35s; }
    section:nth-of-type(3) { animation-delay: 0.55s; }
    section:nth-of-type(4) { animation-delay: 0.75s; }

    @keyframes fadeSlideIn {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    section h2 {
      font-size: 2rem;
      margin-bottom: 1rem;
      font-weight: 600;
      color: #a0c1ff;
      letter-spacing: 1.5px;
      border-bottom: 3px solid #6e90ff;
      padding-bottom: 0.3rem;
      text-shadow: 0 0 10px #6e90ff44;
    }

    /* LIST */
    ul {
      list-style: none;
      padding-left: 0;
    }
    ul li {
      position: relative;
      padding-left: 30px;
      font-size: 1.1rem;
      margin-bottom: 1rem;
      cursor: default;
      user-select: none;
    }
    ul li::before {
      content: "✔️";
      position: absolute;
      left: 0;
      top: 0;
      font-size: 1.2rem;
      color: #87cefa;
      animation: pulseEmoji 3s infinite;
    }

    @keyframes pulseEmoji {
      0%, 100% {transform: scale(1);}
      50% {transform: scale(1.3);}
    }

    /* BUTTON */
    .btn {
      display: inline-block;
      margin-top: 1.5rem;
      padding: 0.85rem 2.5rem;
      background: #6e90ff;
      color: #fff;
      font-weight: 600;
      font-size: 1.2rem;
      border-radius: 50px;
      cursor: pointer;
      user-select: none;
      text-decoration: none;
      box-shadow: 0 8px 15px rgba(110, 144, 255, 0.6);
      transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
      text-align: center;
    }
    .btn:hover {
      background-color: #4f6fe1;
      transform: scale(1.1);
      box-shadow: 0 10px 20px rgba(79, 111, 225, 0.8);
    }

    /* CONTACT LINKS */
    #contact p, #contact a {
      font-size: 1.1rem;
      color: #cdd6f4;
      user-select: text;
    }
    #contact a:hover {
      color: #a1b2ff;
    }

    /* FOOTER */
    footer {
      text-align: center;
      padding: 1.3rem 1rem;
      background: rgba(0,0,0,0.3);
      color: #bfc4ffcc;
      font-weight: 600;
      user-select: none;
      box-shadow: inset 0 1px 10px rgba(255 255 255 / 0.1);
      flex-shrink: 0;
    }
    footer a {
      color: #a0b6ff;
      text-decoration: none;
      font-weight: 700;
      transition: color 0.25s ease;
    }
    footer a:hover {
      color: #dbe1ff;
    }

    /* RESPONSIVE */
    @media (max-width: 850px) {
      section {
        padding: 1.8rem 2rem;
      }
      section h2 {
        font-size: 1.7rem;
      }
      .btn {
        font-size: 1rem;
        padding: 0.7rem 2rem;
      }
      header h1 {
        font-size: 1.25rem;
      }
      header img.logo {
        height: 40px;
      }
    }
    @media (max-width: 480px) {
      .container {
        width: 95%;
        padding: 1rem 0 3rem;
      }
      ul li {
        font-size: 1rem;
        padding-left: 25px;
      }
      ul li::before {
        font-size: 1.1rem;
      }
      section h2 {
        font-size: 1.5rem;
      }
      .btn {
        width: 100%;
        padding: 1rem 0;
        font-size: 1.1rem;
        border-radius: 30px;
      }
    }
  </style>
</head>
<body>
  <header>
    <img src="https://i.postimg.cc/D024frNL/fulllogo-transparent-nobuffer.png" alt="VextaPay Logo" class="logo" />
    <h1>VextaPay</h1>
  </header>

  <div class="container" role="main">
    <section id="about" aria-label="About VextaPay">
      <h2>About VextaPay</h2>
      <p>
        VextaPay, operated by Vexa Ltd., is a cutting-edge fintech company based in Oldham, England. We specialize in secure virtual Visa cards and multi-currency payment solutions tailored for individuals and businesses worldwide.
      </p>
      <p><strong>Legal Name:</strong> Vexa Ltd.<br />
         <strong>Company Number:</strong> 16373129<br />
         <strong>Address:</strong> 63 Trafalgar Street, Oldham, England, OL1 2HW
      </p>
    </section>

    <section id="services" aria-label="VextaPay Services">
      <h2>Our Services</h2>
      <ul>
        <li>Instant Virtual Visa Card issuance with just $5 deposit</li>
        <li>Multi-currency support for seamless global transactions</li>
        <li>Advanced KYC for enhanced security and compliance</li>
        <li>Unlimited virtual cards per account for business flexibility</li>
        <li>Wide merchant acceptance worldwide</li>
        <li>Easy-to-use dashboard for card management</li>
      </ul>
      <a href="https://vextapay.com" class="btn" target="_blank" rel="noopener noreferrer" aria-label="Get started with VextaPay">Get Started</a>
    </section>

    <section id="why-choose-us" aria-label="Why choose VextaPay">
      <h2>Why Choose VextaPay?</h2>
      <ul>
        <li>Global Acceptance 🌍 – Use your card anywhere</li>
        <li>Enhanced Security 🔐 – Protect your funds with advanced tech</li>
        <li>Cost-Effective 💵 – Low fees, unlimited cards per account</li>
        <li>Fast Setup ⚡ – Quick KYC & instant issuance</li>
        <li>Multi-Currency 💱 – Avoid currency conversion fees</li>
        <li>24/7 Support 📞 – We’re here whenever you need us</li>
      </ul>
    </section>

    <section id="contact" aria-label="Contact VextaPay">
      <h2>Contact Us</h2>
      <p>Email: <a href="mailto:support@vextapay.com">support@vextapay.com</a></p>
      <p>Website: <a href="https://vextapay.com" target="_blank" rel="noopener noreferrer">https://vextapay.com</a></p>
    </section>
  </div>

  <footer>
    &copy; 2025 Vexa Ltd. | <a href="https://vextapay.com" target="_blank" rel="noopener noreferrer">Visit Our Website</a>
  </footer>
</body>
</html>`, {
      headers: { "Content-Type": "text/html; charset=UTF-8" },
    });
  },
};
