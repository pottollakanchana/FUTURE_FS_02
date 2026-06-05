# CRM - Client Lead Management System

A Full-Stack (MERN) Lead Management application built to capture, view, and track client leads in real time. The application is completely split into decoupled frontend and backend services for clean development and optimal cloud scaling.

## 🚀 Live Links
* *Frontend UI:* [https://future-fs-02-mx7g.vercel.app](https://future-fs-02-mx7g.vercel.app)
* *Backend API:* [https://future-fs-02-iota-nine.vercel.app/api/leads](https://future-fs-02-iota-nine.vercel.app/api/leads)

## 🛠️ Tech Stack & Architecture
* *Frontend:* React.js (Deploys statically via Create React App configuration on Vercel)
* *Backend:* Node.js / Express.js (Deploys as production Serverless Functions on Vercel)
* *Database:* MongoDB Atlas (Cloud managed cluster secured with custom IP whitelist access rules)

## 📂 Project Structure
* /CRM/client - The user interface form, client-side data fetching service, and lead tracking display table.
* /CRM/server - Express routing engine, connection driver configurations (db.js), and database schemas.
