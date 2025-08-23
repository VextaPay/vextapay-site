/**
 * VextaPay Landing Page Worker
 * Serves a professional static HTML landing page with SEO optimization.
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
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Roboto', sans-serif;
      background: linear-gradient(-45deg, #667eea, #764ba2, #6b8dd6, #a27dff);
      background-size: 400% 400%;
      animation: bgMove 20s ease infinite;
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
      background: rgba(0, 0, 0, 0.2);
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    }

    header img {
      height: 50px;
      margin-right: 15px;
      filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.5));
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
      text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.6);
    }

    main p {
      font-size: 1.2rem;
      line-height: 1.6;
      max-width: 700px;
      margin: 0 auto 30px;
      text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
    }

    .btn {
      display: inline-block;
      padding: 15px 35px;
      background: #ff6f61;
      color: white;
      font-weight: 700;
      text-decoration: none;
      border-radius: 30px;
      box-shadow: 0 5px 15px rgba(255, 111, 97, 0.6);
      transition: background 0.3s ease, box-shadow 0.3s ease;
      font-size: 1.1rem;
    }

    .btn:hover {
      background: #ff3b2e;
      box-shadow: 0 8px 20px rgba(255, 59, 46, 0.8);
    }

    footer {
      background: rgba(0, 0, 0, 0.3);
      padding: 15px 20px;
      text-align: center;
      font-size: 0.9rem;
      color: #ddd;
      box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.3);
    }

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
    <img src="https://i.postimg.cc/D024frNL/fulllogo-transparent-nobuffer.png" alt="VextaPay Logo" />
    <h1>VextaPay</h1>
  </header>

  <main>
    <h2>Unlimited Virtual Visa Cards for Online Shopping, Subscriptions & Freelancers</h2>
    <p>
      VextaPay helps you create secure, multi-currency virtual cards with simple KYC. For only $5, access unlimited Visa cards, global payments, and secure online transactions. Great for freelancers, e-commerce users, travelers, and subscription management.
    </p>
    <a href="https://vextapay.com" class="btn" target="_blank" rel="noopener noreferrer">Create Your First Card 🚀</a>
  </main>

  <footer>
    &copy; 2025 Vexa Ltd. | Business Name: VextaPay | Company Number: 16373129<br/>
    Registered Office: 63 Trafalgar Street, Oldham, England, OL1 2HW
  </footer>
</body>
</html>`;

/**
 * Cloudflare Worker fetch handler
 * @param {Request} request - Incoming HTTP request
 * @returns {Promise<Response>} - HTML response
 */
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
