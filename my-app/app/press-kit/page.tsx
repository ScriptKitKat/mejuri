import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Download } from "lucide-react"

export default function PressKitPage() {
  return (
    <div style={{ backgroundColor: "#111827", color: "white", minHeight: "100vh" }}>
      <Navbar />

      <main>
        {/* Hero Section */}
        <section
          style={{
            padding: "120px 20px 80px",
            maxWidth: "1200px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <div style={{ marginBottom: "20px" }}>
            <span style={{ fontSize: "16px", opacity: "0.8" }}>AI SAAS</span>
          </div>

          <h1
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontFamily: "Georgia, Times New Roman, serif",
              fontWeight: "normal",
              lineHeight: "1.2",
              maxWidth: "900px",
              margin: "0 auto 30px",
            }}
          >
            Revolutionizing <span style={{ color: "#B146D7" }}>Legal-Tech</span> with
            a focus on <span style={{ color: "#B146D7" }}>Medical Litigation</span>
          </h1>

          <p
            style={{
              fontSize: "18px",
              maxWidth: "800px",
              margin: "0 auto 40px",
              lineHeight: "1.6",
            }}
          >
            Mejurix is a vertical Legal-Tech uniquely tailored for{" "}
            medical litigation. Our clients are{" "}
            Personal Injury Lawyers and law firms handling{" "}
            Medical Class Action Cases in the U.S. and Canada.
          </p>

          <button
            style={{
              backgroundColor: "#B146D7",
              color: "white",
              padding: "12px 24px",
              border: "none",
              borderRadius: "4px",
              fontSize: "16px",
              fontWeight: "500",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              margin: "0 auto",
            }}
          >
            <Download size={18} />
            Download Press Kit
          </button>
        </section>

        {/* Challenges Section */}
        <section
          style={{
            padding: "40px 20px 80px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "40px",
            }}
          >
            {/* Challenge 1 */}
            <div
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.03)",
                padding: "30px",
                borderRadius: "8px",
              }}
            >
              <h3
                style={{
                  fontSize: "22px",
                  marginBottom: "20px",
                  color: "#B146D7",
                }}
              >
                Extended Litigation
              </h3>
              <p style={{ fontSize: "16px", lineHeight: "1.6", opacity: "0.9" }}>
                In personal injury and class action lawsuits, each client&apos;s medical records can exceed{" "}
                <span style={{ fontWeight: "bold" }}>500-1000 pages</span>, requiring weeks or even months for review.
              </p>
            </div>

            {/* Challenge 2 */}
            <div
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.03)",
                padding: "30px",
                borderRadius: "8px",
              }}
            >
              <h3
                style={{
                  fontSize: "22px",
                  marginBottom: "20px",
                  color: "#B146D7",
                }}
              >
                Increased Social Costs
              </h3>
              <p style={{ fontSize: "16px", lineHeight: "1.6", opacity: "0.9" }}>
                Litigation delays lead to substantial financial burdens, with{" "}
                <span style={{ fontWeight: "bold" }}>billions of dollars spent annually</span> in the U.S. These
                inefficiencies increase costs not only for law firms but also for insurers and courts, further delaying
                the entire legal process.
              </p>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section
          style={{
            padding: "80px 20px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontFamily: "Georgia, Times New Roman, serif",
              fontWeight: "normal",
              textAlign: "center",
              marginBottom: "40px",
            }}
          >
            Our Solutions
          </h2>

          <p
            style={{
              fontSize: "18px",
              maxWidth: "800px",
              margin: "0 auto 60px",
              textAlign: "center",
              lineHeight: "1.6",
            }}
          >
            Mejurix addresses the key challenges in medical litigation with innovative AI-powered tools.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
            {/* Solution 1 */}
            <div
              style={{
                display: "flex",
                gap: "30px",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  minWidth: "60px",
                  height: "60px",
                  backgroundColor: "#B146D7",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  fontSize: "20px",
                  borderRadius: "4px",
                }}
              >
                01
              </div>
              <div>
                <h3
                  style={{
                    fontSize: "24px",
                    marginBottom: "15px",
                    color: "#B146D7",
                  }}
                >
                  Accelerated Medical Record Summarization
                </h3>
                <p style={{ fontSize: "16px", lineHeight: "1.6", opacity: "0.9", marginBottom: "15px" }}>
                  AI-Powered Automation: Mejurix processes and summarizes complex medical reports in a fraction of the
                  time. Tasks requiring <span style={{ fontWeight: "bold" }}>weeks</span> can now be completed in{" "}
                  <span style={{ fontWeight: "bold" }}>hours</span>, allowing law firms to manage more cases
                  efficiently.
                </p>
              </div>
            </div>

            {/* Solution 2 */}
            <div
              style={{
                display: "flex",
                gap: "30px",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  minWidth: "60px",
                  height: "60px",
                  backgroundColor: "#B146D7",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  fontSize: "20px",
                  borderRadius: "4px",
                }}
              >
                02
              </div>
              <div>
                <h3
                  style={{
                    fontSize: "24px",
                    marginBottom: "15px",
                    color: "#B146D7",
                  }}
                >
                  Advanced Private Medical Q&A System
                </h3>
                <p style={{ fontSize: "16px", lineHeight: "1.6", opacity: "0.9", marginBottom: "15px" }}>
                  Guided Case Exploration: The system provides{" "}
                  <span style={{ fontWeight: "bold" }}>example questions</span> based on the summarized report to help
                  users identify potential case issues. Follow-up questions are also suggested, enabling a deeper
                  exploration of critical case elements.
                </p>
              </div>
            </div>

            {/* Solution 3 */}
            <div
              style={{
                display: "flex",
                gap: "30px",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  minWidth: "60px",
                  height: "60px",
                  backgroundColor: "#B146D7",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  fontSize: "20px",
                  borderRadius: "4px",
                }}
              >
                03
              </div>
              <div>
                <h3
                  style={{
                    fontSize: "24px",
                    marginBottom: "15px",
                    color: "#B146D7",
                  }}
                >
                  Tailored Medical-Legal Workflows
                </h3>
                <p style={{ fontSize: "16px", lineHeight: "1.6", opacity: "0.9", marginBottom: "15px" }}>
                  The platform is optimized for personal injury and class action lawsuits, providing specific solutions
                  for medical record analysis and issue identification with a specific focus on addressing the
                  complexities of <span style={{ fontWeight: "bold" }}>medical litigation</span>.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}