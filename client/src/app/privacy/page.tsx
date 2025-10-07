"use client";

import { JSX, useEffect } from "react";
import {
  Shield,
  Lock,
  Eye,
  FileText,
  Users,
  Clock,
  AlertCircle,
  Mail,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ContentBlock {
  text?: string;
  subtitle?: string;
  items?: string[];
  emphasis?: boolean;
}

interface Section {
  id: string;
  title: string;
  icon: LucideIcon;
  content: ContentBlock[];
}

const sections: Section[] = [
  {
    id: "intro",
    title: "Introduction",
    icon: Shield,
    content: [
      {
        text: 'Welcome to JurisAI ("we," "our," or "us"). Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our AI-powered contract analysis platform ("Service").',
      },
      {
        text: "By accessing or using our Service, you agree to this Privacy Policy.",
      },
    ],
  },
  {
    id: "collection",
    title: "1. Information We Collect",
    icon: FileText,
    content: [
      {
        text: "We collect the following types of information to provide and improve our Service:",
      },
      {
        subtitle: "a. User Information",
        items: [
          "Account details: When you sign in using Google or other methods, we collect your name, email address, and profile information.",
          "Usage data: We collect logs, device details, and activity information to improve performance and security.",
        ],
      },
      {
        subtitle: "b. Uploaded Documents",
        items: [
          "Contract files: When you upload a contract or document for AI analysis, it is processed securely and temporarily stored for analysis purposes only.",
          "We do not share, sell, or reuse your uploaded documents for training our AI models.",
        ],
      },
      {
        subtitle: "c. Analytical & Technical Data",
        items: [
          "Information about your interactions (e.g., analysis requests, time spent, system performance) to optimize user experience.",
          "Cookies and similar technologies to improve app functionality and analytics.",
        ],
      },
    ],
  },
  {
    id: "usage",
    title: "2. How We Use Your Information",
    icon: Eye,
    content: [
      {
        text: "We use your information solely to:",
        items: [
          "Analyze uploaded contracts and generate AI-powered insights.",
          "Provide summaries, risk assessments, and recommendations.",
          "Improve the accuracy, speed, and security of our AI systems.",
          "Respond to support requests and improve customer experience.",
          "Comply with legal and regulatory obligations.",
        ],
      },
      {
        text: "We never use your uploaded documents for model training or third-party sharing.",
        emphasis: true,
      },
    ],
  },
  {
    id: "retention",
    title: "3. Data Retention",
    icon: Clock,
    content: [
      {
        items: [
          "Uploaded contracts and analysis data are stored temporarily and deleted automatically after processing or within a short retention period (typically 24–48 hours).",
          "Account and usage data are retained as long as your account is active or as required by law.",
        ],
      },
    ],
  },
  {
    id: "security",
    title: "4. Data Security",
    icon: Lock,
    content: [
      {
        text: "We use advanced security practices to safeguard your information, including:",
        items: [
          "End-to-end encryption during data transfer.",
          "Secure cloud storage with limited access.",
          "Role-based access controls and audit logging.",
          "Regular security audits and vulnerability monitoring.",
        ],
      },
      {
        text: "However, no online service is completely secure. By using JurisAI, you acknowledge that absolute security cannot be guaranteed.",
      },
    ],
  },
  {
    id: "sharing",
    title: "5. Sharing of Information",
    icon: Users,
    content: [
      {
        text: "We do not sell, rent, or trade your personal or uploaded data. We may share limited information only in the following cases:",
        items: [
          "With service providers who help us operate our platform (e.g., cloud storage, authentication).",
          "When required by law or to protect our rights and users' safety.",
          "With your explicit consent, when you choose to share results or outputs externally.",
        ],
      },
    ],
  },
  {
    id: "rights",
    title: "6. Your Rights",
    icon: Shield,
    content: [
      {
        text: "You have the right to:",
        items: [
          "Access, update, or delete your account information.",
          "Request deletion of uploaded contracts or analysis results.",
          "Withdraw consent for data collection at any time (may affect service functionality).",
        ],
      },
      {
        text: "To exercise your rights, contact us at support@jurisai.com.",
      },
    ],
  },
  {
    id: "cookies",
    title: "7. Cookies and Tracking",
    icon: Eye,
    content: [
      {
        text: "We use minimal cookies for:",
        items: [
          "Authentication (session management).",
          "User analytics (performance and usage optimization).",
        ],
      },
      {
        text: "You can manage or disable cookies in your browser settings.",
      },
    ],
  },
  {
    id: "ai-outputs",
    title: "8. AI-Generated Outputs",
    icon: AlertCircle,
    content: [
      {
        text: "All AI-generated insights are for informational purposes only and should not be treated as legal advice. You are responsible for verifying the accuracy and appropriateness of any AI-generated recommendations.",
      },
    ],
  },
  {
    id: "changes",
    title: "9. Changes to This Policy",
    icon: FileText,
    content: [
      {
        text: 'We may update this Privacy Policy from time to time. Changes will be posted on this page with the "Last Updated" date. Continued use of our Service after changes means you accept the revised policy.',
      },
    ],
  },
];

export default function PrivacyPolicy(): JSX.Element {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-white relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Header */}
      <header className="border-b border-black/10 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container max-w-5xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Privacy Policy</h1>
              <p className="text-sm text-gray-600">JurisAI</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container max-w-5xl mx-auto px-4 py-16 relative">
        {/* Sections */}
        <div className="space-y-12">
          {sections.map((section: Section) => {
            const IconComponent = section.icon;
            return (
              <section
                key={section.id}
                className="scroll-mt-24"
                id={section.id}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold mt-1">{section.title}</h2>
                </div>

                <div className="ml-16 space-y-6">
                  {section.content.map(
                    (block: ContentBlock, blockIndex: number) => (
                      <div key={blockIndex} className="space-y-3">
                        {block.text && (
                          <p
                            className={`text-lg leading-relaxed ${
                              block.emphasis
                                ? "font-semibold text-black"
                                : "text-gray-700"
                            }`}
                          >
                            {block.text}
                          </p>
                        )}

                        {block.subtitle && (
                          <h3 className="text-xl font-bold mt-4 mb-2">
                            {block.subtitle}
                          </h3>
                        )}

                        {block.items && (
                          <ul className="space-y-3">
                            {block.items.map(
                              (item: string, itemIndex: number) => (
                                <li
                                  key={itemIndex}
                                  className="flex items-start gap-3 text-gray-700 leading-relaxed"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-black mt-2.5 flex-shrink-0" />
                                  <span>{item}</span>
                                </li>
                              )
                            )}
                          </ul>
                        )}
                      </div>
                    )
                  )}
                </div>
              </section>
            );
          })}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative border-t border-black/10 mt-24">
        <div className="container max-w-5xl mx-auto px-4 py-8">
          <p className="text-center text-gray-600">
            © 2025 JurisAI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
