# Juris AI

Juris AI is an intelligent legal assistant designed to demystify complex legal contracts. By leveraging the power of generative AI, it provides users with simplified summaries, identifies key clauses, and offers actionable negotiation insights, all while prioritizing user privacy through ephemeral data handling.

## ✨ Core Features

- **AI-Powered Summaries:** Get easy-to-understand summaries of dense contract clauses.
- **Key Term Highlighting:** Automatically identify and define critical legal terminology within your documents.
- **Negotiation Insights:** Receive intelligent suggestions to strengthen your position during negotiations.
- **Secure & Private:** Uploaded files are processed in-memory and never permanently stored. Text extracted for analysis is held temporarily in Redis and deleted immediately after processing.
- **Flexible Authentication:** Secure login using Google OAuth or a traditional email/password strategy via Passport.js.

## 💻 Tech Stack

Our platform is built with a modern, robust technology stack:

- **Frontend:** [Next.js](https://nextjs.org/) (App Router), [Tailwind CSS](https://tailwindcss.com/)
- **Backend:** [Node.js](https://nodejs.org/), [Express](https://expressjs.com/)
- **AI Engine:** [Google's Gemini](https://ai.google.dev/)
- **Authentication:** [Passport.js](http://www.passportjs.org/) (Google OAuth 2.0 & Local Strategy)
- **Temporary Storage:** [Redis](https://redis.io/)
- **File Handling:** Support for PDF and DOCX file uploads.

## 🌊 Data Flow

User privacy and data security are fundamental to Juris AI. Here’s a step-by-step look at how we handle your data:

1.  **Authentication:** The user securely logs into their account.
2.  **File Upload:** The user uploads a contract (PDF or DOCX) via the secure frontend.
3.  **Text Extraction & Temporary Storage:** The backend scans the file, extracts the raw text, and stores it temporarily in a Redis cache with a short time-to-live (TTL). The original file is discarded.
4.  **AI Analysis:** The extracted text is sent to the Gemini API for processing.
5.  **Display Results:** The AI-generated summaries and insights are sent back to the user's dashboard.
6.  **Data Deletion:** The corresponding text data in Redis is immediately and automatically deleted upon successful analysis.
