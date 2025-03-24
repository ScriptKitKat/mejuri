import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function NewsPage() {
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
              fontSize: "clamp(4rem, 10vw, 6rem)",
              fontFamily: "Georgia, Times New Roman, serif",
              fontWeight: "normal",
              marginBottom: "30px",
            }}
          >
            News
          </h1>

          <p
            style={{
              fontSize: "18px",
              maxWidth: "600px",
              margin: "0 auto 60px",
              opacity: "0.8",
            }}
          >
            The latest news from MeJurix.
          </p>

          {/* Filter Buttons */}
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
                backgroundColor: "transparent",
                color: "white",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              All News
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
              Press Releases
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
              Company Updates
            </button>
          </div>
        </section>

        {/* News Grid */}
        <section
          style={{
            padding: "0 20px 100px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
              gap: "30px",
            }}
          >
            {/* News Item 1 */}
            <div
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "200px",
                  backgroundColor: "#1a1a1a",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    bottom: "20px",
                    left: "20px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <div style={{ fontSize: "18px", fontWeight: "bold" }}>MeJurix</div>
                  <div style={{ fontSize: "18px", opacity: "0.6" }}>/</div>
                  <div style={{ fontSize: "18px", opacity: "0.6" }}>Microsoft</div>
                </div>
              </div>
              <div style={{ padding: "25px" }}>
                <h3
                  style={{
                    fontSize: "24px",
                    marginBottom: "15px",
                    fontWeight: "normal",
                  }}
                >
                  MeJurix Announces Integration with Microsoft Health Cloud
                </h3>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "20px",
                  }}
                >
                  <div
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      backgroundColor: "#B146D7",
                      marginRight: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    MT
                  </div>
                  <span style={{ fontSize: "14px", opacity: "0.8" }}>MeJurix Team</span>
                </div>
                <p style={{ fontSize: "16px", lineHeight: "1.6", opacity: "0.8" }}>
                  Our new integration with Microsoft Health Cloud enables seamless medical record analysis and
                  summarization for healthcare providers.
                </p>
              </div>
            </div>

            {/* News Item 2 */}
            <div
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "200px",
                  backgroundColor: "#1a1a1a",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    bottom: "20px",
                    left: "20px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <div style={{ fontSize: "18px", fontWeight: "bold" }}>MeJurix</div>
                </div>
              </div>
              <div style={{ padding: "25px" }}>
                <h3
                  style={{
                    fontSize: "24px",
                    marginBottom: "15px",
                    fontWeight: "normal",
                  }}
                >
                  Introducing AI Agents in MeJurix
                </h3>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "20px",
                  }}
                >
                  <div
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      backgroundColor: "#B146D7",
                      marginRight: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    MT
                  </div>
                  <span style={{ fontSize: "14px", opacity: "0.8" }}>MeJurix Team</span>
                </div>
                <p style={{ fontSize: "16px", lineHeight: "1.6", opacity: "0.8" }}>
                  Our new AI agents feature allows for automated analysis of complex medical documents with
                  unprecedented accuracy.
                </p>
              </div>
            </div>

            {/* News Item 3 */}
            <div
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "200px",
                  backgroundColor: "#1a1a1a",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    bottom: "20px",
                    left: "20px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <div style={{ fontSize: "18px", fontWeight: "bold" }}>MeJurix</div>
                </div>
              </div>
              <div style={{ padding: "25px" }}>
                <h3
                  style={{
                    fontSize: "24px",
                    marginBottom: "15px",
                    fontWeight: "normal",
                  }}
                >
                  MeJurix Values: Our Commitment to Privacy
                </h3>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "20px",
                  }}
                >
                  <div
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      backgroundColor: "#B146D7",
                      marginRight: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    SP
                  </div>
                  <span style={{ fontSize: "14px", opacity: "0.8" }}>Sarah Parker, CEO</span>
                </div>
                <p style={{ fontSize: "16px", lineHeight: "1.6", opacity: "0.8" }}>
                  Our foundational values guide our approach to handling sensitive medical data with the highest
                  standards of privacy and security.
                </p>
              </div>
            </div>

            {/* News Item 4 */}
            <div
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "200px",
                  backgroundColor: "#1a1a1a",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    bottom: "20px",
                    left: "20px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <div style={{ fontSize: "18px", fontWeight: "bold" }}>MeJurix</div>
                  <div style={{ fontSize: "18px", opacity: "0.6" }}>/</div>
                  <div style={{ fontSize: "18px", opacity: "0.6" }}>Johnson & Associates</div>
                </div>
              </div>
              <div style={{ padding: "25px" }}>
                <h3
                  style={{
                    fontSize: "24px",
                    marginBottom: "15px",
                    fontWeight: "normal",
                  }}
                >
                  Johnson & Associates Adopts MeJurix for Medical Legal Cases
                </h3>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "20px",
                  }}
                >
                  <div
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      backgroundColor: "#B146D7",
                      marginRight: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    MT
                  </div>
                  <span style={{ fontSize: "14px", opacity: "0.8" }}>MeJurix Team</span>
                </div>
                <p style={{ fontSize: "16px", lineHeight: "1.6", opacity: "0.8" }}>
                  Leading personal injury law firm Johnson & Associates has adopted MeJurix to streamline their medical
                  record analysis process.
                </p>
              </div>
            </div>

            {/* News Item 5 */}
            <div
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "200px",
                  backgroundColor: "#1a1a1a",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    bottom: "20px",
                    left: "20px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <div style={{ fontSize: "18px", fontWeight: "bold" }}>MeJurix</div>
                </div>
              </div>
              <div style={{ padding: "25px" }}>
                <h3
                  style={{
                    fontSize: "24px",
                    marginBottom: "15px",
                    fontWeight: "normal",
                  }}
                >
                  Series B Funding Announcement: $30M
                </h3>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "20px",
                  }}
                >
                  <div
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      backgroundColor: "#B146D7",
                      marginRight: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    SP
                  </div>
                  <span style={{ fontSize: "14px", opacity: "0.8" }}>Sarah Parker, CEO</span>
                </div>
                <p style={{ fontSize: "16px", lineHeight: "1.6", opacity: "0.8" }}>
                  MeJurix has secured $30 million in Series B funding to accelerate development of our AI-powered
                  medical record summarization platform.
                </p>
              </div>
            </div>

            {/* News Item 6 */}
            <div
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "200px",
                  backgroundColor: "#1a1a1a",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    bottom: "20px",
                    left: "20px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <div style={{ fontSize: "18px", fontWeight: "bold" }}>MeJurix</div>
                </div>
              </div>
              <div style={{ padding: "25px" }}>
                <h3
                  style={{
                    fontSize: "24px",
                    marginBottom: "15px",
                    fontWeight: "normal",
                  }}
                >
                  Enterprise-Grade RAG Systems for Medical Analysis
                </h3>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "20px",
                  }}
                >
                  <div
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      backgroundColor: "#B146D7",
                      marginRight: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    JL
                  </div>
                  <span style={{ fontSize: "14px", opacity: "0.8" }}>James Lee, CTO</span>
                </div>
                <p style={{ fontSize: "16px", lineHeight: "1.6", opacity: "0.8" }}>
                  Our new Retrieval-Augmented Generation (RAG) systems provide unprecedented accuracy in medical
                  document analysis and summarization.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section
          style={{
            padding: "80px 20px",
            backgroundColor: "rgba(255, 255, 255, 0.03)",
            textAlign: "center",
          }}
        >
          <div
            style={{
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            <h2
              style={{
                fontSize: "32px",
                fontFamily: "Georgia, Times New Roman, serif",
                fontWeight: "normal",
                marginBottom: "20px",
              }}
            >
              Stay Updated
            </h2>
            <p
              style={{
                fontSize: "16px",
                marginBottom: "30px",
                opacity: "0.8",
                lineHeight: "1.6",
              }}
            >
              Subscribe to our newsletter to receive the latest news and updates from MeJurix.
            </p>

            <div
              style={{
                display: "flex",
                gap: "10px",
                maxWidth: "500px",
                margin: "0 auto",
              }}
            >
              <input
                type="email"
                placeholder="Your email address"
                style={{
                  flex: "1",
                  padding: "12px 16px",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  borderRadius: "4px",
                  color: "white",
                  fontSize: "16px",
                }}
              />
              <button
                style={{
                  backgroundColor: "#B146D7",
                  color: "white",
                  padding: "12px 24px",
                  border: "none",
                  borderRadius: "4px",
                  fontSize: "16px",
                  cursor: "pointer",
                }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

