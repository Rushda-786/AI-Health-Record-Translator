import React from "react";
import UploadSection from "./components/UploadSection";
import "./App.css";

function App() {
  return (
    <div className="app">

      {/* ================= NAVBAR ================= */}
      <nav className="navbar-custom">
        <div className="nav-container">

          <a href="#home" className="logo">

            <div className="logo-symbol">
              <span className="logo-cross">+</span>
              <span className="logo-heart">♥</span>
            </div>

            <div className="logo-text">
              <strong>HealthAI</strong>
              <span>Record Translator</span>
            </div>

          </a>

          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#features">Features</a>

            <a href="#upload" className="nav-button">
              Analyze Report
            </a>
          </div>

        </div>
      </nav>


      {/* ================= HERO ================= */}
      <section id="home" className="hero">

        <div className="hero-background-circle circle-one"></div>
        <div className="hero-background-circle circle-two"></div>

        <div className="hero-container">

          <div className="hero-content">

            <div className="hero-badge">
              ✨ AI-POWERED HEALTH TECHNOLOGY
            </div>

            <h1>
              Understand Your
              <span>Medical Reports</span>
              With Ease
            </h1>

            <p>
              Transform complicated medical reports into simple,
              understandable information using intelligent
              AI-powered analysis.
            </p>

            <div className="hero-buttons">

              <a href="#upload" className="primary-button">
                📄 Analyze My Report
              </a>

              <a href="#how-it-works" className="outline-button">
                Learn How It Works →
              </a>

            </div>

            <div className="hero-trust">

              <div>
                <strong>✓</strong>
                <span>Easy to understand</span>
              </div>

              <div>
                <strong>✓</strong>
                <span>Lab value analysis</span>
              </div>

              <div>
                <strong>✓</strong>
                <span>Educational purpose</span>
              </div>

            </div>

          </div>


          {/* ================= MEDICAL DASHBOARD ================= */}
          <div className="hero-visual">

            <div className="medical-dashboard">

              <div className="dashboard-header">

                <div className="doctor-avatar">
                  🩺
                </div>

                <div>
                  <h3>AI Health Analysis</h3>
                  <p>Medical Report</p>
                </div>

                <div className="online-dot"></div>

              </div>


              <div className="analysis-status">

                <div className="status-icon">
                  ✓
                </div>

                <div>
                  <strong>Analysis Complete</strong>
                  <span>Important values detected</span>
                </div>

              </div>


              <div className="health-items">

                <div className="health-item">

                  <div>
                    <span>Hemoglobin</span>
                    <strong>11.2 g/dL</strong>
                  </div>

                  <span className="status-low">
                    LOW
                  </span>

                </div>


                <div className="health-item">

                  <div>
                    <span>Glucose</span>
                    <strong>108 mg/dL</strong>
                  </div>

                  <span className="status-high">
                    HIGH
                  </span>

                </div>


                <div className="health-item">

                  <div>
                    <span>Vitamin B12</span>
                    <strong>180 pg/mL</strong>
                  </div>

                  <span className="status-low">
                    LOW
                  </span>

                </div>


                <div className="health-item">

                  <div>
                    <span>Vitamin D</span>
                    <strong>22 ng/mL</strong>
                  </div>

                  <span className="status-low">
                    LOW
                  </span>

                </div>

              </div>


              <div className="dashboard-footer">

                <span>🤖 AI Insight</span>

                <p>
                  Report successfully translated
                </p>

              </div>

            </div>


            <div className="floating-card floating-card-one">
              📊 <span>Lab Analysis</span>
            </div>

            <div className="floating-card floating-card-two">
              🧠 <span>AI Insights</span>
            </div>

            <div className="floating-card floating-card-three">
              ❤️ <span>Health First</span>
            </div>

          </div>

        </div>

      </section>


      {/* ================= ABOUT ================= */}
      <section id="about" className="about-section">

        <div className="section-container">

          <div className="section-title">

            <span>ABOUT THE PROJECT</span>

            <h2>
              Making Medical Information
              <span> Easier to Understand</span>
            </h2>

            <p>
              Medical reports often contain technical terms,
              abbreviations and laboratory values that can be
              difficult for ordinary users to understand.
            </p>

          </div>


          <div className="about-grid">

            <div className="about-card">

              <div className="about-icon">
                🧠
              </div>

              <h3>
                What is HealthAI?
              </h3>

              <p>
                HealthAI Record Translator is an educational
                AI-based web application designed to analyze
                medical report information and present it in
                simpler language.
              </p>

            </div>


            <div className="about-card">

              <div className="about-icon">
                📄
              </div>

              <h3>
                What Can It Analyze?
              </h3>

              <p>
                Users can upload PDF medical reports. The system
                extracts the report text, identifies important
                findings and analyzes selected laboratory values.
              </p>

            </div>


            <div className="about-card">

              <div className="about-icon">
                💡
              </div>

              <h3>
                Our Goal
              </h3>

              <p>
                The main goal is to make health information easier
                to read and understand while encouraging users to
                discuss important results with healthcare
                professionals.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= HOW IT WORKS ================= */}
      <section id="how-it-works" className="how-section">

        <div className="section-container">

          <div className="section-title">

            <span>HOW IT WORKS</span>

            <h2>
              Three Simple Steps
            </h2>

            <p>
              From medical report to simple explanation.
            </p>

          </div>


          <div className="steps">

            <div className="step">

              <div className="step-number">
                01
              </div>

              <div className="step-icon">
                📄
              </div>

              <h3>
                Upload Report
              </h3>

              <p>
                Upload your medical report as a PDF file.
              </p>

            </div>


            <div className="step-connector"></div>


            <div className="step">

              <div className="step-number">
                02
              </div>

              <div className="step-icon">
                🤖
              </div>

              <h3>
                AI Analysis
              </h3>

              <p>
                The application extracts and analyzes
                important information.
              </p>

            </div>


            <div className="step-connector"></div>


            <div className="step">

              <div className="step-number">
                03
              </div>

              <div className="step-icon">
                💡
              </div>

              <h3>
                Understand Results
              </h3>

              <p>
                View findings, laboratory values, charts and
                simple explanations.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FEATURES ================= */}
      <section id="features" className="features-section">

        <div className="section-container">

          <div className="section-title">

            <span>FEATURES</span>

            <h2>
              Intelligent Health Report Tools
            </h2>

            <p>
              Everything you need to understand the important
              parts of a medical report.
            </p>

          </div>


          <div className="features-grid">

            <div className="feature-card">

              <div className="feature-icon">
                📄
              </div>

              <h3>
                PDF Report Reading
              </h3>

              <p>
                Extract useful text and information from
                uploaded PDF medical reports.
              </p>

            </div>


            <div className="feature-card">

              <div className="feature-icon">
                🔍
              </div>

              <h3>
                Finding Detection
              </h3>

              <p>
                Identify important health-related findings
                mentioned in the report.
              </p>

            </div>


            <div className="feature-card">

              <div className="feature-icon">
                📊
              </div>

              <h3>
                Lab Value Analysis
              </h3>

              <p>
                Display laboratory values with reference
                ranges and status.
              </p>

            </div>


            <div className="feature-card">

              <div className="feature-icon">
                ⚠️
              </div>

              <h3>
                Abnormal Values
              </h3>

              <p>
                Highlight values that fall outside the
                provided reference range.
              </p>

            </div>


            <div className="feature-card">

              <div className="feature-icon">
                💬
              </div>

              <h3>
                Simple Explanation
              </h3>

              <p>
                Present technical medical information in
                easier language.
              </p>

            </div>


            <div className="feature-card">

              <div className="feature-icon">
                🩺
              </div>

              <h3>
                Doctor Discussion
              </h3>

              <p>
                Provide useful questions that users can
                discuss with healthcare professionals.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= UPLOAD ================= */}
      <section id="upload" className="upload-section">

        <div className="section-container">

          <div className="section-title">

            <span>AI HEALTH ANALYSIS</span>

            <h2>
              Analyze Your Medical Report
            </h2>

            <p>
              Upload a PDF report to begin the analysis.
            </p>

          </div>

          <UploadSection />

        </div>

      </section>


      {/* ================= DISCLAIMER ================= */}
      <section className="disclaimer-section">

        <div className="section-container">

          <div className="disclaimer">

            <div className="disclaimer-icon">
              ⚠️
            </div>

            <div>

              <h3>
                Important Medical Disclaimer
              </h3>

              <p>
                This application is an educational project and
                is not a replacement for professional medical
                advice, diagnosis or treatment. AI-generated
                information should not be used to make medical
                decisions. Always consult a qualified healthcare
                professional for medical concerns.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer className="footer">

        <div className="footer-container">

          <div className="footer-brand">

            <div className="footer-logo">
              <span className="footer-cross">+</span>
              <span className="footer-heart">♥</span>
            </div>

            <div>

              <strong>
                HealthAI
              </strong>

              <span>
                Record Translator
              </span>

            </div>

          </div>


          <p>
            Making medical information easier to understand.
          </p>


          <div className="footer-bottom">
            © 2026 HealthAI Record Translator • Educational Project
          </div>

        </div>

      </footer>

    </div>
  );
}

export default App;