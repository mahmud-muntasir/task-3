# 🛰️ Infinite Scroll - User Feed

This feature implements an infinite scroll user feed with real-time data fetching from a paginated API. It uses React Query for efficient data handling, displays each user using a reusable `<UserCard />` component, and includes skeleton loaders and error boundaries for a smooth UX. The list is virtualized for high performance and supports full keyboard accessibility.

> 🌐 **Live Site**: [https://muntasir-task-3.vercel.app](https://muntasir-task-3.vercel.app)

---

## ⚙️ Setup Instructions

Follow the steps below to run the project locally:
- git clone https://github.com/mahmud-muntasir/task-3.git
- cd task-3
- npm install
- npm run dev

---

## 🛠 Framework & Tools

- **Next.js v15** – React framework for full-stack web applications  
- **Tailwind CSS v4** – Utility-first CSS framework for modern UI  
- **TanStack Query (React Query)** – For data fetching and caching  
- **TanStack Virtualizer** – For list virtualization and infinite scrolling  
- **React Icons** – Icon library for accessible UI components

---

## ⚠️ Limitations & Tradeoffs
CORS Issue in Production

https://muntasir-task-3.vercel.app

The application is deployed at [https://muntasir-task-3.vercel.app](https://muntasir-task-3.vercel.app) but is currently affected by CORS restrictions in the production environment. This limits the app’s ability to fetch data from the remote API due to missing cross-origin permissions.
