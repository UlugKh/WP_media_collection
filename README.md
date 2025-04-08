# 📚 Study Tracker Web App

A full-stack web application that helps students track their study sessions. This project is built using **Spring Boot** for the backend and **React.js** for the frontend, with future support for online database integration.

---

## 🧱 Tech Stack

- **Backend:** Java, Spring Boot
- **Frontend:** React.js, Axios
- **Database:** (To be decided – MongoDB or H2 for testing)
- **Other Tools:** Git, IntelliJ, npm

---

## 🚀 Getting Started

### 🔧 Backend Setup (Spring Boot)

1. Clone the repo and open it in IntelliJ or your Java IDE.
2. Run the Spring Boot application (`StudyTrackerApplication.java`).
3. The server will start at `http://localhost:8080`.

#### API Endpoints (currently mock):
- `GET /api/sessions` – returns hardcoded study session list
- `POST /api/sessions` – accepts new study session data

> ⚠️ Database is not connected yet — current data is mock data returned from controller.

---

### 🎨 Frontend Setup (React)

> Requires **Node.js** installed. Download from: https://nodejs.org

1. Open terminal (outside IntelliJ) and go to the project root or a separate folder.
2. Run:

   ```bash
   npx create-react-app study-tracker-frontend
   cd study-tracker-frontend
   npm install axios
   npm start
