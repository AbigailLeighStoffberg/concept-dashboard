# Hospitality Partner Dashboard

> A high-performance, mobile-responsive dashboard concept designed for managing business metrics and partner services.

[**🔗 View Live Demo**](https://concept-dashboard.lovable.app/)

---

### 🎯 Project Goal
This project is a **UI/UX Concept** and **Technical Demo** created to demonstrate how modern web technologies (React, Tailwind, AI integration) can be used to enhance the partner experience for travel platforms.

*Note: This is an unofficial concept project created for portfolio purposes and is not affiliated with any specific services.*

### 🛠️ Tech Stack
* **Frontend:** React, TypeScript, Vite
* **Styling:** Tailwind CSS, Shadcn UI
* **Design Principles:** Mobile-First, Clean Architecture, Bento-Grid Layout

### ✨ Key Features
* **Real-time Analytics:** Visualizing guest scans and revenue with Recharts.
* **AI-Driven Insights:** A concept feature that parses data to suggest actionable business moves (e.g., "Add late-night food options").
* **Responsive Design:** Optimized for mobile usage by busy hotel managers.

### 🏗️ Component Structure
The codebase follows a modular structure to separate concerns and ensure maintainability:

```text
src/
├── components/
│   ├── dashboard/       # Specialized business logic (Stats, Charts)
│   ├── ui/              # Reusable primitives (Buttons, Cards)
│   └── layout/          # Main app shell and navigation
├── pages/               # Route views
└── lib/                 # Utilities and mock data generators
