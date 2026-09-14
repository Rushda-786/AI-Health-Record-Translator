import React from "react";
import "./App.css";
import UploadSection from "./components/UploadSection";

function App() {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-container">
          <div className="brand">
            <div className="logo-symbol">
              <span className="logo-cross">+</span>
              <span className="logo-heart">♥</span>
            </div>

            <div>
              <h2>HealthAI</h2>
              <span>Record Translator</span>
            </div>
          </div>

          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#features">Features</a>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-tag">AI-POWERED HEALTHCARE</p>

            <h1>
              Understand Your
              <br />
              <span>Medical Reports</span>
              <br />
              With Ease
            </h1>

            <p className="hero-description">
              Upload your medical report and get a simple, easy-to-understand
              explanation of your health information.
            </p>

            <a href="#upload" className="hero-button">
              Analyze Your Report →
            </a>
          </div>

          <div className="hero-card">
            <div className="card-header">
              <span>Medical Report</span>
              <span>✓</span>
            </div>

            <div className="report-line"></div>
            <div className="report-line short"></div>
            <div className="report-line"></div>

            <div className="health-status">
              <span>Health Analysis</span>
              <strong>✓ Complete</strong>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="section-heading">
          <p className="section-tag">ABOUT HEALTHAI</p>
          <h2>Healthcare information made simple</h2>
          <p>
            HealthAI Record Translator helps users understand complicated
            medical reports using simple language.
          </p>
        </div>
      </section>

      <section id="how-it-works" className="section light-section">
        <div className="section-heading">
          <p className="section-tag">HOW IT WORKS</p>
          <h2>Three simple steps</h2>
        </div>

        <div className="steps-grid">
          <div className="feature-card">
            <div className="step-number">01</div>
            <h3>Upload</h3>
            <p>Upload your medical report in PDF format.</p>
          </div>

          <div className="feature-card">
            <div className="step-number">02</div>
            <h3>Analyze</h3>
            <p>Our system extracts and analyzes important information.</p>
          </div>

          <div className="feature-card">
            <div className="step-number">03</div>
            <h3>Understand</h3>
            <p>View simple explanations and important findings.</p>
          </div>
        </div>
      </section>

      <section id="features" className="section">
        <div className="section-heading">
          <p className="section-tag">FEATURES</p>
          <h2>Everything in one place</h2>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <h3>📄 Report Extraction</h3>
            <p>Extract important information from uploaded medical reports.</p>
          </div>

          <div className="feature-card">
            <h3>🔍 Finding Detection</h3>
            <p>Identify important medical findings from the report.</p>
          </div>

          <div className="feature-card">
            <h3>📊 Lab Analysis</h3>
            <p>View laboratory values and understand their status.</p>
          </div>

          <div className="feature-card">
            <h3>💡 Simple Explanation</h3>
            <p>Convert complex medical information into simple language.</p>
          </div>
        </div>
      </section>

      <section id="upload" className="upload-section">
        <div className="section-heading">
          <p className="section-tag">GET STARTED</p>
          <h2>Analyze Your Medical Report</h2>
          <p>Upload a PDF report to begin your analysis.</p>
        </div>

        <UploadSection />
      </section>

      <footer className="footer">
        <div className="footer-logo">
          <span className="footer-cross">+</span>
          <span className="footer-heart">♥</span>
        </div>

        <h3>HealthAI Record Translator</h3>

        <p>
          Educational project for understanding medical reports.
        </p>

        <small>
          ⚠️ This tool is for educational purposes only and is not a medical
          diagnosis.
        </small>
      </footer>
    </div>
  );
}

export default App;