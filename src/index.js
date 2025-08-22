export default {
  async fetch(request) {
    return new Response(html, {
      headers: { "content-type": "text/html;charset=UTF-8" },
    });
  },
};

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>VextaPay - Secure Virtual Cards & Multi-Currency Payments</title>
  <meta name="description" content="VextaPay offers virtual Visa cards with multi-currency support, secure online payments, and easy KYC verification. Get unlimited cards for just $5 and pay internationally hassle-free." />
  <link rel="icon" href="/src/favicon.ico" type="image/x-icon" />

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />

  <style>
    /* Reset */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Roboto', sans-serif;
      background: linear-gradient(135deg, #667eea, #764ba2);
      color: #fff;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    header {
      padding: 20px;
      display: flex;
      align-items: center;
      background: rgba(0,0,0,0.2);
      box-shadow: 0 2px 10px rgba(0,0,0,0.3);
    }

    header img {
      height: 50px;
      margin-right: 15px;
      filter: drop-shadow(0 0 2px rgba(0,0,0,0.5));
    }

    header h1 {
      font-weight: 700;
      font-size: 1.8rem;
      letter-spacing: 2px;
    }

    main {
      flex: 1;
      padding: 40px 20px;
      max-width: 900px;
      margin: 0 auto;
      text-align: center;
      position: relative;
      z-index: 1;
    }

    main h2 {
      font-size: 2.4rem;
      margin-bottom: 20px;
      text-shadow: 1px 1px 4px rgba(0,0,0,0.6);
    }

    main p {
      font-size: 1.2rem;
      line-height: 1.6;
      max-width: 700px;
      margin: 0 auto 30px;
      text-shadow: 1px 1px 3px rgba(0,0,0,0.4);
    }

    .btn {
      display: inline-block;
      padding: 15px 35px;
      background: #ff6f61;
      color: white;
      font-weight: 700;
      text-decoration: none;
      border-radius: 30px;
      box-shadow: 0 5px 15px rgba(255,111,97,0.6);
      transition: background 0.3s ease, box-shadow 0.3s ease;
      font-size: 1.1rem;
    }

    .btn:hover {
      background: #ff3b2e;
      box-shadow: 0 8px 20px rgba(255,59,46,0.8);
    }

    footer {
      background: rgba(0,0,0,0.3);
      padding: 15px 20px;
      text-align: center;
      font-size: 0.9rem;
      color: #ddd;
      box-shadow: 0 -2px 10px rgba(0,0,0,0.3);
    }

    /* Background animation */
    @keyframes bgMove {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }

    body {
      background: linear-gradient(-45deg, #667eea, #764ba2, #6b8dd6, #a27dff);
      background-size: 400% 400%;
      animation: bgMove 20s ease infinite;
    }

    /* Responsive */
    @media (max-width: 600px) {
      main h2 {
        font-size: 1.8rem;
      }
      main p {
        font-size: 1rem;
      }
      .btn {
        padding: 12px 25px;
        font-size: 1rem;
      }
    }
  </style>
</head>
<body>
  <header>
    <img src="/src/logo.png" alt="VextaPay Logo" />
    <h1>VextaPay</h1>
  </header>

  <main>
    <h2>Secure Virtual Visa Cards for Worldwide Payments 🌍💳</h2>
    <p>
      Open your VextaPay account with simple KYC verification and get unlimited virtual cards for just $5. Enjoy multi-currency support and hassle-free international payments. Perfect for online shopping, subscriptions, and more!
    </p>
    <a href="https://vextapay.com" class="btn" target="_blank" rel="noopener noreferrer">Get Started 🚀</a>
  </main>

  <footer>
    &copy; 2025 Vexa Ltd. | Business Name: VextaPay | 63 Trafalgar Street, Oldham, England, OL1 2HW
  </footer>
</body>
</html>
`;
