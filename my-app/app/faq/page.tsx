import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function FAQPage() {
  return (
    <div style={{ backgroundColor: "#111827", color: "white", minHeight: "100vh" }}>
      <Navbar />

      <main>
        {/* Hero Section */}
        <section
          style={{
            padding: "100px 20px 60px",
            textAlign: "center",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(3rem, 8vw, 5rem)",
              fontFamily: "Georgia, Times New Roman, serif",
              fontWeight: "normal",
              marginBottom: "30px",
            }}
          >
            Frequently Asked Questions
          </h1>

          <p
            style={{
              fontSize: "18px",
              maxWidth: "600px",
              margin: "0 auto 60px",
              opacity: "0.8",
              lineHeight: "1.6",
            }}
          >
            Find answers to common questions about MeJurix's AI-powered medical records summarization platform.
          </p>
        </section>

        {/* FAQ Categories Section */}
        <section
          style={{
            padding: "0 20px 80px",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "15px",
              flexWrap: "wrap",
              marginBottom: "60px",
            }}
          >
            <button
              style={{
                padding: "10px 25px",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                borderRadius: "30px",
                backgroundColor: "#B146D7",
                color: "white",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              General
            </button>
            <button
              style={{
                padding: "10px 25px",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                borderRadius: "30px",
                backgroundColor: "transparent",
                color: "white",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Platform
            </button>
            <button
              style={{
                padding: "10px 25px",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                borderRadius: "30px",
                backgroundColor: "transparent",
                color: "white",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Security
            </button>
            <button
              style={{
                padding: "10px 25px",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                borderRadius: "30px",
                backgroundColor: "transparent",
                color: "white",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Pricing
            </button>
          </div>

          {/* FAQ Items */}
          <div style={{ marginBottom: "80px" }}>
            <h2
              style={{
                fontSize: "28px",
                fontFamily: "Georgia, Times New Roman, serif",
                fontWeight: "normal",
                marginBottom: "40px",
                textAlign: "center",
              }}
            >
              General Questions
            </h2>

            {/* FAQ Item 1 */}
            <div
              style={{
                marginBottom: "30px",
                borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                paddingBottom: "30px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <h3 style={{ fontSize: "20px", fontWeight: "500" }}>What is MeJurix?</h3>
                <div
                  style={{
                    width: "24px",
                    height: "24px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 5V19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div style={{ marginTop: "15px", fontSize: "16px", lineHeight: "1.6", opacity: "0.8" }}>
                MeJurix is an AI-powered platform that specializes in medical records summarization for personal injury
                law firms, medical assessment professionals, and insurance companies. Our technology transforms complex
                medical records into clear, concise summaries, helping professionals make better decisions faster.
              </div>
            </div>

            {/* FAQ Item 2 */}
            <div
              style={{
                marginBottom: "30px",
                borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                paddingBottom: "30px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <h3 style={{ fontSize: "20px", fontWeight: "500" }}>How does MeJurix work?</h3>
                <div
                  style={{
                    width: "24px",
                    height: "24px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 5V19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div style={{ marginTop: "15px", fontSize: "16px", lineHeight: "1.6", opacity: "0.8" }}>
                Our platform uses advanced AI and natural language processing to analyze medical records, extract key
                information, and generate comprehensive summaries. Users upload medical documents to our secure
                platform, and our AI processes the information to create structured, easy-to-understand summaries
                highlighting important medical findings, treatments, and recommendations.
              </div>
            </div>

            {/* FAQ Item 3 */}
            <div
              style={{
                marginBottom: "30px",
                borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                paddingBottom: "30px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <h3 style={{ fontSize: "20px", fontWeight: "500" }}>Who can benefit from using MeJurix?</h3>
                <div
                  style={{
                    width: "24px",
                    height: "24px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 5V19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div style={{ marginTop: "15px", fontSize: "16px", lineHeight: "1.6", opacity: "0.8" }}>
                MeJurix is designed for:
                <ul style={{ marginTop: "10px", paddingLeft: "20px" }}>
                  <li style={{ marginBottom: "8px" }}>Personal injury law firms handling medical-related cases</li>
                  <li style={{ marginBottom: "8px" }}>Medical assessment professionals</li>
                  <li style={{ marginBottom: "8px" }}>Insurance companies processing medical claims</li>
                  <li style={{ marginBottom: "8px" }}>Healthcare providers needing to review patient histories</li>
                  <li>Any professional who needs to quickly understand complex medical information</li>
                </ul>
              </div>
            </div>

            {/* FAQ Item 4 */}
            <div
              style={{
                marginBottom: "30px",
                borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                paddingBottom: "30px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <h3 style={{ fontSize: "20px", fontWeight: "500" }}>How accurate are the medical record summaries?</h3>
                <div
                  style={{
                    width: "24px",
                    height: "24px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 5V19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div style={{ marginTop: "15px", fontSize: "16px", lineHeight: "1.6", opacity: "0.8" }}>
                Our AI has been trained on millions of medical documents and achieves over 95% accuracy in extracting
                and summarizing key medical information. We continuously improve our models through feedback from
                medical and legal professionals. While our summaries are highly accurate, we recommend they be used as a
                time-saving tool alongside professional judgment, not as a complete replacement for thorough review.
              </div>
            </div>

            {/* FAQ Item 5 */}
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <h3 style={{ fontSize: "20px", fontWeight: "500" }}>How do I get started with MeJurix?</h3>
                <div
                  style={{
                    width: "24px",
                    height: "24px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 5V19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div style={{ marginTop: "15px", fontSize: "16px", lineHeight: "1.6", opacity: "0.8" }}>
                Getting started is easy:
                <ol style={{ marginTop: "10px", paddingLeft: "20px" }}>
                  <li style={{ marginBottom: "8px" }}>
                    Request a demo through our website to see how MeJurix works with your specific use case
                  </li>
                  <li style={{ marginBottom: "8px" }}>
                    Our team will guide you through the onboarding process and help set up your account
                  </li>
                  <li style={{ marginBottom: "8px" }}>Upload your medical records to our secure platform</li>
                  <li style={{ marginBottom: "8px" }}>Receive comprehensive summaries within minutes</li>
                  <li>Integrate the summaries into your workflow</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Platform Questions Section */}
          <div style={{ marginBottom: "80px", display: "none" }}>
            <h2
              style={{
                fontSize: "28px",
                fontFamily: "Georgia, Times New Roman, serif",
                fontWeight: "normal",
                marginBottom: "40px",
                textAlign: "center",
              }}
            >
              Platform Questions
            </h2>

            {/* Additional FAQ items would go here */}
          </div>
        </section>

        {/* Still Have Questions Section */}
        <section
          style={{
            padding: "80px 20px",
            backgroundColor: "rgba(255, 255, 255, 0.03)",
            textAlign: "center",
          }}
        >
          <div
            style={{
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontFamily: "Georgia, Times New Roman, serif",
                fontWeight: "normal",
                marginBottom: "30px",
              }}
            >
              Still Have Questions?
            </h2>
            <p
              style={{
                fontSize: "18px",
                marginBottom: "40px",
                opacity: "0.8",
                lineHeight: "1.6",
              }}
            >
              Our team is here to help. Contact us for personalized assistance with any questions about our platform.
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "20px",
                flexWrap: "wrap",
              }}
            >
              <button
                style={{
                  backgroundColor: "#B146D7",
                  color: "white",
                  padding: "14px 30px",
                  border: "none",
                  borderRadius: "4px",
                  fontSize: "16px",
                  fontWeight: "500",
                  cursor: "pointer",
                }}
              >
                Contact Support
              </button>
              <button
                style={{
                  backgroundColor: "transparent",
                  color: "white",
                  padding: "14px 30px",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  borderRadius: "4px",
                  fontSize: "16px",
                  fontWeight: "500",
                  cursor: "pointer",
                }}
              >
                Schedule a Demo
              </button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          style={{
            padding: "100px 20px",
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))",
            backgroundSize: "cover",
            backgroundPosition: "center",
            textAlign: "center",
          }}
        >
          <div
            style={{
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                fontFamily: "Georgia, Times New Roman, serif",
                fontWeight: "normal",
                marginBottom: "30px",
              }}
            >
              Ready to Transform Your Medical Record Analysis?
            </h2>

            <p
              style={{
                fontSize: "18px",
                marginBottom: "40px",
                opacity: "0.9",
                lineHeight: "1.6",
                maxWidth: "600px",
                margin: "0 auto 40px",
              }}
            >
              Join leading law firms and insurance companies already using MeJurix to save time and improve accuracy.
            </p>

            <button
              style={{
                backgroundColor: "white",
                color: "black",
                padding: "14px 30px",
                border: "none",
                borderRadius: "4px",
                fontSize: "16px",
                fontWeight: "500",
                cursor: "pointer",
              }}
            >
              Request a Demo
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

