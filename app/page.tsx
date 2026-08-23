"use client";

import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("home");

  const materials = [
    { name: "Cement", supplier: "BuildLink Supplies", location: "Nairobi" },
    { name: "Sand", supplier: "Quality Builders", location: "Kiambu" },
    { name: "Steel Bars", supplier: "Strong Steel Ltd", location: "Nairobi" },
    { name: "Bricks", supplier: "Local Brick Suppliers", location: "Machakos" },
  ];

  return (
    <main>
      <header className="header">
        <div className="logo">BuildLink</div>

        <nav>
          <button onClick={() => setActiveTab("home")}>Home</button>
          <button onClick={() => setActiveTab("find")}>Find Materials</button>
          <button onClick={() => setActiveTab("request")}>
            Request Materials
          </button>
        </nav>
      </header>

      {activeTab === "home" && (
        <>
          <section className="hero">
            <h1>Find Building Materials. Connect With Suppliers.</h1>
            <p>
              BuildLink helps homeowners, contractors, builders, suppliers and
              anyone working on a construction project find and request
              building materials easily.
            </p>

            <div className="hero-buttons">
              <button onClick={() => setActiveTab("find")}>
                Find Materials
              </button>
              <button onClick={() => setActiveTab("request")}>
                Request Materials
              </button>
            </div>
          </section>

          <section className="features">
            <div>
              <h2>Find Materials</h2>
              <p>
                Search for construction materials and discover suppliers that
                can help with your project.
              </p>
            </div>

            <div>
              <h2>Request Materials</h2>
              <p>
                Tell suppliers what materials you need and receive responses
                from available sellers.
              </p>
            </div>

            <div>
              <h2>Connect Easily</h2>
              <p>
                BuildLink brings buyers, suppliers, contractors and builders
                together in one place.
              </p>
            </div>
          </section>
        </>
      )}

      {activeTab === "find" && (
        <section className="page">
          <h1>Find Materials</h1>
          <p>Browse available construction materials and suppliers.</p>

          <div className="cards">
            {materials.map((material) => (
              <div className="card" key={material.name}>
                <h2>{material.name}</h2>
                <p>
                  <strong>Supplier:</strong> {material.supplier}
                </p>
                <p>
                  <strong>Location:</strong> {material.location}
                </p>
                <button>Contact Supplier</button>
              </div>
            ))}
          </div>
        </section>
      )}

      {activeTab === "request" && (
        <section className="page">
          <h1>Request Materials</h1>
          <p>Tell us what you need and connect with suppliers.</p>

          <form
            className="request-form"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Your material request has been submitted!");
            }}
          >
            <input placeholder="Your name" required />
            <input placeholder="Material needed" required />
            <input placeholder="Quantity" required />
            <input placeholder="Your location" required />
            <textarea
              placeholder="Additional details about what you need"
              rows={5}
            />

            <button type="submit">Submit Request</button>
          </form>
        </section>
      )}

      <footer>
        <h2>BuildLink</h2>
        <p>Connecting people with building materials and suppliers.</p>
      </footer>

      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: #f7f7f7;
          color: #222;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 8%;
          background: white;
          border-bottom: 1px solid #e5e5e5;
        }

        .logo {
          font-size: 28px;
          font-weight: bold;
        }

        nav {
          display: flex;
          gap: 10px;
        }

        button {
          padding: 12px 18px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          background: #111;
          color: white;
          font-size: 15px;
        }

        nav button {
          background: transparent;
          color: #222;
        }

        .hero {
          text-align: center;
          padding: 100px 20px;
          max-width: 900px;
          margin: auto;
        }

        .hero h1 {
          font-size: 52px;
          margin-bottom: 20px;
        }

        .hero p {
          font-size: 20px;
          line-height: 1.6;
          color: #555;
        }

        .hero-buttons {
          display: flex;
          justify-content: center;
          gap: 15px;
          margin-top: 30px;
          flex-wrap: wrap;
        }

        .features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
          gap: 20px;
          padding: 50px 8%;
          background: white;
        }

        .features div,
        .card {
          padding: 25px;
          background: #f7f7f7;
          border-radius: 12px;
        }

        .page {
          padding: 70px 8%;
          min-height: 70vh;
        }

        .cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 20px;
          margin-top: 30px;
        }

        .card {
          background: white;
          border: 1px solid #e5e5e5;
        }

        .request-form {
          max-width: 600px;
          display: flex;
          flex-direction: column;
          gap: 15px;
          margin-top: 30px;
        }

        input,
        textarea {
          padding: 15px;
          border: 1px solid #ccc;
          border-radius: 8px;
          font-size: 16px;
        }

        footer {
          text-align: center;
          padding: 40px 20px;
          background: #111;
          color: white;
        }

        @media (max-width: 600px) {
          .header {
            flex-direction: column;
            gap: 15px;
          }

          .hero h1 {
            font-size: 36px;
          }

          nav {
            flex-wrap: wrap;
            justify-content: center;
          }
        }
      `}</style>
    </main>
  );
}
