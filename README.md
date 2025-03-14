# WELTH - AI Finance Platform

![WELTH Banner](./welth/public/banner.jpeg)

## Overview

WELTH is an AI-powered financial management platform that streamlines your budgeting and financial planning. It provides personalized, AI-driven insights and robust security features to keep your data safe and your finances under control.

## Features

- **AI-Powered Insights:** Receive monthly financial analysis and tailored recommendations using advanced AI.
- **Enhanced Security:** Robust bot protection and secure authentication ensure your financial data remains safe.
- **User-Friendly:** Intuitive interface designed for seamless navigation and effective financial management.

## Tech Stack

- **Frontend:** Next.js, Tailwind CSS
- **Backend:** Next.js API Routes, Server Actions
- **Database:** PostgreSQL with Prisma ORM
- **Authentication:** Clerk
- **AI/ML:** Google Gemini API
- **Security:** Bot Protection Integration

## Getting Started

### Prerequisites

- Node.js 16.x or higher
- PostgreSQL database
- Required API keys for Clerk, Google Gemini, and other services

### Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/Finance_Planner.git
    cd Finance_Planner/welth
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Set up environment variables:**  
   Create a `.env` file in the project root with the necessary keys:
    ```
    DATABASE_URL="postgresql://<username>:<password>@<host>:<port>/<dbname>"
    CLERK_SECRET_KEY="your-clerk-secret-key"
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your-clerk-publishable-key"
    GEMINI_API_KEY="your-gemini-api-key"
    ```

4. **Initialize the database:**
    ```bash
    npx prisma db push
    ```

5. **Run the development server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

WELTH is deployed on Vercel. View the live application [here](https://finance-planner-pi.vercel.app/).
