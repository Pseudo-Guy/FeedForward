# FeedForward 🌾

> **Every meal saved is a life changed.**

FeedForward is a modern, beautifully designed **Food Donation & Redistribution Platform** built to combat food waste and hunger. By connecting surplus food from restaurants, events, and individuals with local NGOs and people in need—in real time—we aim to build a hunger-free community.

---

## 🎨 Design Aesthetic
The application features a **"Warm Organic Luxury"** aesthetic.
- **Color Palette:** Warm Cream backgrounds, Deep Forest Greens, Terracotta accents, and Saffron Golds.
- **Typography:** *Playfair Display* for elegant headings and *DM Sans* for clean, readable body text.
- **Interactions:** Subtle frosted-glass navbars, smooth page transitions, staggered entrance animations, and interactive micro-animations on cards and buttons.

---

## ✨ Key Features

- **Real-Time Listings:** Donors can quickly list their surplus food, specifying quantity, category, and expiry time.
- **Smart Filtering:** Users and NGOs can search and filter available food by city, food type (Cooked Meal, Vegetables, Packaged, etc.), and urgency.
- **Multi-Step Donation Form:** A beautifully animated 3-step form for donors to input food details, pickup location, and safety confirmations.
- **Responsive Design:** Fully responsive layout with mobile drawer menus, optimized grid layouts, and touch-friendly components.
- **Impact Tracking:** Live, scroll-triggered animated counters showcasing meals donated, active donors, and participating cities.

---

## 🛠️ Tech Stack

- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **Routing:** React Router v6
- **Styling:** Vanilla CSS (CSS Custom Properties, Flexbox, CSS Grid)
- **Animations:** CSS `@keyframes`, Transitions, and Javascript `IntersectionObserver`

---

## 🚀 Getting Started

Follow these instructions to run the project locally on your machine.

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Pseudo-Guy/FeedForward.git
   cd "FeedForward"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **View the app:**
   Open your browser and navigate to `http://localhost:5173`

---

## 📁 Project Structure

```text
src/
├── components/          # Reusable UI components
│   ├── FoodCard.jsx     # Card for individual food listings
│   ├── Footer.jsx       # Global footer
│   ├── ImpactMetric.jsx # Scroll-triggered animated counters
│   ├── Modal.jsx        # Reusable slide-in modal
│   ├── Navbar.jsx       # Frosted-glass navigation
│   ├── StepForm.jsx     # 3-step donation form
│   └── Testimonials.jsx # Auto-rotating review carousel
├── data/
│   └── mockData.js      # Dummy data for listings and testimonials
├── pages/
│   ├── Home.jsx         # Landing page
│   ├── Donate.jsx       # Food listing portal
│   ├── FindFood.jsx     # Search & filter food map
│   └── About.jsx        # Mission, Impact, and Team
├── App.jsx              # Main router configuration
├── index.css            # Global CSS variables, resets, and animations
└── main.jsx             # React entry point
```

---

## 🤝 Contributing
Contributions, issues, and feature requests are welcome! 
Feel free to check out the [issues page](https://github.com/Pseudo-Guy/FeedForward/issues) if you want to contribute.

---

*Made with 💛 for a hunger-free world.*
