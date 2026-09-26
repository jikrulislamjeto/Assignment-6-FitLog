# 🏋️ FitLog 

<p align="center">
  <strong>Train Hard. Log Honest. 💪</strong>
</p>

<p align="center">
  A modern, dark-themed workout library built with Next.js, TypeScript, and Tailwind CSS.
</p>

---

🌐 Deployment

The project is deployed using Vercel.

Live Website

🔗 

GitHub Repository

🔗 https://github.com/jikrulislamjeto/Assignment-6-FitLog

---

## 👨‍💻 Developer

**Md. Jikrul Islam Jeto**

---

## 📌 About The Project

**FitLog** is a modern workout library and planning application designed for people who want to organize their workouts in a simple and focused way.

Users can browse workouts, view detailed exercise information, add exercises to today's plan, save workouts for later, and track their planned workout statistics.

The application follows a clean, dark gym-inspired interface with a responsive design for mobile, tablet, and desktop devices.

---

## ✨ Features

### 🏠 Workout Library
- Browse all available workouts from the API
- Responsive workout card layout
- Workout images and muscle-group tags
- Equipment, duration, calories, and rating information
- Click any workout to view its details

### 🔎 Workout Details
- Large workout illustration
- Workout description
- Muscle-group/category tags
- Equipment and difficulty information
- Sets, reps, duration, calories, and rating
- Step-by-step workout instructions

### 📋 Today's Plan
- Add workouts to today's plan
- Maximum of 5 workouts in the plan
- View planned workout statistics
- View workout details
- Remove workouts from the plan
- Mark workouts as done

### 🔖 Saved Workouts
- Save workouts for later
- View saved workouts from the My Plan page
- Remove saved workouts when no longer needed

### 📊 Live Workout Statistics
- Total exercises
- Total workout minutes
- Total calories
- Plan and Saved counters update automatically

### 🔔 Toast Notifications
- Confirmation when a workout is added
- Notification when a workout is saved
- Notification when a workout is removed
- Notification when a workout is marked as done

### 🔃 Sorting
- Sort workouts by:
  - Duration
  - Calories
  - Rating
- Default sorting is by Duration

### 💾 Local Storage
- Today's Plan is persisted using `localStorage`
- Saved workouts are persisted using `localStorage`
- Data remains available after refreshing the page

### 📱 Responsive Design
- Mobile-friendly navigation
- Responsive hero section
- Responsive workout grid
- Tablet and desktop layouts
- Mobile-friendly My Plan page

### 🚫 Error & Loading Handling
- Home page loading animation
- Loading state while workout data is fetched
- Workout-not-found handling
- Custom 404 page for invalid routes

---

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| ⚛️ React | Building UI components |
| ▲ Next.js | Application framework |
| 📘 TypeScript | Type-safe development |
| 🎨 Tailwind CSS | Styling and responsive design |
| 🧭 Next.js App Router | Page navigation and routing |
| 💾 LocalStorage | Persisting plan and saved workouts |
| 🔗 REST API | Fetching workout data |
| 🎯 Lucide React | UI icons |

---

## 🗂️ Main Pages

| Page | Route | Description |
|------|-------|-------------|
| 🏠 Workout Library | `/` | Browse all workouts |
| 📖 Workout Details | `/details/[id]` | View complete workout information |
| 📋 My Plan | `/my-plan` | Manage today's plan and saved workouts |
| 🚫 404 | `not-found.tsx` | Handles invalid routes |

---

## 🔥 Project Highlights

- 🎯 Clean and focused workout experience
- 🏋️ Workout library powered by API data
- 📋 Five-workout daily plan limit
- 🔖 Save workouts for later
- 📊 Live workout statistics
- 💾 Persistent data with LocalStorage
- 📱 Fully responsive design
- 🔔 User-friendly toast notifications
- 🔃 Workout sorting functionality
- ⚡ Built with Next.js App Router

---

## 📸 UI Sections

### 🏠 Home / Workout Library
The home page includes:

- Navigation bar
- Workout hero/banner
- Workout library
- Sorting controls
- Responsive workout cards
- Footer

### 📖 Workout Details

Each workout details page includes:

- Workout image
- Description
- Muscle groups
- Key specifications
- Instructions
- Add to Plan button
- Save for Later button

### 📋 My Plan

The My Plan page includes:

- Exercise count
- Total minutes
- Total calories
- Today's Plan tab
- Saved tab
- Workout cards
- View Details
- Mark as Done
- Remove workout

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL

2. Navigate to the project
cd FitLog
3. Install dependencies
npm install
4. Start the development server
npm run dev
5. Open in browser
http://localhost:3000
📦 Build for Production

To create a production build:

npm run build

Then start the production server:

npm start

👨‍💻 Author
Md. Jikrul Islam Jeto

📜 License

This project was created for educational purposes as part of a web development assignment.