# 📚 Media Collection

This is a full-stack web application that allows users to **browse books and movies** in a clean and organized interface. Our goal is to build a user-friendly media collection platform powered by a robust backend and intuitive frontend.

---

## 🚀 Getting Started (Locally)

Follow these steps to get the project and database working on your local machine.

### 🔧 Prerequisites

- [MongoDB Compass](https://www.mongodb.com/products/compass)
- [Node.js](https://nodejs.org/)
- IntelliJ IDEA (for backend)
- Git & GitHub access

### 🛠 Setup Instructions

1. **Clone the Repository**
   ```
   git clone https://github.com/YOUR_REPO_HERE.git
   cd WP_media_collection
   ```

2. **Switch to a branch (NOT main)**  
   Make sure you're on a branch like `dev`, `feature-xyz`, etc. before doing any development work.

3. **Setup the Backend**
   - Open the `backend` folder in IntelliJ IDEA
   - Make sure your project recognizes the `pom.xml` as a Maven project
   - Navigate to:  
     `backend/studyTracker/src/main/resources`  
     Create a file named exactly:
     ```
     .env
     ```
   - Paste the following into `.env`:
     ```
     MONGO_DATABASE="sample_mflix"
     MONGO_USER=CHECK IN TELEGRAM 
     MONGO_PASSWORD=CHECK IN TELEGRAM
     MONGO_CLUSTER=CHECK IN TELEGRAM
     ```

4. **Connect to the Database**
   - Open MongoDB Compass
   - Use this URI to connect:
     ```
     CHECK IN TELEGRAM
     ```

5. **Setup the Frontend**
   ```
   cd frontend
   npm install
   npm start
   ```

---

## 🧑‍💻 Team Members

- **Ulugbek Khamidov** — Team Leader  
- **Elbek Rustamov** — Frontend Developer  
- **Humoyun Niyatqobulov** — UI/UX Designer  
- **Bekmurod O'ktamov** — Backend Developer #1  
- **Agzamxo'ja Nugmonov** — Backend Developer #2  

> Backend can be split into database management and HTTP endpoints. Please communicate and coordinate.

---

## ⚠️ Notes

- The `.env` file is **ignored in version control** for security.
- Always **pull the latest from `main`**, but develop in separate branches and open pull requests to merge.
- If you’re stuck, say something early so the team can help.

---

Let’s lock in and build something solid. 💪
