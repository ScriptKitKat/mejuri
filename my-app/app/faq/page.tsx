"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

// FAQ data organized by categories
const faqData = {
  general: [
    {
      question: "What is MeJurix?",
      answer:
        "MeJurix is an AI-powered platform that specializes in medical records summarization for personal injury law firms, medical assessment professionals, and insurance companies. Our technology transforms complex medical records into clear, concise summaries, helping professionals make better decisions faster.",
    },
    {
      question: "How does MeJurix work?",
      answer:
        "Our platform uses advanced AI and natural language processing to analyze medical records, extract key information, and generate comprehensive summaries. Users upload medical documents to our secure platform, and our AI processes the information to create structured, easy-to-understand summaries highlighting important medical findings, treatments, and recommendations.",
    },
    {
      question: "Who can benefit from using MeJurix?",
      answer:
        "MeJurix is designed for:\n• Personal injury law firms handling medical-related cases\n• Medical assessment professionals\n• Insurance companies processing medical claims\n• Healthcare providers needing to review patient histories\n• Any professional who needs to quickly understand complex medical information",
    },
    {
      question: "How accurate are the medical record summaries?",
      answer:
        "Our AI has been trained on millions of medical documents and achieves over 95% accuracy in extracting and summarizing key medical information. We continuously improve our models through feedback from medical and legal professionals. While our summaries are highly accurate, we recommend they be used as a time-saving tool alongside professional judgment, not as a complete replacement for thorough review.",
    },
    {
      question: "How do I get started with MeJurix?",
      answer:
        "Getting started is easy:\n1. Request a demo through our website to see how MeJurix works with your specific use case\n2. Our team will guide you through the onboarding process and help set up your account\n3. Upload your medical records to our secure platform\n4. Receive comprehensive summaries within minutes\n5. Integrate the summaries into your workflow",
    },
  ],
  platform: [
    {
      question: "What file formats does MeJurix support?",
      answer:
        "MeJurix supports a wide range of file formats including PDF, DOC, DOCX, JPG, PNG, and TIFF. Our platform can process scanned documents using OCR technology to extract text from images.",
    },
    {
      question: "How long does it take to process a medical record?",
      answer:
        "Processing time depends on the length and complexity of the medical record. Most documents are processed within minutes, while larger files or batches may take up to an hour. Our platform provides real-time status updates so you always know when your summaries will be ready.",
    },
    {
      question: "Can I customize the summary format?",
      answer:
        "Yes, MeJurix offers customization options to tailor summaries to your specific needs. You can select different summary formats, highlight specific medical conditions or treatments, and adjust the level of detail included in each summary.",
    },
    {
      question: "Does MeJurix integrate with other software?",
      answer:
        "Yes, we offer API integrations with popular case management systems, document management platforms, and electronic health record systems. Our team can work with you to set up custom integrations for your specific workflow needs.",
    },
  ],
  security: [
    {
      question: "How does MeJurix ensure data security?",
      answer:
        "MeJurix employs enterprise-grade security measures including end-to-end encryption, secure cloud storage, and strict access controls. We are HIPAA compliant and follow industry best practices for data protection. Our platform undergoes regular security audits and penetration testing.",
    },
    {
      question: "Is MeJurix HIPAA compliant?",
      answer:
        "Yes, MeJurix is fully HIPAA compliant. We implement all required technical, physical, and administrative safeguards to protect personal health information (PHI). We provide Business Associate Agreements (BAAs) to all clients who handle PHI.",
    },
    {
      question: "Who has access to my uploaded documents?",
      answer:
        "Only authorized users within your organization can access your uploaded documents and generated summaries. Our staff does not access client data except in rare cases where technical support is requested, and only with explicit permission.",
    },
  ],
  pricing: [
    {
      question: "How is MeJurix priced?",
      answer:
        "MeJurix offers flexible subscription plans based on your organization's needs. Pricing is typically determined by the volume of documents processed monthly and the number of users who need access to the platform. Contact our sales team for a customized quote.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, we offer a 14-day free trial that includes processing up to 50 pages of medical records. This allows you to experience the platform's capabilities with your own documents before committing to a subscription.",
    },
    {
      question: "Are there any long-term contracts?",
      answer:
        "We offer both monthly and annual subscription options. Annual subscriptions come with a discount compared to monthly billing. We don't require long-term commitments beyond your chosen billing cycle.",
    },
  ],
}

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("general")

  const [expandedQuestions, setExpandedQuestions] = useState<Record<string, boolean>>({})

  // Toggle question expansion
  const toggleQuestion = (questionId: string) => {
    setExpandedQuestions((prev) => ({
      ...prev,
      [questionId]: !prev[questionId],
    }))
  }

  // Format answer text with line breaks
  const formatAnswer = (text: string) => {
    return text.split("\n").map((line, i) => (
      <p key={i} style={{ marginBottom: i < text.split("\n").length - 1 ? "8px" : "0" }}>
        {line}
      </p>
    ))
  }

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
            Find answers to common questions about MeJurix&apos;s AI-powered medical records summarization platform.
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
            {Object.keys(faqData).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                style={{
                  padding: "10px 25px",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  borderRadius: "30px",
                  backgroundColor: activeCategory === category ? "#B146D7" : "transparent",
                  color: "white",
                  fontSize: "16px",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
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
              {activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)} Questions
            </h2>

            {faqData[activeCategory as keyof typeof faqData].map((item, index) => {
              const questionId = `${activeCategory}-${index}`
              const isExpanded = expandedQuestions[questionId] || false

              return (
                <div
                  key={questionId}
                  style={{
                    marginBottom: index < faqData[activeCategory as keyof typeof faqData].length - 1 ? "30px" : "0",
                    borderBottom:
                      index < faqData[activeCategory as keyof typeof faqData].length - 1
                        ? "1px solid rgba(255, 255, 255, 0.1)"
                        : "none",
                    paddingBottom: "30px",
                  }}
                >
                  <div
                    onClick={() => toggleQuestion(questionId)}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                  >
                    <h3 style={{ fontSize: "20px", fontWeight: "500" }}>{item.question}</h3>
                    <div
                      style={{
                        width: "24px",
                        height: "24px",
                        borderRadius: "50%",
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "transform 0.3s ease",
                        transform: isExpanded ? "rotate(45deg)" : "rotate(0deg)",
                      }}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12 5V19"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M5 12H19"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div
                    style={{
                      marginTop: isExpanded ? "15px" : "0",
                      fontSize: "16px",
                      lineHeight: "1.6",
                      opacity: "0.8",
                      maxHeight: isExpanded ? "1000px" : "0",
                      overflow: "hidden",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {isExpanded && formatAnswer(item.answer)}
                  </div>
                </div>
              )
            })}
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

