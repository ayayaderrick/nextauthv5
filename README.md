# Next.js Authentication App

A robust authentication application built with [Next.js](https://nextjs.org/), supporting user login through [NextAuth.js v5](https://next-auth.js.org/) using credentials and GitHub sign-in. This project utilizes [Prisma](https://www.prisma.io/) to model data, and [MongoDB](https://www.mongodb.com/) as the database for storing user information securely.

## Tech Stack

- **Frontend**: [React](https://reactjs.org/), [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/)
- **Authentication**: [NextAuth.js v5](https://next-auth.js.org/) (Credential & GitHub sign-in)
- **Database**: [MongoDB](https://www.mongodb.com/)
- **ORM**: [Prisma](https://www.prisma.io/)

## Features

- **User Authentication**: Supports secure login with GitHub or custom credentials.
- **Session Management**: Handles sessions with NextAuth.
- **Data Modeling**: Prisma for database schema and migrations.
- **Responsive UI**: Styled with Tailwind CSS for a clean and adaptable design.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) v14+ with [npm](https://npmjs.com) or [yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/) (local or hosted)
- [GitHub OAuth Application](https://github.com/settings/developers) for GitHub login

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo

   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Environment Variables**:
   Create a .env file in the root directory and add the following environment variables:

   # NextAuth.js secret key

   AUTH_SECRET=your-nextauth-secret

   # Database URL for MongoDB

   DATABASE_URL="mongodb+srv://<username>:<password>@cluster.mongodb.net/your-db?retryWrites=true&w=majority"

   # GitHub OAuth credentials

   GITHUB_ID=your-github-client-id
   GITHUB_SECRET=your-github-client-secret

4. **Setup Prisma**:

   ```bash
   npx prisma generate
   npx prisma migrate dev --name init
   ```

5. **Run the development server**:

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
