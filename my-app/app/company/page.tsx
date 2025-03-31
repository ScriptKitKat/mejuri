import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function CompanyPage() {
  return (
    <div style={{ backgroundColor: "#101728", color: "white", minHeight: "100vh" }}>
      <Navbar />

      <main>
        {/* Hero Section - Similar to the black and white image */}
        <section
          style={{
            padding: "120px 20px 80px",
            textAlign: "center",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <div style={{ marginBottom: "20px" }}>
            <span style={{ fontSize: "16px", opacity: "0.8" }}>Company</span>
          </div>

          <h1
            style={{
              fontSize: "clamp(3rem, 8vw, 5rem)",
              fontFamily: "Georgia, Times New Roman, serif",
              fontWeight: "normal",
              lineHeight: "1.1",
              maxWidth: "900px",
              margin: "0 auto 30px",
            }}
          >
            Streamlining
            <br />
            Legal Medical Review
          </h1>

          <p
            style={{
              fontSize: "18px",
              maxWidth: "600px",
              margin: "0 auto 40px",
              lineHeight: "1.6",
              opacity: "0.9",
            }}
          >
            Harnessing AI-driven insights, Mejurix transforms medical litigation
            by enabling law firms to analyze complex medical records
            with speed and precision.
          </p>

          <button
            style={{
              backgroundColor: "white",
              color: "black",
              padding: "12px 24px",
              border: "none",
              borderRadius: "4px",
              fontSize: "16px",
              fontWeight: "500",
              cursor: "pointer",
            }}
          >
            Request a Demo
          </button>
        </section>

        {/* Leadership Section */}
        <section
          style={{
            padding: "80px 20px",
            maxWidth: "1200px",
            margin: "0 auto 80px",
            textAlign: "center",
          }}
        >
            <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontFamily: "Georgia, Times New Roman, serif",
              fontWeight: "normal",
              marginBottom: "80px",
            }}
            >
            Combining Legal
            <br />
            and AI Expertise
            </h2>

            <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "50px",
              maxWidth: "900px",
              margin: "0 auto",
              marginBottom: "80px", // Add vertical space between rows
            }}
            >
            {/* Leader 1 */}
            <div>
              <div
              style={{
                width: "200px",
                height: "200px",
                backgroundColor: "#1a1a1a",
                borderRadius: "8px",
                margin: "0 auto 20px",
              }}
              ></div>
              <h3 style={{ fontSize: "24px", marginBottom: "5px" }}>Jong Ko</h3>
              <p style={{ fontSize: "16px", opacity: "0.8", marginBottom: "15px" }}>CEO & Co-Founder</p>
              <p style={{ fontSize: "14px", opacity: "0.7", marginBottom: "15px" }}>
              Former, CEO of Happysona Ai Accelerator<br />
              Former, CEO of FOBIKR Inc.
              </p>
              <div style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
              <a href="https://www.linkedin.com/in/jongko/" target="_blank" rel="noopener noreferrer">
                <div
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                  d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  />
                  <path
                  d="M6 9H2V21H6V9Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  />
                  <path
                  d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  />
                </svg>
                </div>
              </a>
              </div>
            </div>

            {/* Leader 2 */}
            <div>
              <div
              style={{
                width: "200px",
                height: "200px",
                backgroundColor: "#1a1a1a",
                borderRadius: "8px",
                margin: "0 auto 20px",
              }}
              ></div>
              <h3 style={{ fontSize: "24px", marginBottom: "5px" }}>Ilho Ye</h3>
              <p style={{ fontSize: "16px", opacity: "0.8", marginBottom: "15px" }}>CTO & Co-Founder</p>
              <p style={{ fontSize: "14px", opacity: "0.7", marginBottom: "15px" }}>
              Former Engineering Manager at Twitter <br /> Former Software Development Engineer at Microsoft
              </p>

              <div style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
              <a href="https://www.linkedin.com/in/ilho-ye-95478a32/" target="_blank" rel="noopener noreferrer">
                <div
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                  d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  />
                  <path
                  d="M6 9H2V21H6V9Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  />
                  <path
                  d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  />
                </svg>
                </div>
              </a>
              </div>
            </div>
            </div>

            <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "50px",
              maxWidth: "900px",
              margin: "0 auto",
            }}
            >
            {/* Leader 3 */}
            <div>
              <div
              style={{
                width: "200px",
                height: "200px",
                backgroundColor: "#1a1a1a",
                borderRadius: "8px",
                margin: "0 auto 20px",
              }}
              ></div>
              <h3 style={{ fontSize: "24px", marginBottom: "5px" }}>Jae Cho</h3>
              <p style={{ fontSize: "16px", opacity: "0.8", marginBottom: "15px" }}>CLO & Co-Founder</p>
              <p style={{ fontSize: "14px", opacity: "0.7", marginBottom: "15px" }}>
              Lawyer and Personal Injury Law Expert
              </p>

              <div style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
              <a href="https://www.linkedin.com/in/jae-cho-08152015/" target="_blank" rel="noopener noreferrer">
                <div
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                  d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  />
                  <path
                  d="M6 9H2V21H6V9Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  />
                  <path
                  d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  />
                </svg>
                </div>
              </a>
              </div>
            </div>

            {/* Leader 4 */}
            <div>
              <div
              style={{
                width: "200px",
                height: "200px",
                backgroundColor: "#1a1a1a",
                borderRadius: "8px",
                margin: "0 auto 20px",
              }}
              ></div>
              <h3 style={{ fontSize: "24px", marginBottom: "5px" }}>Charles Hong</h3>
              <p style={{ fontSize: "16px", opacity: "0.8", marginBottom: "15px" }}>CFO & Co-Founder</p>
              <p style={{ fontSize: "14px", opacity: "0.7", marginBottom: "15px" }}>
              Former Senior Economist at S & P Global Market Intelligence
              </p>
              <div style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
              <a href="https://www.linkedin.com/in/charles-hongcw/" target="_blank" rel="noopener noreferrer">
                <div
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                  d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  />
                  <path
                  d="M6 9H2V21H6V9Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  />
                  <path
                  d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  />
                </svg>
                </div>
              </a>
              </div>
            </div>
          </div>
        </section>
        {/* Vision & Mission Section - Similar to the colorful image but in black and white style */}
        <section
          style={{
            padding: "80px 20px",
            backgroundColor: "rgba(255, 255, 255, 0.03)",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            {/* Vision */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 2fr",
                gap: "50px",
                marginBottom: "80px",
                alignItems: "start",
              }}
            >
              <div>
                <h2
                  style={{
                    fontSize: "28px",
                    fontWeight: "bold",
                    marginBottom: "20px",
                  }}
                >
                  Our Vision
                </h2>
              </div>
              <div>
                <h3
                  style={{
                    fontSize: "32px",
                    fontFamily: "MejuriFont",
                    fontWeight: "normal",
                    marginBottom: "20px",
                    fontStyle: "italic",
                  }}
                >
                  Transforming Healthcare Litigation
                </h3>
                <p
                  style={{
                    fontFamily: "MejuriFont",
                    fontSize: "16px",
                    lineHeight: "1.8",
                    opacity: "0.9",
                  }}
                >
                  Reducing inefficiencies in medical litigation to shorten case durations and lower legal costs,
                  ultimately improving national healthcare systems by reducing societal burdens.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 2fr",
                gap: "50px",
                marginBottom: "80px",
                alignItems: "start",
              }}
            >
              <div>
                <h2
                  style={{
                    fontSize: "28px",
                    fontWeight: "bold",
                    marginBottom: "20px",
                  }}
                >
                  Our Mission
                </h2>
              </div>
              <div>
                <h3
                  style={{
                    fontSize: "32px",
                    fontFamily: "Georgia, Times New Roman, serif",
                    fontWeight: "normal",
                    marginBottom: "20px",
                    fontStyle: "italic",
                  }}
                >
                  Medical-Legal Synergy
                </h3>
                <p
                  style={{
                    fontSize: "16px",
                    lineHeight: "1.8",
                    opacity: "0.9",
                  }}
                >
                  Building a seamless bridge between medical and legal professionals through AI-driven platforms that
                  revolutionize decision-making in litigation.
                </p>
              </div>
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
              Ready to Simplify Your Processes?
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
              Contact us today to discover how MeJurix can revolutionize your data handling and decision-making
              processes.
            </p>

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
              Learn More
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

